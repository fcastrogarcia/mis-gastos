import Image from "next/image";
import { string, number } from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.gray[800]};
  width: 40px;
  height: 40px;
  padding: 13px;
  box-shadow: ${({ theme }) => theme.shadows.vercel};
`;

const Logo = ({ width, height, ...rest }) => (
  <Container {...rest}>
    <Image
      src="/assets/logo.png"
      width={width}
      height={height}
      alt="logo"
      quality={100}
    />
  </Container>
);

export default Logo;

Logo.propTypes = {
  className: string,
  width: number,
  height: number,
};

Logo.defaultProps = {
  className: "",
  width: 40,
  height: 40,
};
