# 쇼핑몰 프로젝트

![Npm](https://img.shields.io/badge/npm-10.7.0-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/node.js-20.14.0-blue?style=flat-square)

이 프로젝트는 Next.js의 App Router 버전을 활용하여 featured 기반의 디렉토리 구조에 익숙해지는 것을 주요 목표로 삼고 있습니다. 이를 통해 최신 Next.js 구조의 효율적인 사용법을 학습하고, 프로젝트 관리와 유지보수의 편의성을 높이고자 하였습니다.
<br />
또한, TypeScript와 @tanstack/react-query의 활용 능력을 향상시키는 것도 중요한 목표 중 하나였습니다. 이를 통해 정적 타입의 장점을 살려 코드의 안정성을 높이고, 비동기 데이터 관리를 더욱 효율적으로 처리할 수 있는 능력을 키우고자 하였습니다.
<br />
특히, 이번 프로젝트에서는 처음으로 MSW(Mock Service Worker) 라이브러리를 도입하여 백엔드 API에 대한 의존성을 줄이는 개발 방식을 연습하였습니다. 이를 통해 프론트엔드 개발 단계에서도 독립적으로 기능을 구현하고 테스트할 수 있는 환경을 조성하였습니다.
<br />
API 개발 측면에서는 src/app/api 하위에 route.ts 파일을 생성하여 API 엔드포인트를 정의하였습니다. 이를 통해 Next.js의 서버리스 기능을 활용한 간단한 API 서버를 구축하고, 클라이언트와의 데이터 통신을 실습하였습니다.
<br />
프로젝트의 범위는 쇼핑몰의 주요 기능을 중심으로 메인 페이지, 검색 페이지, 상세 페이지의 세 가지 주요 화면을 구현하는 것이었습니다. 이를 통해 쇼핑몰 서비스의 기본적인 사용자 경험(UX)을 구축하고, 실제 애플리케이션 개발에 필요한 핵심 기능을 실습할 수 있었습니다. 모든 화면은 다양한 디바이스 환경에서도 최적의 사용자 경험을 제공할 수 있도록 반응형으로 작업하였습니다.
<br />
추가로, 이번 프로젝트에서는 Storybook을 처음 도입하여 컴포넌트 단위의 개발과 문서화 방식을 실습해 보았습니다. 컴포넌트를 독립적으로 시각화하고 테스트하는 환경을 구성함으로써, UI 개발의 효율성과 유지보수성을 높이는 방법을 학습할 수 있었습니다. 또한, Storybook 작성을 통해 Container와 Presentational 컴포넌트의 구분을 명확히 하고, 중복되는 로직은 별도 컴포넌트로 분리하여 코드의 재사용성과 가독성도 함께 개선하였습니다.
<br />
<br />
<strong>해당 데이터는 오늘의집 데이터와 전혀 무관합니다.</strong>



### Built With

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=ffffff)
- ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
- ![Vanilla-Extract](https://img.shields.io/badge/Vanilla_Extract-CBFBF1?style=for-the-badge&logo=vanillaextract&logoColor=000000)
- ![React-Query](https://img.shields.io/badge/React_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=ffffff)
- ![MSW](https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=ffffff)
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff)
- ![Storybook](https://img.shields.io/badge/Storybook-FF4685?style=for-the-badge&logo=Storybook&logoColor=ffffff)

<br />

## Getting Started

1. <b>Clone the repo</b>
   ```
   git clone https://github.com/byeongminn/shopping_mall.git
   ```
2. <b>Change to the folder created by the clone command</b>
   ```
   cd shopping_mall
   ```
3. <b>Install packages</b>
   ```
   yarn
   ```
4. <b>Create an environment variable file.</b> Create a .env file in the root directory of the project and define the required environment variables.
   ```
   NEXT_PUBLIC_BASE_URL="http://localhost:3000"
   ```
5. <b>Start the project</b>
   ```
   yarn dev
   ```

<br />

## Usage
### [메인페이지 - 상품 목록]
- 무한 스크롤: 사용자가 스크롤할 때마다 맛집 목록이 연속적으로 표시되어 사용자 경험을 향상시킵니다.
- 상품 상세 정보 페이지 이동: 사용자가 상품을 클릭하면 해당 상품의 상세 정보 페이지로 이동할 수 있습니다.
- 정렬 기능: 사용자가 상품을 원하는 순서로 정렬할 수 있으며, 정렬 정보는 URL의 searchParams에 저장되어 새로고침 후에도 정렬 상태가 유지됩니다.

|상품 목록|
|--------|
| ![goods](https://github.com/user-attachments/assets/c39ba81d-7dbd-44b5-b31a-f7ae03077462) |

<br />

### [상품 검색]
- 검색 기능: 검색 정보는 URL의 searchParams에 저장되어 새로고침 후에도 검색 상태가 유지됩니다.

|상품 검색 목록|
|--------|
| ![Search](https://github.com/user-attachments/assets/c839ccd7-f945-4c4a-903d-706e399c35b3) |
| ![Search2](https://github.com/user-attachments/assets/cd4c4827-cea5-46d3-949d-f05a6ec82f63) |

<br />

### [상품 상세]
- 상품 이미지: Swiper를 이용해 여러 각도의 상품 이미지를 슬라이드 형식으로 제공합니다. 사용자는 상품 이미지를 스와이프하여 직관적으로 확인할 수 있습니다.
- 상품 옵션 선택: 색상 및 추가 상품을 옵션으로 선택할 수 있습니다.
- 가격 및 배송 정보: 상품의 할인된 가격과 배송비 정보를 표시합니다. 결제 시간에 따른 오늘 출발 여부도 확인할 수 있습니다.
- 수량 조절: 수량을 선택하여 총 주문 금액을 확인할 수 있습니다.

|상품 상세|
|--------|
| ![good](https://github.com/user-attachments/assets/41a52230-ab9c-4115-9b29-c40063b8f86f) |

<br />

## Performance Improvements

이 프로젝트에서는 **Lighthouse 기준으로 성능을 개선**하여 웹 페이지의 로딩 속도와 사용자 경험(UX)을 크게 향상시켰습니다. 주요 성능 개선 사항과 개선 전후의 스코어는 아래에 명시되어 있습니다.

| 개선 전  | 개선 후  |
|----------|----------|
| ![Before](https://github.com/user-attachments/assets/f59df43d-dd9d-4373-9c84-8354b5cd891b) | ![After](https://github.com/user-attachments/assets/18c3dd9d-d66e-4fb7-b7bb-620cb1f27e0b) |

### **🔍 주요 개선 사항**

### 1️⃣ **이미지 최적화**
- **`next/image` 도입**: 기존 `<img>` 태그를 **`next/image`**로 변경하여 이미지 최적화를 수행했습니다.
- **`sizes` 속성 활용**: 뷰포트에 맞는 적절한 이미지 크기를 제공해 불필요한 리소스 로드를 방지했습니다.
- **Lazy Loading**: 화면에 보이는 이미지부터 로드하여 **LCP (Largest Contentful Paint)** 시간을 단축했습니다.
- **상품 상세페이지 썸네일 최적화**: 작은 썸네일과 큰 썸네일의 priority 조건을 수정하여 LCP 시간을 개선했습니다.
### 2️⃣ **접근성 개선**
- **Links do not have a discernible name 문제 해결**: 클릭 가능한 링크에 **`aria-label`**을 추가하여 링크의 의미를 명확히 전달했습니다. 이를 통해 Lighthouse의 **"Links do not have a discernible name"** 오류를 해결하고, 웹 접근성을 개선했습니다.
- **상품 상세페이지 접근성 개선**: 상품 상세페이지의 select 태그에 aria-label 속성을 추가하여 접근성을 개선했습니다.


<br />

## Release History
- 1.1.0
  - **Storybook 도입**
    - 컴포넌트 개발 및 문서화를 위한 Storybook 설정 추가
    - 주요 UI 컴포넌트별 `.stories.tsx` 파일 작성
    - 개발 환경에서 `yarn storybook`으로 실행 가능
  - **리팩토링**
    - 스토리북 작성 과정에서 컨테이너 컴포넌트와 프레젠테이셔널 컴포넌트를 명확히 분리
    - 중복되는 로직을 별도 컴포넌트로 추출하여 코드 중복 최소화
- 1.0.3
  - **상세페이지 Lighthouse 성능 개선**
    - 상품 상세페이지 접근성 개선: 상품 상세페이지의 select 태그에 aria-label 속성 추가
    - 상품 상세페이지 썸네일 최적화: 작은 썸네일과 큰 썸네일의 priority 조건 수정
    - Swiper 최적화: Swiper에 initialSlide 속성 추가 및 Image에 loading 속성 추가
  - **성능 지표 개선**
    - Performance: 83 → 100
    - Accessibility: 87 → 95
- 1.0.2
  - **메인페이지 Lighthouse 성능 개선**
    - 접근성 개선: aria-label 추가로 링크 명확성 향상
  - **성능 지표 개선**
    - Accessibility: 89 → 94
- 1.0.1
  - **메인페이지 Lighthouse 성능 개선**
    - 이미지 최적화: **next/image** 도입, `sizes` 속성 추가
    - 레이아웃 시프트(CLS) 해결: **width/height 명시적 설정**
  - **성능 지표 개선**
    - Performance: 76 → 100
    - Best Practices: 78 → 100
- 1.0.0
  - The first release
- 0.0.1
  - Work in progress
  <br />
