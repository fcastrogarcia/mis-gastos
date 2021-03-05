import { useEffect } from "react";
import "../styles/index.scss";
import { Provider } from "next-auth/client";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider as MuiProvider } from "@material-ui/core/styles";
import { styledTheme, muiTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import { StylesProvider } from "@material-ui/core/styles";

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <Provider session={pageProps.session}>
      <GlobalStyle />
      <StyledProvider theme={styledTheme}>
        <MuiProvider theme={muiTheme}>
          <StylesProvider injectFirst>
            <Component {...pageProps} />
          </StylesProvider>
        </MuiProvider>
      </StyledProvider>
    </Provider>
  );
}

export default App;
