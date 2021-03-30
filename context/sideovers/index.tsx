import { useContext, createContext, useState, useMemo } from "react";

const EditItemStateContext = createContext({});
const EditItemDispatchContext = createContext({});
const CreateItemStateContext = createContext({});
const CreateItemDispatchContext = createContext({});

const ContextProvider = ({ children }: { children: JSX.Element }) => {
  const [isEditOpen, setEdit] = useState(false);
  const [isCreateOpen, setCreate] = useState(false);
  const [selectedItem, selectItem] = useState("");

  const openDetails = (id: string) => () => {
    selectItem(id);
    setEdit(true);
  };

  const closeDetails = () => setEdit(false);

  const closeCreate = () => setCreate(false);

  const openCreate = () => setCreate(true);

  const editItemStateValue = useMemo(
    () => ({
      isEditOpen,
      closeDetails,
      openDetails,
      selectedItem,
    }),
    [isEditOpen]
  );

  const editItemDispatchValue = useMemo(
    () => ({
      closeDetails,
      openDetails,
    }),
    []
  );

  const createItemDispatchValue = useMemo(() => ({ openCreate, closeCreate }), []);

  return (
    <EditItemStateContext.Provider value={editItemStateValue}>
      <EditItemDispatchContext.Provider value={editItemDispatchValue}>
        <CreateItemStateContext.Provider value={isCreateOpen}>
          <CreateItemDispatchContext.Provider value={createItemDispatchValue}>
            {children}
          </CreateItemDispatchContext.Provider>
        </CreateItemStateContext.Provider>
      </EditItemDispatchContext.Provider>
    </EditItemStateContext.Provider>
  );
};

export const useEditItemStateContext = () => {
  const context = useContext(EditItemStateContext);

  if (context === undefined)
    throw new Error("Context is probably not whithin its correspondat provider");

  return context;
};

export const useEditItemDispatchContext = () => {
  const context = useContext(EditItemDispatchContext);

  if (context === undefined)
    throw new Error("Context is probably not whithin its correspondat provider");

  return context;
};

export const useCreateItemStateContext = () => {
  const context = useContext(CreateItemStateContext);

  if (context === undefined)
    throw new Error("Context is probably not whithin its correspondat provider");

  return context;
};

export const useCreateItemDispatchContext = () => {
  const context = useContext(CreateItemDispatchContext);

  if (context === undefined)
    throw new Error("Context is probably not whithin its correspondat provider");

  return context;
};

export default ContextProvider;
