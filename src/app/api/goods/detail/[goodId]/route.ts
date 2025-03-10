import { GetGoodsDetailResponse } from "@/features/goods/detail/api/getGoodsDetail";

export const GET = async () => {
  try {
    const data = {
      id: 20,
      brand: {
        id: 20,
        name: "아티젠",
      },
      delivery: {
        is_departure_today: true,
        delivery_start_at: {
          template: {
            text: "15:00 까지 결제 시 %s",
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
        '<div style="max-width: 700px; margin: 0 auto; padding: 20px; font-family: Arial, sans-serif; line-height: 1.6; color: #333;"><div style="display: flex; flex-direction: column; align-items: center; gap: 10px; margin-bottom: 20px;"><img src="https://shopping-mall-murex.vercel.app/images/pillow-1.png" alt="pillow-1" /><img src="https://shopping-mall-murex.vercel.app/images/pillow-2.png" alt="pillow-2" /><img src="https://shopping-mall-murex.vercel.app/images/pillow-3.png" alt="pillow-3" /></div><h2 style="text-align: center; font-size: 24px; font-weight: bold; color: #222; margin-bottom: 20px;">고급 호텔 스타일 구스다운 베개</h2><p style="text-align: center; font-size: 18px; color: #444;">최상의 숙면을 위한 <strong style="color: #000;">프리미엄 구스다운 베개</strong>입니다.</p><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">✨ 제품 특징</h3><ul style="list-style: none; padding-left: 0;"><li style="padding: 5px 0;">✔ 부드럽고 탄력 있는 <strong>100% 고급 구스다운 충전재</strong></li><li style="padding: 5px 0;">✔ 뛰어난 통기성으로 사계절 내내 쾌적한 사용</li><li style="padding: 5px 0;">✔ 호텔에서 느낄 수 있는 <strong>최상의 편안함</strong></li><li style="padding: 5px 0;">✔ 고급스러운 테두리 파이핑 마감으로 내구성 강화</li><li style="padding: 5px 0;">✔ 알러지 방지 원단 사용으로 더욱 위생적인 수면 환경</li></ul><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">📏 제품 사양</h3><table style="width: 100%; border-collapse: collapse; margin-top: 10px;"><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">사이즈</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">50cm x 70cm</td></tr><tr><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">충전재</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">구스다운 90%, 깃털 10%</td></tr><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">커버 소재</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">100% 면 (고급 다운프루프 가공)</td></tr><tr><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">색상</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">화이트 (블랙 파이핑)</td></tr><tr style="background-color: #f5f5f5;"><th style="text-align: left; padding: 10px; border-bottom: 2px solid #ddd;">세탁 방법</th><td style="padding: 10px; border-bottom: 2px solid #ddd;">드라이클리닝 권장, 약한 세탁 가능</td></tr></table><h3 style=" padding-left: 10px; font-size: 20px; margin-top: 30px;">💡 사용 시 유의사항</h3><p style="background-color: #fffbcc; padding: 15px; border-radius: 5px;">구스다운 제품 특성상, 처음 개봉 시 가벼운 털 빠짐이 있을 수 있습니다. 개봉 후 <strong style="color: #d9534f;">햇볕에 2~3시간 정도 건조</strong>하면 더욱 폭신한 느낌을 즐길 수 있습니다.</p><h3 style="text-align: center; font-size: 22px; color: #0073e6; margin-top: 40px;">🛍 지금 구매하고 호텔 같은 편안함을 경험해 보세요!</h3></div>',
      extra_options: [
        {
          id: 3,
          is_main: false,
          explain: "폭신폭신 이불(화이트)",
          price: 139000,
        },
        {
          id: 4,
          is_main: false,
          explain: "폭신폭신 이불(그레이)",
          price: 139000,
        },
        {
          id: 5,
          is_main: false,
          explain: "폭신폭신 이불(블랙)",
          price: 139000,
        },
      ],
      first_depth_name: "타입선택",
      image_url: "pillow-1.png",
      is_buyable: true,
      is_departure_today: true,
      is_free_delivery: true,
      is_special_price: true,
      name: "폭신폭신 베개",
      options: [
        {
          id: 1,
          is_main: true,
          explain: "폭신폭신 베개(일반형)",
          price: 62600,
        },
        {
          id: 2,
          is_main: false,
          explain: "폭신폭신 베개(경추형)",
          price: 72500,
        },
      ],
      original_image_url: "pillow.png",
      price: {
        goods_id: 20,
        selling_price: 62600,
        regular_price: 89400,
      },
      review_avg: 4.8293986,
      review_count: 15164,
      sub_images: [
        {
          image_url: "pillow-2.png",
        },
        {
          image_url: "pillow-3.png",
        },
      ],
    };

    const mappedData = mappingResponse(data);

    return Response.json(mappedData);
  } catch {
    return new Response(JSON.stringify({ message: "Internal Server Error" }), {
      status: 500,
    });
  }
};

const mappingResponse = (
  data: GetGoodsDetailResponse
): GetGoodsDetailResponse => {
  return {
    ...data,
    sub_images: [
      {
        image_url: data?.image_url,
      },
      ...data?.sub_images,
    ],
  };
};
