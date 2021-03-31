import styled from "styled-components";
import { getColor } from "styles/utils";

const Sidebar = styled.aside`
  position: absolute;
  top: 76px;
  right: 0;
  bottom: 0;
  width: 400px;
  display: grid;
  grid-template-rows: 84px 1fr;
  box-sizing: border-box;
  border-left: 1px solid ${getColor("gray", 200)};
`;

export default { Sidebar };
