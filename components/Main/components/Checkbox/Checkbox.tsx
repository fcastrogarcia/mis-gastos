import MuiCheckbox from "@material-ui/core/Checkbox";
import { useSelectedItemsState, useSelectedItemsDispatch } from "context/items";
import styled from "styled-components";
import { CheckboxType } from "types/atoms";

const CheckboxComponent = styled(MuiCheckbox).attrs({
  color: "primary",
  size: "small",
})``;

const Checkbox = ({ type, id }: { type: CheckboxType; id?: string }) => {
  const { selectedItems, areAllItemsSelected } = useSelectedItemsState();
  const { toggleAllItems, toggleItem } = useSelectedItemsDispatch();

  switch (type) {
    case CheckboxType.allItems:
      return (
        <CheckboxComponent checked={areAllItemsSelected} onChange={toggleAllItems} />
      );
    case CheckboxType.singleItem:
      return (
        <CheckboxComponent
          checked={selectedItems?.includes(id)}
          onClick={e => e.stopPropagation()}
          onChange={toggleItem(id)}
        />
      );
    default:
      return null;
  }
};

export default Checkbox;
