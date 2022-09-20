import PropTypes from 'prop-types';
import { useMemo } from 'react';
// material
import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
//
import shape, { ThemeShapeProps } from './shape';
import palette, { ThemePaletteProps } from './palette';
import typography, { ThemeTypographyProps } from './typography';
import componentsOverride from './overrides';
import shadows, { customShadows, ThemeCustomShadowsProps } from './shadows';

// ----------------------------------------------------------------------

ThemeConfig.propTypes = {
  children: PropTypes.node,
};
export interface ThemeProps {
  palette: ThemePaletteProps;
  shape: ThemeShapeProps;
  typography: ThemeTypographyProps;
  shadows: string[];
  customShadows: ThemeCustomShadowsProps;
}
export default function ThemeConfig({ children }: any) {
  const themeOptions: any = useMemo(
    () => ({
      palette,
      shape,
      typography,
      shadows,
      customShadows,
    }),
    [],
  );

  const theme = createTheme(themeOptions, []);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </StyledEngineProvider>
  );
}
