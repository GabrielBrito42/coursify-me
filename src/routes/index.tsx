import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { Home } from '../screens/Home'
import { ArticlePage } from '../screens/ArticlePage'

import { HeaderLogo } from '../components/header/logo'
import { HeaderButton } from '../components/header/button'

const { Navigator, Screen } = createNativeStackNavigator()

export function Routes() {
    return(
        <NavigationContainer
        theme={{ ...DefaultTheme, colors: { ...DefaultTheme.colors, background: 'white' } }}>
            <Navigator 
                initialRouteName={'Home'}
                screenOptions={{
                    headerTitle: () => <HeaderLogo />,
                    headerRight: () => <HeaderButton />
                }}
            >
                <Screen name="Home" component={Home} options={{ title: '' }} />
                <Screen name="ArticlePage" component={ArticlePage} options={{ title: '' }} />
            </Navigator>
        </NavigationContainer>
    )
}
