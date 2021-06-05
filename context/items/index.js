import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import { node } from "prop-types";
import useFetchItems from "./useFetchItems";

const ItemsStateContext = createContext();
const ItemsDispatchContext = createContext();
const SelectedItemsStateContext = createContext();
const SelectedItemsDispatchContext = createContext();

export default function ItemsProvider({ children }) {
  const [selectedItems, setSelectedItems] = useState([]);

  const { data, rawData } = useFetchItems();

  // variables

  const quantity = useMemo(() => selectedItems.length, [selectedItems, data]);

  const currentIds = useMemo(() => data.items?.map(item => item.id), [data.items]);

  const allIds = useMemo(() => rawData?.map(item => item.id), [rawData]);

  const selectedItemsAmount = useMemo(
    () =>
      data.items?.reduce((acc, curr) => {
        if (selectedItems.includes(curr.id)) return acc + curr.amount;
        return acc;
      }, 0),
    [data, selectedItems]
  );

  const areAllItemsSelected = useMemo(
    () => data.items?.every(({ id }) => selectedItems.includes(id)),
    [data, selectedItems]
  );

  useEffect(
    () => setSelectedItems(prev => prev.filter(id => allIds.includes(id))),
    [data]
  );

  // methods

  const getSelectedItem = useCallback(
    id => data.items?.find(item => item._id === id),
    [data]
  );

  const toggleAllItems = useCallback(
    () =>
      setSelectedItems(() =>
        areAllItemsSelected
          ? selectedItems?.filter(id => !currentIds.includes(id))
          : [...new Set([...data.items?.map(item => item?.id), ...selectedItems])]
      ),
    [selectedItems, data]
  );

  const toggleItem = useCallback(
    id => () => {
      setSelectedItems(prev =>
        prev.includes(id) ? prev.filter(currId => currId !== id) : [...prev, id]
      );
    },
    [data]
  );

  // context values

  const itemsValue = useMemo(
    () => ({ ...data, getSelectedItem }),
    [data, getSelectedItem]
  );

  const selectedItemsDispatchValue = useMemo(
    () => ({ toggleAllItems, toggleItem }),
    [toggleAllItems]
  );

  const selectedItemsStateValue = useMemo(
    () => ({
      selectedItems,
      areAllItemsSelected,
      quantity,
      selectedItemsAmount,
    }),
    [selectedItems, areAllItemsSelected]
  );

  return (
    <ItemsStateContext.Provider value={itemsValue}>
      <SelectedItemsStateContext.Provider value={selectedItemsStateValue}>
        <SelectedItemsDispatchContext.Provider value={selectedItemsDispatchValue}>
          {children}
        </SelectedItemsDispatchContext.Provider>
      </SelectedItemsStateContext.Provider>
    </ItemsStateContext.Provider>
  );
}

ItemsProvider.propTypes = {
  children: node.isRequired,
};

export const useItemsState = () => {
  const context = useContext(ItemsStateContext);

  if (context === undefined)
    throw new Error("ItemsStateContext must be within ItemsProvider");

  return context;
};

export const useItemsDispatch = () => {
  const context = useContext(ItemsDispatchContext);

  if (context === undefined)
    throw new Error("ItemsDispatchContext must be within ItemsProvider");

  return context;
};

export const useSelectedItemsState = () => useContext(SelectedItemsStateContext);
export const useSelectedItemsDispatch = () => useContext(SelectedItemsDispatchContext);
