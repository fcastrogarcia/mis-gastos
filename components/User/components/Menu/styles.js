import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  background: ${({ theme }) => theme.colors.basic.white};
  box-shadow: ${({ theme }) => theme.shadows.vercel};
  width: 225px;
  border-radius: 5px;
  overflow: hidden;
`;

const Menu = styled.ul`
  display: grid;
  background: ${({ theme }) => theme.colors.basic.white};
  padding: 6px 0;
`;

const Button = styled.button`
  height: 100%;
  width: 100%;
  text-align: left;
  padding: 8px 20px;
  color: ${({ theme }) => theme.colors.gray[600]};
  font-weight: 500;
  letter-spacing: 0.25px;
  transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);
`;

const Item = styled.li`
  transition: all 0.15s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  line-height: 20px;
  font-size: 14px;

  &:hover {
    background: ${({ theme }) => theme.colors.gray[100]};
    & ${Button} {
      color: ${({ theme }) => theme.colors.gray[800]};
    }
  }
`;

export default { Container, Menu, Item, Button };
