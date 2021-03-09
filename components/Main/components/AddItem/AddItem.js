// import { useState } from "react";
// import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import styles from "./styles";
import Link from "next/link";

// const Menu = () => {
//   return (
//     <styles.Menu>
//       <Link href="/main/create?type=payment">
//         <styles.Option>New Payment</styles.Option>
//       </Link>
//       <Link href="/main/create?type=expense">
//         <styles.Option>New Expense</styles.Option>
//       </Link>
//     </styles.Menu>
//   );
// };

const AddItem = () => {
  // const [open, setOpen] = useState();

  // const handleClick = () => setOpen(prev => !prev);

  // const handleClickAway = () => setOpen(false);

  return (
    <styles.Container>
      <Link href="/main/create">
        <styles.Add>
          <styles.Plus />
          New Item
        </styles.Add>
      </Link>
      {/* <ClickAwayListener onClickAway={handleClickAway}>
        <styles.Dropdown onClick={handleClick}>
          <styles.ArrowDown />
        </styles.Dropdown>
      </ClickAwayListener>
      {open && <Menu />} */}
    </styles.Container>
  );
};

export default AddItem;
