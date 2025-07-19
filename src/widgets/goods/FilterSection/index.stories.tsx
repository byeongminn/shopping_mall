import type { Meta, StoryObj } from "@storybook/react";
import { FilterSection } from ".";

const meta: Meta<typeof FilterSection> = {
  component: FilterSection,
  title: "FilterSection",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof FilterSection>;

export const Default: Story = {
  args: {},
};
