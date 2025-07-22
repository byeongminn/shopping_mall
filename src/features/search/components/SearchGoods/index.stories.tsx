import type { Meta, StoryObj } from "@storybook/react";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";
import { HttpResponse, http } from "msw";
import { GOODS_API_URL } from "@/entities/goods/goods.api";
import { SearchGoods } from "@/features/search/components/SearchGoods";
import { getMockSearchGoodList } from "@/entities/goods/__mocks__/goods.mock";
import { MSWProvider } from "@/shared/components/MSWProvider";

const meta: Meta<typeof SearchGoods> = {
  component: SearchGoods,
  title: "SearchGoods",
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

type Story = StoryObj<typeof SearchGoods>;

export const Default: Story = {
  parameters: {
    msw: {
      handlers: [getMockSearchGoodList],
    },
  },
};

export const Empty: Story = {
  parameters: {
    msw: {
      handlers: [
        http.get(GOODS_API_URL.SEARCH, () => {
          return HttpResponse.json({ goods: [], totalResults: 0 });
        }),
      ],
    },
  },
};
