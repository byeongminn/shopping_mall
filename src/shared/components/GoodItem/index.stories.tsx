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
      brand: { id: "1", name: "플러피누들" },
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
        },
      },
      reviewStatistic: {
        reviewCount: 9405,
        reviewAverage: 4.79,
        reviewCountDisplayText: "9,405",
        reviewAverageDisplayText: 4.8,
      },
      delivery: {
        fee: 3000,
        backwoodsFee: 5000,
        freeThreshold: 50000,
        isRegionalDeliveryFee: true,
        type: 1,
      },
      description:
        '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/cloud-sofa.png" alt="구름 소파" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">구름처럼 포근한 소파</h2><p style="text-align: center; font-size: 18px; color: #444;">포근함의 끝판왕 <strong style="color: #000;">구름 소파</strong>로 당신의 공간을 완성하세요.</p></div>',
      extraOptions: [
        { id: 3, explain: "소파 방석 추가 (화이트)", price: 49000 },
        { id: 4, explain: "소파 방석 추가 (그레이)", price: 49000 },
        { id: 5, explain: "소파 방석 추가 (네이비)", price: 49000 },
      ],
      firstDepthName: "사이즈 선택",
      options: [
        { id: 1, explain: "구름 소파(2인용)", price: 154000 },
        { id: 2, explain: "구름 소파(3인용)", price: 198000 },
      ],
      subImages: [{ imageUrl: "cloud-sofa.png" }],
    },
  },
};
