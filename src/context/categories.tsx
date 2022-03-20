import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react'
import type { Categorie } from '../types/categorie'

import api from '../services/api'

interface ContextProviderProps {
    children: ReactNode
}

interface MostViewedCategories {
    categorieId: number
    views: number
}

interface CategoriesContextData {
    mostVieweds: MostViewedCategories[]
    categories: Categorie[]
    handleCategorieViews: (viewSum: number, index: number) => void
}

const CategoriesContext = createContext<CategoriesContextData>({} as CategoriesContextData)

export function MostViewedCategoriesProvider ({ children }: ContextProviderProps) {
    const [mostVieweds, setMostVieweds] = useState<MostViewedCategories[]>([])
    const [categories, setCategories] = useState<Categorie[]>([])

    useEffect(() => {
        api.get('categories')
            .then(response => {
                setCategories(response.data)
            })
            .catch(() => {})
    }, [])

    const handleCategorieViews = (viewsSum: number, index: number) => {
        const categoriesWithViews = categories
        categoriesWithViews[index].views = viewsSum
    }

    return (
        <CategoriesContext.Provider value={{ 
            mostVieweds,
            categories,
            handleCategorieViews
        }}
        >
            {children}
        </CategoriesContext.Provider>
    )
}

export const useCategories = (): CategoriesContextData => {
    const context = useContext(CategoriesContext)

    return context
}
