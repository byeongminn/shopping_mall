import { Meta, StoryObj } from "@storybook/react";
import { ReviewStatistics } from ".";

const meta: Meta<typeof ReviewStatistics> = {
  component: ReviewStatistics,
  title: "ReviewStatistics",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ReviewStatistics>;

export const Default: Story = {
  args: {
    reviewAverageDisplayText: 4.8,
    reviewCountDisplayText: "8,289",
    isVisibleReviewCount: true,
  },
};
