import styled from "styled-components";

const Sidebar = styled.aside`
  position: absolute;
  top: 70px;
  right: 0;
  bottom: 0;
  width: 400px;
  display: grid;
  grid-template-rows: 70px 1fr;
  box-sizing: border-box;
`;

export default { Sidebar };
