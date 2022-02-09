import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import FormSection from 'components/templates/FormSection/FormSection';

function Root() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
       <FormSection />
    </ThemeProvider>
  );
}

export default Root;
