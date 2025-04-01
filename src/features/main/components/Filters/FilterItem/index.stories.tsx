import type { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { FilterItem } from "@/features/main/components/Filters/FilterItem";

const meta: Meta<typeof FilterItem> = {
  component: FilterItem,
  title: "FilterItem",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ display: "flex" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof FilterItem>;

export const Default: Story = {
  args: {
    text: "추천순",
    isActive: false,
    onFilterClick: fn(),
  },
};

export const Active: Story = {
  args: {
    ...Default.args,
    isActive: true,
  },
};
