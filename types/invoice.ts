export interface Invoice {
  id: string;
  from_street_address: string;
  from_city: string;
  from_post_code: string;
  from_country: string;
  client_name: string;
  client_email: string;
  client_street_address: string;
  client_city: string;
  client_post_code: string;
  client_country: string;
  invoice_date: string;
  payment_term: string;
  project_description: string;
  list_items: Item[];
  grand_total: number;
  status: "draft" | "pending" | "paid";
}

export interface Item {
  name: string;
  quantity: number;
  price: number;
  total: number;
}
