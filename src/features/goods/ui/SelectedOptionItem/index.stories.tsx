import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { GoodSelectedOptionItem } from ".";

const meta: Meta<typeof GoodSelectedOptionItem> = {
  component: GoodSelectedOptionItem,
  title: "GoodSelectedOptionItem",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoodSelectedOptionItem>;

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
