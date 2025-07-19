import type { Meta, StoryObj } from "@storybook/react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import { MainGoods } from "@/features/main/components/MainGoods";
import { getMockGoodList } from "@/entities/goods/__mocks__/goods.mock";
import { MSWProvider } from "@/shared/components/MSWProvider";

const meta: Meta<typeof MainGoods> = {
  component: MainGoods,
  title: "MainGoods",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <MSWProvider>
        <Provider>
          <Story />
        </Provider>
      </MSWProvider>
    ),
  ],
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const Provider = ({ children }: { children: React.ReactNode }) => (
  <QueryClientProvider client={queryClient}>
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  </QueryClientProvider>
);

export default meta;

type Story = StoryObj<typeof MainGoods>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [getMockGoodList],
    },
  },
};
