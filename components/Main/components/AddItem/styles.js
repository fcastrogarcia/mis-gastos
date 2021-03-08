import styled from "styled-components";
import { Plus as PlusComponent } from "@styled-icons/heroicons-outline/Plus";
import { KeyboardArrowDown } from "@styled-icons/material-rounded/KeyboardArrowDown";

const Container = styled.div`
  display: grid;
  /* width: 48px; */
  border-radius: 4px;
  position: relative;
`;

const BaseButton = styled.button`
  color: ${({ theme }) => theme.colors.basic.white};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  font-size: 15px;
`;

const Add = styled(BaseButton)`
  background: ${({ theme }) => theme.colors.indigo[700]};
  border-radius: 4px;
  transition: all 0.1s ease-in-out;
  border-right: 1px solid ${({ theme }) => theme.colors.indigo[700]};

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[800]};
  }
`;

const Dropdown = styled(BaseButton)`
  border-radius: 0 4px 4px 0;
  &:hover {
    background: ${({ theme }) => theme.colors.indigo[900]};
  }
`;

const Menu = styled.ul`
  position: absolute;
  top: 47px;
  right: 0;
  width: 150px;
  background: ${({ theme }) => theme.colors.basic.white};
  box-shadow: ${({ theme }) => theme.shadows.vercel};
  /* padding: 8px 16px; */
  border-radius: 4px;
  overflow: hidden;
`;

const Option = styled.li`
  font-size: 13px;
  padding: 12px 14px;
  font-weight: 500;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray[800]};

  &:hover {
    background: ${({ theme }) => theme.colors.indigo[100]};
  }
`;

const Plus = styled(PlusComponent).attrs({ size: 20 })`
  padding-left: 5px;
`;
const ArrowDown = styled(KeyboardArrowDown).attrs({ size: 20 })``;

export default { Container, Add, Dropdown, Menu, Option, Plus, ArrowDown };
