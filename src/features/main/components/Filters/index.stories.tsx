import type { Meta, StoryObj } from "@storybook/react";
import { Filters } from "@/features/main/components/Filters";

const meta: Meta<typeof Filters> = {
  component: Filters,
  title: "Filters",
  tags: ["autodocs"],
  parameters: {
    nextjs: {
      appDirectory: true,
    },
  },
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {},
};
