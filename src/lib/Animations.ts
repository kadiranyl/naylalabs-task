import styled, { keyframes } from 'styled-components';
import { fadeInUp, fadeInDown } from 'react-animations';

export const FadeInUp = styled.div`animation: 1s ${keyframes`${fadeInUp}`};`;
export const FadeInDown = styled.div`animation: 1s ${keyframes`${fadeInDown}`};`;