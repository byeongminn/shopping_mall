import { Meta, StoryObj } from "@storybook/react";
import { GoodOptions } from ".";
import { fn } from "@storybook/test";

const meta: Meta<typeof GoodOptions> = {
  component: GoodOptions,
  title: "GoodOptions",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoodOptions>;

export const Default: Story = {
  args: {
    firstDepthName: "타입 선택",
    options: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
      },
    ],
    extraOptions: [
      {
        id: 39,
        explain: "베개 커버 추가 (화이트)",
        price: 10000,
      },
      {
        id: 40,
        explain: "베개 커버 추가 (그레이)",
        price: 10000,
      },
    ],
    selectedOptions: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
        type: "option",
        quantity: 1,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
        type: "option",
        quantity: 2,
      },
    ],
    totalPrice: 207600,
    onAddOptionFromSelect: fn(),
    onIncreaseQuantity: fn(),
    onDecreaseQuantity: fn(),
    onRemoveOption: fn(),
    onCartClick: fn(),
  },
};
