export enum SideoverType {
  "CREATE_ITEM",
  "EDIT_ITEM",
}

export type Operation = () => Promise<any>;

export enum CheckboxType {
  singleItem = "SINGLE_ITEM",
  allItems = "ALL_ITEMS",
}
