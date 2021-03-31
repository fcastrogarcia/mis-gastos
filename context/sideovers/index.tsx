import { useContext, createContext, useState, useMemo } from "react";

interface EditItemDispatch {
  openDetails: (id: string) => () => void;
  closeDetails: () => void;
}
interface EditItemState {
  isEditOpen: boolean;
  selectedItem?: string;
}

interface CreateItemDispatch {
  openCreate: () => void;
  closeCreate: () => void;
}

const EditItemStateContext = createContext({} as EditItemState);
const EditItemDispatchContext = createContext({} as EditItemDispatch);
const CreateItemStateContext = createContext(false);
const CreateItemDispatchContext = createContext({} as CreateItemDispatch);

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

export const useEditItemStateContext = () => useContext(EditItemStateContext);

export const useEditItemDispatchContext = () => useContext(EditItemDispatchContext);

export const useCreateItemStateContext = () => useContext(CreateItemStateContext);

export const useCreateItemDispatchContext = () => useContext(CreateItemDispatchContext);

export default ContextProvider;
