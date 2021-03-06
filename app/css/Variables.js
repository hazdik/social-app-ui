import { lighten, darken } from 'polished';

const variables = {
  brandColor1: '#1FB6FF', // buttons
  brandColor2: '#1F2D3D', // sidebar

  // colors
  grey: '#EEE', // borders
  greyLight: lighten(0.25, '#EEE'), // backgrounds
  greyDark: darken(0.25, '#EEE'),

  white: '#FFF',

  black: '#1F2D3D', // body font color

  // measurements
  headerHeight: '60px',
  sidebarWidth: '200px',

  // media-widths (lowest break points)
  bigScreen: '1200px',

  // font-sizes
  fs1: '12px',
  fs2: '14px',
  fs3: '16px',
  fs4: '18px',
  fs5: '20px',
  fs6: '24px',
  fs7: '32px',

  // font-weights
  fw1: '100',
  fw2: '400',
  fw3: '600',
  fw4: '800',
};

export default variables;
