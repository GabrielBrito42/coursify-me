import React from 'react'

import * as S from './styles'

export function HeaderLogo() {
    return(
        <S.LogoContainer>
            <S.LogoImage source={require('../../../../assets/icon.png')} />
        </S.LogoContainer>
    )
}
