import React from 'react'
import { Entypo } from '@expo/vector-icons'
import * as S from './styles'

export function HeaderButton() {

    return(
        <S.Container>
            <Entypo name="menu" size={24} color="white" />
        </S.Container>
    )
}
