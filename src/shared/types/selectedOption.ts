import { GoodDetailOption } from "@/entities/goods/goods.types";

export type SelectedOption = {
  type: "option" | "extraOption";
  quantity: number;
} & GoodDetailOption;
