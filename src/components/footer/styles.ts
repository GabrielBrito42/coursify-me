import { RFValue } from 'react-native-responsive-fontsize'
import styled from 'styled-components/native'

export const Container = styled.View`
    flex: 1;
    padding: 10px;
    padding-bottom: 0px;
`

export const Footer = styled.View`
    justify-content: center; 
    align-content: center; 
    align-items: center;
    background-color: #1ABC9C;
    padding: 18px;
`

export const AboutText = styled.Text`
    text-align: center; 
    padding-bottom: 8px; 
    padding-right: 38px; 
    padding-top: 16px; 
    padding-left: 38px;
    color: #FFFFFF;
    font-family: Roboto_400Regular;
    font-size: ${RFValue(16)}px;
`

export const KnowMoreButton = styled.View`
    width: 240px; 
    height: 45px; 
    padding: 6px; 
    background-color: #FFA900;
    border-radius: 45px;
    justify-content: center;
`

export const ButtonText = styled.Text`
    color: #FFFFFF;
    text-align: center;
    font-family: Roboto_400Regular;
    font-size: ${RFValue(16)}px;
`
