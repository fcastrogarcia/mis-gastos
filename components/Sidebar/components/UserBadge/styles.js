import styled from "styled-components";
import BaseAvatar from "@material-ui/core/Avatar";
import { ArrowDropDown } from "@styled-icons/material/ArrowDropDown";

const Container = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  justify-content: space-between;
  padding: 12px;
  height: 100%;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);

  &:hover {
    background: ${({ theme }) => theme.colors.gray[400]};
  }
`;

const Avatar = styled(BaseAvatar)``;

const TextWrapper = styled.div`
  padding-right: 10px;
`;

const Text = styled.p`
  text-align: right;
  color: ${({ theme }) => theme.colors.gray[800]};
`;

const Name = styled(Text)`
  font-size: 14px;
  font-weight: 600;
`;

const Email = styled(Text)`
  font-size: 11px;
`;

const Dropdown = styled(ArrowDropDown).attrs({ size: 28 })`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export default { Container, Avatar, Name, Email, TextWrapper, Dropdown };
