import { Meta, StoryObj } from "@storybook/react";
import { GoodSelectedOptionsItem } from ".";
import { fn } from "@storybook/test";

const meta: Meta<typeof GoodSelectedOptionsItem> = {
  component: GoodSelectedOptionsItem,
  title: "GoodSelectedOptionsItem",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoodSelectedOptionsItem>;

export const Default: Story = {
  args: {
    option: {
      id: 39,
      explain: "폭신 폭신 베개 (일반형)",
      price: 62600,
      type: "option",
      quantity: 1,
    },
    onIncreaseQuantity: fn(),
    onDecreaseQuantity: fn(),
    onRemoveOption: fn(),
  },
};
