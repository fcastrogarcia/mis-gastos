import { useState } from "react";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "./styles";

const Menu = () => {
  return (
    <styles.Menu>
      <styles.Option>New Payment</styles.Option>
      <styles.Option>New Expense</styles.Option>
    </styles.Menu>
  );
};

const AddItem = () => {
  const [open, setOpen] = useState();

  const handleClick = () => setOpen(prev => !prev);

  const handleClickAway = () => setOpen(false);

  return (
    <styles.Container>
      <styles.Add>
        <styles.Plus />
      </styles.Add>
      <ClickAwayListener onClickAway={handleClickAway}>
        <styles.Dropdown onClick={handleClick}>
          <styles.ArrowDown />
        </styles.Dropdown>
      </ClickAwayListener>
      {open && <Menu />}
    </styles.Container>
  );
};

export default AddItem;
