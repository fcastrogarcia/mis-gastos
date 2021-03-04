import { createContext, useContext, useState, useEffect } from "react";
import { node } from "prop-types";
import { getItems } from "./operations";
import { useCalendarState } from "context/calendar";
import { getCurrentItems } from "utils/time";

const ItemsStateContext = createContext();
const ItemsDispatchContext = createContext();

const initialState = {
  rawItems: [],
  currentItems: [],
};

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState(initialState);

  const { selectedPeriod } = useCalendarState();

  //   const [, forceUpdate] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data = {} } = await getItems();

      if (data && data.items) {
        setItems(prev => ({
          ...prev,
          rawItems: data.items,
          currentItems: getCurrentItems(data.items, selectedPeriod),
        }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setItems(prev => ({
      ...prev,
      currentItems: getCurrentItems(items.rawItems, selectedPeriod),
    }));
  }, [selectedPeriod]);

  return (
    <ItemsStateContext.Provider value={items}>
      <ItemsDispatchContext.Provider value={setItems}>
        {children}
      </ItemsDispatchContext.Provider>
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
