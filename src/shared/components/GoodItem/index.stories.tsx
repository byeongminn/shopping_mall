import type { Meta, StoryObj } from "@storybook/react";
import { GoodItem } from "@/shared/components/GoodItem";

const meta: Meta<typeof GoodItem> = {
  component: GoodItem,
  title: "GoodItem",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div style={{ width: 269 }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof GoodItem>;

export const Default: Story = {
  args: {
    good: {
      id: "1",
      name: "구름 소파",
      brand: {
        id: "1",
        name: "플러피누들",
      },
      price: {
        originalPrice: "256700",
        sellingPrice: "154000",
        discountRate: "40",
        originalPriceDisplayText: "256,700",
        sellingPriceDisplayText: "154,000",
      },
      imageUrl: "cloud-sofa.png",
      badgeProperties: {
        isFreeDelivery: false,
        isSpecialPrice: true,
        departureToday: {
          orderDeadline: "12:00",
          description: "평일 %s까지 결제시",
          departureTodayExp: "B",
        },
      },
      reviewStatistic: {
        reviewCount: 9405,
        reviewAverage: 4.79,
        reviewCountDisplayText: "9,405",
        reviewAverageDisplayText: 4.8,
      },
    },
  },
};
