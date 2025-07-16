import { SelectedOption } from "@/features/goods/detail/hooks/useSelectedOptions";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartItem = {
  id: string;
  name: string;
  options: SelectedOption[];
};

type CartState = {
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
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],

      addItem: (newItem) => {
        const items = get().items;
        const existingItem = items.find((item) => item.id === newItem.id);

        if (!existingItem) {
          // 장바구니에 없으면 새로 추가
          set({ items: [...items, newItem] });
          return;
        }

        // 이미 존재 → 옵션 병합
        const mergedOptions = mergeSelectedOptions(
          existingItem.options,
          newItem.options
        );

        const updatedItem: CartItem = {
          ...existingItem,
          options: mergedOptions,
        };

        set({
          items: items.map((item) =>
            item.id === newItem.id ? updatedItem : item
          ),
        });
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
