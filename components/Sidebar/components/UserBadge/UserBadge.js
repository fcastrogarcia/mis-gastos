import { useState } from "react";
import { useSession } from "next-auth/client";
import styles from "./styles";
import Menu from "../Menu";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";

const UserBadge = () => {
  const [open, setOpen] = useState(false);
  const [session] = useSession();

  const { user = {} } = session || {};
  const { image = "", name = "", email = "" } = user;

  const handleClick = () => setOpen(prev => !prev);

  const handleClickAway = () => setOpen(false);

  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <styles.Container onClick={handleClick} open={open}>
        <styles.Dropdown />
        <styles.TextWrapper>
          <styles.Name>{name}</styles.Name>
          <styles.Email>{email}</styles.Email>
        </styles.TextWrapper>
        <styles.Avatar src={image} alt={name} />
        {open && <Menu />}
      </styles.Container>
    </ClickAwayListener>
  );
};

export default UserBadge;
