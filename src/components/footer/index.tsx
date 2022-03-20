import React from 'react'
import { Image, Pressable } from 'react-native'

import * as Linking from 'expo-linking'
import * as S from './styles'

export function Footer() {

    const openAboutLinkinBrowser = () => {
        Linking.openURL('https://coursify.me/')
    }

    return(
        <S.Footer>
            <Image 
                style={{width: 170, height: 45}} 
                source={require('../../../assets/favicon.png')} 
            />
            <S.AboutText>
                O Coursify.me é uma plataforma de ensino a distância, onde qualquer 
                pessoa ou empresa pode construir seu EAD e vender cursos pela internet.
            </S.AboutText>
            <Pressable onPress={openAboutLinkinBrowser}>
                <S.KnowMoreButton>
                    <S.ButtonText>Quero conhecer a plataforma!</S.ButtonText>
                </S.KnowMoreButton>
            </Pressable>
        </S.Footer>
    )
}
