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
