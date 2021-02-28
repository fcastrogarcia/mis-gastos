import { createContext, useContext, useState, useEffect } from "react";
import { node } from "prop-types";
import { getItems } from "./operations";

const ItemsStateContext = createContext();
const ItemsDispatchContext = createContext();

const initialState = {
  items: [],
};

export default function ItemsProvider({ children }) {
  const [items, setItems] = useState(initialState);
  //   const [, forceUpdate] = useState()

  useEffect(() => {
    const fetchData = async () => {
      const { data = {} } = await getItems();

      if (data && data.items) {
        setItems(prev => ({ ...prev, items: data.items }));
      }
    };

    fetchData();
  }, []);

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

export const useItemsStateContext = () => {
  const context = useContext(ItemsStateContext);

  if (context === undefined)
    throw new Error("ItemsStateContext must be within ItemsProvider");

  return context;
};

export const useItemsDispatchContext = () => {
  const context = useContext(ItemsDispatchContext);

  if (context === undefined)
    throw new Error("ItemsDispatchContext must be within ItemsProvider");

  return context;
};
