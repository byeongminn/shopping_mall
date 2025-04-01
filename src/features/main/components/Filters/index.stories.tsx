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
  decorators: [
    (Story) => (
      <div style={{ position: "relative", height: 200 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Filters>;

export const Default: Story = {
  args: {},
};
