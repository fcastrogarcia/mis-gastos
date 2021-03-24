import { createContext, useContext, useState, useEffect } from "react";
import useSWR from "swr";
import axios from "axios";
import { node } from "prop-types";
import { useCalendarState } from "context/calendar";
import { getCurrentItems } from "utils/time";
import { api } from "lib/api";

const ItemsStateContext = createContext();
const ItemsDispatchContext = createContext();

const fetcher = path => axios(path).then(res => res.data.items);
export default function ItemsProvider({ children }) {
  const [value, setValue] = useState({ items: undefined });

  const { selectedPeriod } = useCalendarState();

  const { data } = useSWR(api.GET_ITEMS, fetcher);

  useEffect(() => {
    if (data) setValue({ items: getCurrentItems(data, selectedPeriod) });
  }, [data, selectedPeriod]);

  return (
    <ItemsStateContext.Provider value={value}>
      {/* <ItemsDispatchContext.Provider value={setItems}> */}
      {children}
      {/* </ItemsDispatchContext.Provider> */}
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
