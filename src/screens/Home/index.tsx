import React, { useState, useEffect } from 'react'
import { FlatList, ListRenderItemInfo } from 'react-native'

import { FilterInput } from '../../components/filter'
import { Loading } from '../../components/loading'
import { CategoriesList } from '../../components/categoriesList'
import { Footer } from '../../components/footer'
import { useCategories } from '../../context/categories'
import { ItemValue } from '@react-native-picker/picker/typings/Picker'
import type { PickerData } from '../../components/filter/types'
import type { Categorie } from '../../types/categorie'

import * as S from './styles'

export function Home() {

    const [loading, setLoading] = useState(true)
    const { categories } = useCategories()
    const [selectedFilter, setSelectedFilter] = useState('')
    const [filterTypes] = useState<PickerData[]>([
        {
            label: 'Padrão',
            value: 'default'
        },
        {
            label: 'A-Z',
            value: 'asc'
        },
        {
            label: 'Z-A',
            value: 'desc'
        },
        {
            label: 'Mais visualizados',
            value: 'mostViewed'
        },
        {
            label: 'Menos visualizados',
            value: 'leastViewed'
        }
    ])

    useEffect(() => {
        setLoading(false)
    }, [])

    const handleCategoriesFilter = (value: ItemValue) => {
        setSelectedFilter(value.toString())
        switch(value) {
            case 'default':
                categories.sort((firstCategorieName: Categorie, secondCategorieName: Categorie) => 
                    firstCategorieName.name.localeCompare(secondCategorieName.name)
                )
                break
            case 'asc':
                categories.sort((firstCategorieName: Categorie, secondCategorieName: Categorie) => 
                    firstCategorieName.name.localeCompare(secondCategorieName.name)
                )
                break
            case 'desc':
                categories.sort((firstCategorieName: Categorie, secondCategorieName: Categorie) => 
                    -1 * firstCategorieName.name.localeCompare(secondCategorieName.name)
                )
                break
            case 'mostViewed':
                categories.sort((firstCategorieName: Categorie, secondCategorieName: Categorie) => 
                    firstCategorieName.views - secondCategorieName.views
                )
                break
            case 'leastViewed':
                categories.sort((firstCategorieName: Categorie, secondCategorieName: Categorie) => 
                    firstCategorieName.views < secondCategorieName.views ? 1 : -1
                )
                break
        }
    }

    const renderCategories = (value: ListRenderItemInfo<Categorie>) => {
        if(value.index === categories.length - 1) {
            return <Footer />
        }
        return <CategoriesList categorie={value}/>
    }

    return(loading ?
            <Loading />
        :
            <S.Container>
                <FilterInput
                    selectedValue={selectedFilter}
                    onValueChange={(value) => handleCategoriesFilter(value)} 
                    title='ORDENAR POR:' 
                    value={filterTypes} 
                />
                <FlatList 
                    data={categories} 
                    renderItem={(value) => renderCategories(value)}
                />
            </S.Container>
    )
}
