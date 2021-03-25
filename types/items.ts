/* eslint-disable no-unused-vars */
import { Document } from "mongoose";

export enum CurrentStatus {
  PAID = "paid",
  EXPENSE = "expense",
  OVERDUE = "overdue",
  ABOUT_TO_LAPSE = "about to lapse",
  PENDING = "pending",
}

export interface ItemModel extends Document {
  id: string;
  _id: string;
  user: string;
  type: "payment" | "expense";
  name: string;
  amount: number;
  due_date?: Date;
  date?: Date;
  provider?: string;
  comment?: string;
  period?: Date;
  status: { is_paid: boolean; date: Date };
  current_status?: CurrentStatus;
  save_as_template?: boolean;
  created_at: Date;
  updated_at: Date;
}

export interface Item {
  id: string;
  _id: string;
  user: string;
  type: "payment" | "expense";
  name: string;
  amount: number;
  due_date?: Date;
  date?: Date;
  provider?: string;
  comment?: string;
  period?: Date;
  status: { is_paid: boolean; date: Date };
  current_status?: CurrentStatus;
  save_as_template?: boolean;
  created_at?: Date;
  updated_at?: Date;
}

export interface Status {
  is_paid: boolean;
  date: Date;
}

export type Items = Array<Item>;
