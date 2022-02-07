import { css } from 'styled-components';

import PoppinsLight from '@fonts/Poppins/Poppins-Light.ttf'
import PoppinsLightItalic from '@fonts/Poppins/Poppins-LightItalic.ttf'
import PoppinsRegular from '@fonts/Poppins/Poppins-Regular.ttf'
import PoppinsItalic from '@fonts/Poppins/Poppins-Italic.ttf'
import PoppinsMedium from '@fonts/Poppins/Poppins-Medium.ttf'
import PoppinsMediumItalic from '@fonts/Poppins/Poppins-MediumItalic.ttf'
import PoppinsSemiBold from '@fonts/Poppins/Poppins-SemiBold.ttf'
import PoppinsSemiBoldItalic from '@fonts/Poppins/Poppins-SemiBoldItalic.ttf'

import RalewayRegular from '@fonts/Raleway/Raleway-Regular.ttf'
import RalewayItalic from '@fonts/Raleway/Raleway-Italic.ttf'
import RalewayMedium from '@fonts/Raleway/Raleway-Medium.ttf'
import RalewayMediumItalic from '@fonts/Raleway/Raleway-MediumItalic.ttf'
import RalewaySemiBold from '@fonts/Raleway/Raleway-SemiBold.ttf'
import RalewaySemiBoldItalic from '@fonts/Raleway/Raleway-SemiBoldItalic.ttf'

const FontFaces = css`
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLight}) format('truetype');
    font-weight: 300;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsLightItalic}) format('truetype');
    font-weight: 300;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Poppins';
    src: url(${PoppinsSemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }

  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayRegular}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayItalic}) format('truetype');
    font-weight: normal;
    font-style: italic;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewayMediumItalic}) format('truetype');
    font-weight: 500;
    font-style: italic;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewaySemiBold}) format('truetype');
    font-weight: 600;
    font-style: normal;
  }
  @font-face {
    font-family: 'Raleway';
    src: url(${RalewaySemiBoldItalic}) format('truetype');
    font-weight: 600;
    font-style: italic;
  }
`;

export default FontFaces;