import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
    padding: 10px;
    width: 300px;
    border-radius: 20px;
`

export const TextContainer = styled.View`
    padding: 8px;
`

export const Title = styled.Text`
    color: #2AB598;
    font-family: Roboto_700Bold;
    font-size: ${RFValue(19)}px;
`

export const Subtitle = styled.Text`
    color: #2AB598;
    font-family: Roboto_700Bold;
    font-size: ${RFValue(16)}px;
    width: 240px;
    line-height: 29px;
    padding-bottom: 10px;
`

export const DescriptionText = styled.Text`
    color: #868686;
    font-family: Roboto_400Regular;
    font-size: ${RFValue(16)}px;
    width: 245px;
    line-height: 26px;
`

export const SeeMore = styled.Text`
    color: #FDA506;
    font-family: Roboto_700Bold;
    font-size: ${RFValue(17)}px;
    padding-top: 18px;
`

export const PostImage = styled.Image`
    width: 245px; 
    height: 85px;
    border-top-left-radius: 10px; 
    border-top-right-radius: 10px;
`
