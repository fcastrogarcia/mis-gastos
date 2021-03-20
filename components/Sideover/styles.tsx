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
  color: ${getColor("indigo", "800")};
  &:hover {
    background: ${getColor("indigo", 200)};
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  background: ${getColor("indigo", 100)};
`;

const Title = styled.h3`
  color: ${getColor("indigo", "800")};
  font-weight: 600;
  font-size: 24px;
`;

const Container = styled.div`
  padding: 24px;
  height: 100%;
`;

export default {
  Close,
  Title,
  Header,
  Drawer,
  Container,
};
