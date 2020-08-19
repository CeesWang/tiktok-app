import { Dimensions, Platform, PixelRatio } from 'react-native';

export const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

export const actuatedNormalize = (size : number) => {
    const scale = SCREEN_WIDTH / 320; // based on iphone 5 width and height;
    const newSize = size * scale
    return Platform.OS === 'ios' ? Math.round(PixelRatio.roundToNearestPixel(newSize)) : Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;    
}