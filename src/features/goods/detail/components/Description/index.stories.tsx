import { Meta, StoryObj } from "@storybook/react";
import { GoodDescription } from ".";
import { fn } from "@storybook/test";

const meta: Meta<typeof GoodDescription> = {
  component: GoodDescription,
  title: "GoodDescription",
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof GoodDescription>;

export const Default: Story = {
  args: {
    good: {
      id: "20",
      name: "폭신 폭신 베개",
      brand: {
        id: "20",
        name: "아티젠",
      },
      price: {
        originalPrice: "89400",
        sellingPrice: "62600",
        discountRate: "30",
        originalPriceDisplayText: "89,400",
        sellingPriceDisplayText: "62,600",
      },
      imageUrl: "pillow.png",
      badgeProperties: {
        isFreeDelivery: false,
        isSpecialPrice: true,
        departureToday: {
          orderDeadline: "15:00",
          description: "평일 %s까지 결제시",
        },
      },
      reviewStatistic: {
        reviewCount: 8289,
        reviewAverage: 4.77,
        reviewCountDisplayText: "8,289",
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
        '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; justify-content: center; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow.png" alt="폭신 폭신 베개" style="max-width: 100%; height: auto;" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">편안함이 가득한 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">푹신하고 부드러운 <strong style="color: #000;">폭신 폭신 베개</strong>로 최고의 숙면을 경험하세요.</p></div>',
      extraOptions: [
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
      firstDepthName: "타입 선택",
      options: [
        {
          id: 39,
          explain: "폭신 폭신 베개 (일반형)",
          price: 62600,
        },
        {
          id: 40,
          explain: "폭신 폭신 베개 (경추형)",
          price: 72500,
        },
      ],
      subImages: [
        {
          imageUrl: "pillow-1.png",
        },
        {
          imageUrl: "pillow-2.png",
        },
        {
          imageUrl: "pillow-3.png",
        },
      ],
    },
    totalPrice: 207600,
    selectedOptions: [
      {
        id: 39,
        explain: "폭신 폭신 베개 (일반형)",
        price: 62600,
        type: "option",
        quantity: 1,
      },
      {
        id: 40,
        explain: "폭신 폭신 베개 (경추형)",
        price: 72500,
        type: "option",
        quantity: 2,
      },
    ],
    onAddOptionFromSelect: fn(),
    onIncreaseQuantity: fn(),
    onDecreaseQuantity: fn(),
    onRemoveOption: fn(),
    onCartClick: fn(),
  },
};
