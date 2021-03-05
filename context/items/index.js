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
  loading: true,
};

export default function ItemsProvider({ children }) {
  const [data, setData] = useState(initialState);

  const { selectedPeriod } = useCalendarState();

  //   const [, forceUpdate] = useState()

  useEffect(() => {
    const fetchData = async () => {
      setData(prev => ({ ...prev, loading: true }));

      try {
        const { data = {} } = await getItems();

        if (data && data.items) {
          setData(prev => ({
            ...prev,
            rawItems: data.items,
            currentItems: getCurrentItems(data.items, selectedPeriod),
            loading: false,
          }));
        }
      } catch (error) {
        console.error(error);
        setData(prev => ({ ...prev, loading: false }));
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setData(prev => ({
      ...prev,
      currentItems: getCurrentItems(data.rawItems, selectedPeriod),
    }));
  }, [selectedPeriod]);

  return (
    <ItemsStateContext.Provider value={data}>
      <ItemsDispatchContext.Provider value={setData}>
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
