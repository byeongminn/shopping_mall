import { SelectedOption } from "@/entities/goods/@x/cart";

export type CartItem = {
  id: string;
  name: string;
  options: SelectedOption[];
};
