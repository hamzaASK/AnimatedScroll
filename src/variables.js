import { Dimensions } from 'react-native'
export const { width, height } = Dimensions.get( 'window' )
export const SIZE = 64
export const ICON_SIZE = SIZE * 0.6;
export const SPACING = 12;
export const HEIGHT_BODY = height / 16
const s = width * 0.68;
export const dimensionsVariable = {
    ITEM_WIDTH: s + 30,
    ITEM_HEIGHT: s * 0.15,
    RADIUS: 18,
    SPACING,
    FULL_SIZE: s + SPACING * 2
}