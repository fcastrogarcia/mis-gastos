import styled from "styled-components";
import BaseAvatar from "@material-ui/core/Avatar";
import { ArrowDropDown } from "@styled-icons/material/ArrowDropDown";
import { getColor } from "styles/utils";

const Container = styled.div`
  display: grid;
  position: relative;
  grid-auto-flow: column;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  border-radius: 40px;
  /* border: 1px solid ${getColor("gray", 300)}; */
  grid-gap: 10px;
  background: ${({ open }) => open && getColor("gray", 200)};

  &:hover {
    background: ${getColor("gray", 200)};
  }
`;

const Avatar = styled(BaseAvatar)``;

const TextWrapper = styled.div``;

const Text = styled.p`
  text-align: right;
  color: ${getColor("gray", 800)};
`;

const Name = styled(Text)`
  font-size: 14px;
  font-weight: 600;
`;

const Email = styled(Text)`
  font-size: 11px;
`;

const Dropdown = styled(ArrowDropDown).attrs({ size: 28 })`
  color: ${getColor("gray", 700)};
  padding-right: 10px;
`;

export default { Container, Avatar, Name, Email, TextWrapper, Dropdown };
