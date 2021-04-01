import { useEffect } from "react";
import { elementType, object } from "prop-types";
import "../styles/index.scss";
import { Provider } from "next-auth/client";
import { ThemeProvider as StyledProvider } from "styled-components";
import { ThemeProvider as MuiProvider } from "@material-ui/core/styles";
import { styledTheme, muiTheme } from "styles/theme";
import GlobalStyle from "styles/global";
import CommonStyles from "styles/commons";
import { StylesProvider } from "@material-ui/core/styles";
import { SWRConfig } from "swr";

function App({ Component, pageProps }) {
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  const options = { revalidateOnFocus: false };

  return (
    <Provider session={pageProps.session}>
      <StyledProvider theme={styledTheme}>
        <StylesProvider injectFirst>
          <MuiProvider theme={muiTheme}>
            <CommonStyles />
            <GlobalStyle />
            <SWRConfig value={options}>
              <Component {...pageProps} />
            </SWRConfig>
          </MuiProvider>
        </StylesProvider>
      </StyledProvider>
    </Provider>
  );
}

export default App;

App.propTypes = {
  Component: elementType.isRequired,
  pageProps: object.isRequired,
};
