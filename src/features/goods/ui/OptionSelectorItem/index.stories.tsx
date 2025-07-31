import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { OptionSelectorItem } from ".";

const meta: Meta<typeof OptionSelectorItem> = {
  component: OptionSelectorItem,
  title: "OptionSelectorItem",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof OptionSelectorItem>;

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
