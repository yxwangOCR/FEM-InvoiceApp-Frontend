import { useMediaQuery } from 'react-responsive';

// The breakpoints mechemism is consisten with
// https://github.com/twbs/bootstrap/blob/v5.0.2/scss/mixins/_breakpoints.scss

export const useIsMobile = () => useMediaQuery({
  maxWidth: '767.98px',
});

export const useIsSmallMobile = () =>  useMediaQuery({
  maxWidth: '576px',
});

export const useIsTablet = () =>  useMediaQuery({
  minWidth: '768px',
});
