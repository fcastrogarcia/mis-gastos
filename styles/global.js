import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0;
  padding: 0;
}

body {
  overflow: initial;
  margin: 0;
  overscroll-behavior-y: none;
}

body,
button {
  font-family: 'Inter', sans-serif;
  color: initial;
}

ul {
  list-style: none;
}

a,
a:visited,
a:hover,
a:active {
  color: inherit;
  text-decoration: none;
}

button {
  background-color: transparent;
  border: none;
  font-size: inherit;
  outline: none;
  cursor: pointer;
}
`;

export default GlobalStyle;
