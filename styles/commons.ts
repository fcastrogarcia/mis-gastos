import { createGlobalStyle } from "styled-components";
import { getColor } from "styles/utils";

const Commons = createGlobalStyle`
  .flex {
    display: flex;
    justify-content: center;
    align-items: center;

    &--column {
      flex-direction: column;
    }
  }

  .button--main-action {
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${getColor("indigo", 700)};
    color: ${getColor("gray", 200)};
    height: 55px;
    font-size: 16px;
    width: 300px;
    max-width: 100%;
    border-radius: 4px;
    font-weight: 600;
    transition: all 0.15s ease-in-out;
    letter-spacing: 0.25px;

    &:hover {
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      background: ${getColor("indigo", 800)};
    }
  }

  .container {
    height: 100%;
    padding: 48px 0 0;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    flex: 1;
    
    &--with-sidebar {
      width: calc(100% - 400px);
      padding: 0;
      position: relative;
      top: 7px;
    }
    &--1280 {
      max-width: 1280px;
      margin: 0 auto;
      flex-grow: 1;
    }
  }
`;

export default Commons;
