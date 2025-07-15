import { Meta, StoryObj } from "@storybook/react";
import { GoodOptionsItem } from ".";
import { fn } from "@storybook/test";

const meta: Meta<typeof GoodOptionsItem> = {
  component: GoodOptionsItem,
  title: "GoodOptionsItem",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoodOptionsItem>;

export const Default: Story = {
  args: {
    isFirst: true,
    firstDepthName: "타입 선택",
    isExtraOption: false,
    options: [
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
    onSelectChange: fn(),
  },
};
