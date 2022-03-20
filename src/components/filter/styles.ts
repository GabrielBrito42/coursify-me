import { RFValue } from 'react-native-responsive-fontsize'
import styled, { css } from 'styled-components/native'

type Props = {
  error: boolean
}

export const Container = styled.View`
    flex-direction: row;
    margin-bottom: 12px;
    padding: 26px;
    justify-content: space-between;
`

export const Title = styled.Text`
    color: #535353;
    font-family: Roboto_400Regular;
    font-size: ${RFValue(17)}px;
    text-align-vertical: center;
`

export const PickerContainer = styled.View`
    width: 160px;
    border-width: 1px;
    border-color: #000000;
    border-radius: 5px;
`
