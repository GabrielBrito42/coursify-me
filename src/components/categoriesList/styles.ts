import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 12px;
    padding: 26px;
    justify-content: space-between;
`

export const Title = styled.Text`
    color: #2AB598;
    font-family: Roboto_700Bold;
    font-size: ${RFValue(19)}px;
`

export const SeeMore = styled.Text`
    color: #535353;
    font-family: Roboto_400Regular;
    font-size: ${RFValue(17)}px;
    text-align-vertical: center;
`
