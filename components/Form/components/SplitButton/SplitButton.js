import { useState, useRef, Fragment } from "react";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import { ArrowDropDown } from "@styled-icons/material/ArrowDropDown";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { string, func, bool } from "prop-types";
import styles from "./styles";

const SplitButton = ({ label, checked, checkboxKey, handleCheckbox }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);

  const handleClick = () => setOpen(false);

  const handleToggle = () => setOpen(prevOpen => !prevOpen);

  const handleClose = event => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  return (
    <Fragment>
      <ButtonGroup
        variant="contained"
        color="primary"
        ref={anchorRef}
        aria-label="save button"
      >
        <styles.Button type="submit" onClick={handleClick}>
          {label}
        </styles.Button>
        <styles.Button
          color="primary"
          size="small"
          aria-controls={open ? "save-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="menu"
          onClick={handleToggle}
        >
          <ArrowDropDown />
        </styles.Button>
      </ButtonGroup>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
      >
        <styles.Paper>
          <ClickAwayListener onClickAway={handleClose}>
            <MenuList id="save-button-menu">
              <MenuItem>
                <styles.FormControlLabel
                  control={
                    <styles.Checkbox
                      checked={checked}
                      onChange={handleCheckbox}
                      name={checkboxKey}
                      color="primary"
                    />
                  }
                  label="Save As Template"
                />
              </MenuItem>
            </MenuList>
          </ClickAwayListener>
        </styles.Paper>
      </Popper>
    </Fragment>
  );
};

export default SplitButton;

SplitButton.propTypes = {
  label: string,
  checkboxKey: string,
  checked: bool,
  handleCheckbox: func,
};

SplitButton.defaultProps = {
  label: "Save",
  checkboxKey: "save_as_template",
  checked: false,
  handleCheckbox: () => {},
};
