import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Router } from "./Router";
import { ProductsProvider } from "./contexts/ProductsContext";
export const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <ProductsProvider>
          <Router />
        </ProductsProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  );
};
