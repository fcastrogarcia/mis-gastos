import {
  createContext,
  useContext,
  useCallback,
  useMemo,
  useState,
  useEffect,
} from "react";
import useSWR from "swr";
import axios from "axios";
import { node } from "prop-types";
import { useCalendarState } from "context/calendar";
import { getCurrentItems } from "utils/time";
import { api } from "lib/api";

const ItemsStateContext = createContext();
const ItemsDispatchContext = createContext();
const SelectedItemsStateContext = createContext();
const SelectedItemsDispatchContext = createContext();

const fetcher = path => axios(path).then(res => res.data.items);

export default function ItemsProvider({ children }) {
  const [value, setValue] = useState({ items: undefined });
  const [selectedItems, setSelectedItems] = useState([]);

  const { selectedPeriod } = useCalendarState();

  const { data } = useSWR(api.GET_ITEMS, fetcher);

  useEffect(() => {
    if (data) setValue({ items: getCurrentItems(data, selectedPeriod) });
  }, [data, selectedPeriod]);

  const getSelectedItem = useCallback(id => value.items?.find(item => item._id === id), [
    value,
  ]);

  const areAllItemsSelected = useMemo(
    () => value.items?.every(({ id }) => selectedItems.includes(id)),
    [value, selectedItems]
  );

  const quantity = useMemo(() => selectedItems.length, [selectedItems]);

  const toggleAllItems = useCallback(
    () =>
      setSelectedItems(() =>
        areAllItemsSelected ? [] : value.items?.map(item => item?.id)
      ),
    [selectedItems, value]
  );

  const toggleItem = useCallback(
    id => () => {
      setSelectedItems(prev =>
        prev.includes(id) ? prev.filter(currId => currId !== id) : [...prev, id]
      );
    },
    [value]
  );

  const itemsValue = useMemo(() => ({ ...value, getSelectedItem }), [
    value,
    getSelectedItem,
  ]);

  const selectedItemsDispatchValue = useMemo(() => ({ toggleAllItems, toggleItem }), [
    toggleAllItems,
  ]);

  const selectedItemsStateValue = useMemo(
    () => ({
      selectedItems,
      areAllItemsSelected,
      quantity,
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
