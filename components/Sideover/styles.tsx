import MuiDrawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import { Close as MuiClose } from "@styled-icons/material-rounded/Close";
import { getColor } from "styles/utils";

const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: 35vw;
    max-width: 400px;
    padding: 30px;
  }
`;

const Close = styled(MuiClose)`
  padding: 4px;
  border-radius: 30px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  color: ${getColor("gray", 900)};
  &:hover {
    background: ${getColor("gray", 200)};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h3`
  color: ${getColor("gray", 900)};
  font-weight: 600;
  font-size: 24px;
`;

export default {
  Close,
  Title,
  Header,
  Drawer,
};
