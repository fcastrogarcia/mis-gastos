interface BaseItem {
  user: string;
  name: string;
  type: "payment" | "expense";
  amount: number;
  comment?: string;
  provider?: string;
  period?: Date;
  save_as_template: boolean;
  created_at: boolean;
  updated_at: boolean;
}

export interface Payment extends BaseItem {
  due_date?: Date;
  current_status: "overdue" | "paid" | "expense" | "about to lapse" | "pending";
  status: { is_paid: boolean; date: Date };
}

export interface Expense extends BaseItem {
  date?: Date;
}

export type Items = Array<Payment | Expense>;

export type Item = Payment | Expense;
