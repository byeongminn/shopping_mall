import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type CartItem = {
  id: string;
  name: string;
  options: SelectedOption[];
};

export type CartState = {
  items: CartItem[];
  addItem: (newItem: CartItem) => void;
  removeItem: (id: string) => void;
  increaseQuantity: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  decreaseQuantity: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  removeOption: (
    itemId: string,
    optionId: number,
    type: SelectedOption["type"]
  ) => void;
  getItemTotalPrice: (itemId: string) => number;
  getCartTotalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const items = get().items;
        const index = items.findIndex((item) => item.id === newItem.id);

        if (index === -1) {
          set({ items: [newItem, ...items] });
          return;
        }

        const existingItem = items[index];
        const mergedOptions = mergeSelectedOptions(
          existingItem.options,
          newItem.options
        );

        const updatedItem: CartItem = {
          ...existingItem,
          options: mergedOptions,
        };

        const newItems = [
          updatedItem,
          ...items.slice(0, index),
          ...items.slice(index + 1),
        ];

        set({ items: newItems });
      },

      removeItem: (id) => {
        set({
          items: get().items.filter((item) => item.id !== id),
        });
      },

      increaseQuantity: (itemId, optionId, type) => {
        const items = get().items;
        const updatedItems = items.map((item) => {
          if (item.id !== itemId) return item;

          const updatedOptions = item.options.map((opt) => {
            if (opt.id === optionId && opt.type === type) {
              return {
                ...opt,
                quantity: opt.quantity < 9999 ? opt.quantity + 1 : opt.quantity,
              };
            }
            return opt;
          });

          return {
            ...item,
            options: updatedOptions,
          };
        });

        set({ items: updatedItems });
      },

      decreaseQuantity: (itemId, optionId, type) => {
        const items = get().items;
        const updatedItems = items.map((item) => {
          if (item.id !== itemId) return item;

          const updatedOptions = item.options.map((opt) => {
            if (opt.id === optionId && opt.type === type) {
              return {
                ...opt,
                quantity: opt.quantity > 1 ? opt.quantity - 1 : opt.quantity,
              };
            }
            return opt;
          });

          return {
            ...item,
            options: updatedOptions,
          };
        });

        set({ items: updatedItems });
      },

      removeOption: (itemId, optionId, type) => {
        const items = get().items;
        const updatedItems = items.map((item) => {
          if (item.id !== itemId) return item;

          const filteredOptions = item.options.filter(
            (opt) => !(opt.id === optionId && opt.type === type)
          );

          return {
            ...item,
            options: filteredOptions,
          };
        });

        set({ items: updatedItems });
      },

      getItemTotalPrice: (itemId) => {
        const item = get().items.find((item) => item.id === itemId);
        if (!item) return 0;

        return item.options.reduce(
          (acc, opt) => acc + opt.price * opt.quantity,
          0
        );
      },

      getCartTotalPrice: () => {
        return get().items.reduce((acc, item) => {
          return (
            acc +
            item.options.reduce((sum, opt) => sum + opt.price * opt.quantity, 0)
          );
        }, 0);
      },
    }),
    {
      name: "cart-storage",
    }
  )
);

function mergeSelectedOptions(
  prev: SelectedOption[],
  next: SelectedOption[]
): SelectedOption[] {
  const merged = [...prev];

  for (const newOpt of next) {
    const existing = merged.find(
      (opt) => opt.id === newOpt.id && opt.type === newOpt.type
    );
    if (existing) {
      existing.quantity += newOpt.quantity;
    } else {
      merged.push(newOpt);
    }
  }

  return merged;
}
