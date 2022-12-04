import { fadeInUp, fadeInDown } from 'react-animations';
import Radium from 'radium';

export const animations: any = {
    fadeInDown: {
      animation: 'x 1s',
      animationName: Radium.keyframes(fadeInDown, 'fadeInDown')
    },
    fadeInUp: {
        animation: 'x 1s',
        animationName: Radium.keyframes(fadeInUp, 'fadeInUp')
    }
}