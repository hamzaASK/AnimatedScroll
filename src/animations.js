import { Extrapolate, interpolate, interpolateColor, useAnimatedStyle, useSharedValue, withSpring, withTiming } from "react-native-reanimated"
import { dimensionsVariable, width } from "./variables"

export function reanimated ( scrollX, index )
{
  const scale = withSpring( interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 0, 1, 0 ], Extrapolate.CLAMP ) )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { transform: { scale: scale } } ) )
  return animatedFullScreenStyle
}
export function reanimatedContainer ( scrollX, index )
{
  const scale = useSharedValue( 1 )
  const borderRad = useSharedValue( 0 )
  scale.value = withSpring( interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 0, 1, 0 ], Extrapolate.CLAMP ) )
  borderRad.value = withSpring( interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 100, 3, 100 ], Extrapolate.CLAMP ) )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { borderRadius: borderRad.value, transform: [ { scale: scale.value } ] } ) )
  return animatedFullScreenStyle
}
export function reanimatedBackCircelImage ( scrollX, index )
{
  const scale = useSharedValue( 1 )
  const borderRad = useSharedValue( 0 )
  scale.value = withSpring( interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 0, 1, 0 ], Extrapolate.CLAMP ) )
  borderRad.value = withSpring( interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ -dimensionsVariable.ITEM_WIDTH / 2, dimensionsVariable.ITEM_WIDTH / 2, -dimensionsVariable.ITEM_WIDTH / 2 ], Extrapolate.CLAMP ) )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { borderRadius: borderRad.value, transform: [ { scale: scale.value } ] } ) )
  return animatedFullScreenStyle

}
export function reanimatedRotate ( scrollX, index )
{
  const rotate = useSharedValue( 1 )
  rotate.value = interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ -1, 0, 1 ], Extrapolate.CLAMP )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { transform: [ { rotate: `${ rotate.value * 2 * Math.PI }rad` } ] } ) )
  return animatedFullScreenStyle
}
export function reanimatedOpacity ( scrollX, index )
{
  const opacity = useSharedValue( 1 )
  opacity.value = interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 0, 1, 0 ], Extrapolate.CLAMP )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { opacity: opacity.value, transform: [ { scale: opacity.value } ] } ) )
  return animatedFullScreenStyle
}
export function reanimatedHomeImage ()
{
  const scale = useSharedValue( 0 )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { transform: [ { scale: scale.value } ] } ) )
  scale.value = withSpring( 1 )
  return animatedFullScreenStyle
}
export function reanimatedSequenceItem ( index )
{
  const scale = useSharedValue( 0 )
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { transform: [ { scale: scale.value } ] } ) )
  scale.value = withTiming( 1, { duration: 300 * ( index + 1 ) } )
  return animatedFullScreenStyle
}
export function reanimatedContainerHome ( scale, translate )
{
  const animatedFullScreenStyle = useAnimatedStyle( () => ( { transform: [ { scale: scale.value }, { translateX: translate.value } ] } ) )

  return animatedFullScreenStyle
}
export function reanimatedButton ( widthButton1, widthButton2, backValueButton1, backValueButton2 )
{
  const backgrd1 = useSharedValue( backValueButton1.value )
  const backgrd2 = useSharedValue( backValueButton2.value )

  backgrd1.value = interpolateColor( backValueButton1.value, [ 0, 1 ], [ 'white', 'gray' ] )
  backgrd2.value = interpolateColor( backValueButton2.value, [ 1, 0 ], [ 'gray', 'white' ] )

  const animatedButton1Style = useAnimatedStyle( () => ( { width: widthButton1.value, backgroundColor: backgrd1.value } ) )
  const animatedButton2Style = useAnimatedStyle( () => ( { width: widthButton2.value, backgroundColor: backgrd2.value } ) )
  return { animatedButton1Style, animatedButton2Style }
}

export const onclickButton = ( widthButton1, widthButton2, backValue1, backValue2 ) =>
{
  widthButton1.value = withTiming( ( width / 2 ) - 20, 50000 )
  widthButton2.value = withTiming( ( width / 2 ) + 20, 50000 )
  backValue1.value = withTiming( 0, 50000 )
  backValue2.value = withTiming( 1, 50000 )

}
export function reanimatedWidth ( scrollX, index )
{
  const widthN = useSharedValue( 20 )
  const backgrd1 = useSharedValue( 'white' )
  widthN.value = interpolate( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ 20, 40, 20 ], Extrapolate.CLAMP )
  backgrd1.value = interpolateColor( scrollX, [ ( index - 1 ) * width, index * width, ( index + 1 ) * width ], [ '#e1e1e1', '#7726c7', '#e1e1e1' ] )

  const animatedFullScreenStyle = useAnimatedStyle( () => ( { width: widthN.value, backgroundColor: backgrd1.value } ) )
  return animatedFullScreenStyle
}
export const container = ( props, translate, scaleContainer ) =>
{
  translate.value = withSpring( 100 );
  scaleContainer.value = withSpring( 0.5 );
  props.navigation.openDrawer( { data: 12 } )
}
