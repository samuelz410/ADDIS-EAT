export interface Dish {
  id: string;
  name: string;
  price: number;
  category: "Breakfast" | "Mains" | "Drinks";
  spicy: boolean;
}

export interface FormErrors {
  name?: string;
  phone?: string;
  area?: string;
}

export interface ActionResponse {
  success: boolean;
  message?: string;
  errors?: FormErrors;
}