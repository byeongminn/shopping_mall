import { HttpHandler, HttpResponse, http } from "msw";
import { GetGoodsDetailURL } from "./getGoodsDetail";

export const getMockGoodsDetail: HttpHandler = http.get(
  GetGoodsDetailURL,
  () => {
    return HttpResponse.json(GET_MOCK_GOODS_DETAIL.success);
  }
);

const GET_MOCK_GOODS_DETAIL = {
  success: {
    id: 1181383,
    brand: {
      id: 3524,
      name: "달팽이리빙",
    },
    delivery: {
      is_departure_today: true,
      delivery_start_at: {
        template: {
          text: "12:00 까지 결제 시 %s",
          values: "오늘 출발",
        },
      },
      fee: {
        fee: 3000,
        backwoods_fee: 5000,
        free_threshold: 50000,
        is_regional_delivery_fee: true,
        type: 1,
      },
    },
    description:
      '\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-313338879692864.jpg" alt="" width="860" height="3000"\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n &nbsp;\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n &nbsp;\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n &nbsp;\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n &nbsp;\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472296075128098.jpg" alt=""\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472297413085376.jpg" alt=""\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472298436088292.jpg" alt=""\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472300076100012.jpg" alt=""\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472301034339747.jpg" alt="" width="860" height="4150"\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/168472301844947540.jpg" alt="" width="860" height="4002"\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n \u003Cimg src="https://prs.ohou.se/apne2/any/uploads/productions/descriptions/url/v1-205401249591424.jpg" alt=""\u003E\n\u003C/div\u003E\n\u003Cdiv style="text-align: center;"\u003E\n &nbsp;\n\u003C/div\u003E\n\u003Cdiv\u003E\n \u003Cimg style="display: block; margin-left: auto; margin-right: auto;" src="https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/descriptions/url/164084742688832878.jpg" alt="상품의 상세 설명 이미지" width="860" height="3840"\u003E\n\u003C/div\u003E\n\u003Cdiv\u003E\n &nbsp;\n\u003C/div\u003E',
    extra_options: [
      {
        id: 17932558,
        is_main: false,
        explain: "순수 나이프+포크 1인세트(실버)",
        explain2: "",
        stock: -1,
        position: 2,
        selling_cost: 3700,
        undiscounted_cost: 3700,
        price: {
          goods_option_id: 17932558,
          reference_price: 3700,
          regular_price: 8200,
          sale_price: 3700,
          selling_price: 3700,
        },
      },
      {
        id: 17932559,
        is_main: false,
        explain: "순수 나이프+포크 1인세트(그레이)",
        explain2: "",
        stock: -1,
        position: 3,
        selling_cost: 4900,
        undiscounted_cost: 4900,
        price: {
          goods_option_id: 17932559,
          reference_price: 4900,
          regular_price: 14500,
          sale_price: 4900,
          selling_price: 4900,
        },
      },
      {
        id: 17932560,
        is_main: false,
        explain: "순수 나이프+포크 1인세트(브라운)",
        explain2: "",
        stock: -1,
        position: 4,
        selling_cost: 4900,
        undiscounted_cost: 4900,
        price: {
          goods_option_id: 17932560,
          reference_price: 4900,
          regular_price: 14500,
          sale_price: 4900,
          selling_price: 4900,
        },
      },
      {
        id: 17932561,
        is_main: false,
        explain: "순수 나이프+포크 1인세트(크림화이트)",
        explain2: "",
        stock: -1,
        position: 5,
        selling_cost: 4900,
        undiscounted_cost: 4900,
        price: {
          goods_option_id: 17932561,
          reference_price: 4900,
          regular_price: 14500,
          sale_price: 4900,
          selling_price: 4900,
        },
      },
      {
        id: 17932562,
        is_main: false,
        explain: "순수 나이프+포크 1인세트(핑크)",
        explain2: "",
        stock: -1,
        position: 6,
        selling_cost: 4900,
        undiscounted_cost: 4900,
        price: {
          goods_option_id: 17932562,
          reference_price: 4900,
          regular_price: 14500,
          sale_price: 4900,
          selling_price: 4900,
        },
      },
    ],
    first_depth_name: "색상선택",
    image_url:
      "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166200002169429992.jpg/2560/2560",
    is_buyable: true,
    is_departure_today: true,
    is_free_delivery: true,
    is_special_price: true,
    name: "누적판매 100만개! 퀴진드마망 커트러리 순수 4인 수저세트 (5color)",
    options: [
      {
        id: 10119441,
        is_main: true,
        explain: "순수 수저세트 실버(4인)",
        explain2: "",
        stock: -1,
        position: 0,
        selling_cost: 9900,
        undiscounted_cost: 9900,
        price: {
          goods_option_id: 10119441,
          reference_price: 9900,
          regular_price: 26500,
          sale_price: 9900,
          selling_price: 9900,
        },
      },
      {
        id: 10119442,
        is_main: false,
        explain: "순수 수저세트 그레이(4인)",
        explain2: "",
        stock: -1,
        position: 1,
        selling_cost: 18500,
        undiscounted_cost: 18500,
        price: {
          goods_option_id: 10119442,
          reference_price: 18500,
          regular_price: 36500,
          sale_price: 18500,
          selling_price: 18500,
        },
      },
      {
        id: 10119443,
        is_main: false,
        explain: "순수 수저세트 브라운(4인)",
        explain2: "",
        stock: -1,
        position: 2,
        selling_cost: 18500,
        undiscounted_cost: 18500,
        price: {
          goods_option_id: 10119443,
          reference_price: 18500,
          regular_price: 36500,
          sale_price: 18500,
          selling_price: 18500,
        },
      },
      {
        id: 10119444,
        is_main: false,
        explain: "순수 수저세트 크림화이트(4인)",
        explain2: "",
        stock: -1,
        position: 3,
        selling_cost: 18500,
        undiscounted_cost: 18500,
        price: {
          goods_option_id: 10119444,
          reference_price: 18500,
          regular_price: 36500,
          sale_price: 18500,
          selling_price: 18500,
        },
      },
      {
        id: 10119445,
        is_main: false,
        explain: "순수 수저세트 핑크(4인)",
        explain2: "",
        stock: -1,
        position: 4,
        selling_cost: 18500,
        undiscounted_cost: 18500,
        price: {
          goods_option_id: 10119445,
          reference_price: 18500,
          regular_price: 36500,
          sale_price: 18500,
          selling_price: 18500,
        },
      },
      {
        id: 13587687,
        is_main: false,
        explain: "순수 수저세트 컬러별(4인) 실버제외",
        explain2: "",
        stock: -1,
        position: 5,
        selling_cost: 18500,
        undiscounted_cost: 18500,
        price: {
          goods_option_id: 13587687,
          reference_price: 18500,
          regular_price: 36500,
          sale_price: 18500,
          selling_price: 18500,
        },
      },
    ],
    original_image_url:
      "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/166200002169429992.jpg",
    price: {
      goods_id: 1181383,
      selling_price: 9900,
      regular_price: 26500,
      sale_price: 9900,
      reference_price: 9900,
    },
    qa_count: 610,
    review_avg: 4.8293986,
    review_count: 15164,
    sub_images: [
      {
        original_image_url:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/166200002169429992.jpg",
        resized_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166200002169429992.jpg/2560/2560",
        resized_thumbnail_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-166200002169429992.jpg/160/160",
      },
      {
        original_image_url:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/images/164274612309750884.jpg",
        resized_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274612309750884.jpg/2560/2560",
        resized_thumbnail_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274612309750884.jpg/160/160",
      },
      {
        original_image_url:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/images/164274612603969749.jpg",
        resized_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274612603969749.jpg/2560/2560",
        resized_thumbnail_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274612603969749.jpg/160/160",
      },
      {
        original_image_url:
          "https://bucketplace-v2-development.s3.amazonaws.com/uploads/productions/images/164274613090397940.jpg",
        resized_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274613090397940.jpg/2560/2560",
        resized_thumbnail_image_url:
          "https://image.ohou.se/image/central_crop/bucketplace-v2-development/uploads-productions-images-164274613090397940.jpg/160/160",
      },
    ],
  },
};
