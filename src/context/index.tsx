import React, { ReactNode } from 'react'

import { MostViewedCategoriesProvider } from './categories'

interface AppProviderProps {
  children: ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return <MostViewedCategoriesProvider>{children}</MostViewedCategoriesProvider>
}
