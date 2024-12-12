import { API_BASE_URL } from "@/shared/api/constants";

export type GetGoodsDetailRequestParams = {
  goodId: string;
};

export type GoodsDetailOption = {
  id: number;
  is_main: boolean;
  explain: string;
  explain2: string;
  stock: number;
  position: number;
  selling_cost: number;
  undiscounted_cost: number;
  price: {
    goods_option_id: number;
    reference_price: number;
    regular_price: number;
    sale_price: number;
    selling_price: number;
  };
};

export type GoodsDetailImage = {
  original_image_url: string;
  resized_image_url: string;
  resized_thumbnail_image_url: string;
};

export type GetGoodsDetailResponse = {
  id: number;
  brand: {
    id: number;
    name: string;
  };
  delivery: {
    is_departure_today: boolean;
    delivery_start_at: {
      template: {
        text: string;
        values: string;
      };
    };
    fee: number;
    restrict: string;
  };
  description: string;
  extra_options: GoodsDetailOption[];
  first_depth_name: string;
  image_url: string;
  is_buyable: boolean;
  is_departure_today: boolean;
  is_free_delivery: boolean;
  is_special_price: boolean;
  name: string;
  options: GoodsDetailOption[];
  original_image_url: string;
  price: {
    goods_id: number;
    selling_price: number;
    regular_price: number;
    sale_price: number;
    reference_price: number;
  };
  qa_count: number;
  review_avg: number;
  review_count: number;
  sub_images: GoodsDetailImage[];
};

export const GetGoodsDetailURL = `${API_BASE_URL}/api/goods/detail/:goodId`;

export const getGoodsDetail = async (
  params: GetGoodsDetailRequestParams
): Promise<GetGoodsDetailResponse> => {
  const url = GetGoodsDetailURL.replace(":goodId", params.goodId);

  const response = await fetch(url);

  return await response.json();
};
