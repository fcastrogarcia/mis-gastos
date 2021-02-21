import styled from "styled-components";

const Sidebar = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 300px;
  z-index: 100;
  background: ${({ theme }) => theme.colors.gray[300]};
  display: grid;
  grid-template-rows: 70px 1fr;
  box-sizing: border-box;
`;

export default { Sidebar };
