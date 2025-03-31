import type { Meta, StoryObj } from "@storybook/react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import { Goods } from "@/features/main/components/Goods";
import { getMockGoods } from "@/features/main/api/getGoods.mock";
import { MSWProvider } from "@/shared/components/MSWProvider";

const meta: Meta<typeof Goods> = {
  component: Goods,
  title: "Goods",
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

type Story = StoryObj<typeof Goods>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [getMockGoods],
    },
  },
};
