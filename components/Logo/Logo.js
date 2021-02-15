import Image from "next/image";
import { string, number } from "prop-types";
import cx from "classnames";
import styles from "./Logo.module.scss";

const Logo = ({ className, width, height }) => (
  <div className={cx(styles.container, className)}>
    <Image
      src="/assets/logo.png"
      width={width}
      height={height}
      alt="logo"
      quality={100}
    />
  </div>
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
