import MuiDrawer from "@material-ui/core/Drawer";
import styled from "styled-components";
import { Close as MuiClose } from "@styled-icons/material-rounded/Close";
import { getColor } from "styles/utils";

const Drawer = styled(MuiDrawer)`
  .MuiDrawer-paper {
    width: 450px;
    max-width: 100vw;
  }
`;

const Close = styled(MuiClose)`
  padding: 4px;
  border-radius: 30px;
  transition: all 0.1s ease-in-out;
  cursor: pointer;
  color: ${getColor("gray", "800")};
  &:hover {
    background: ${getColor("gray", 200)};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${getColor("gray", 200)};
`;

const Title = styled.h3`
  color: ${getColor("gray", "800")};
  font-weight: 600;
  font-size: 24px;
`;

const Container = styled.div`
  height: 100%;
`;

export default {
  Close,
  Title,
  Header,
  Drawer,
  Container,
};
