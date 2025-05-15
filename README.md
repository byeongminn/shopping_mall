# 쇼핑몰 프로젝트

![Npm](https://img.shields.io/badge/npm-10.7.0-orange?style=flat-square)
![Node.js](https://img.shields.io/badge/node.js-20.14.0-blue?style=flat-square)

## 프로젝트 개요

본 프로젝트는 **Next.js 기반 1인 쇼핑몰**을 직접 설계하고 개발함으로써, 프론트엔드 개발 역량을 종합적으로 확장하는 것을 목표로 진행되었습니다.

주요 학습 목표는 다음과 같습니다.

- **Next.js FSD(Feature-Sliced Design) 구조**를 적용하여 효율적인 프로젝트 아키텍처를 구성
- **MSW(Mock Service Worker)** 를 활용해 백엔드 API 의존도를 낮추고, 독립적인 프론트엔드 개발 환경 구축
- **Storybook**을 도입하여 컴포넌트 단위 개발 및 문서화 방식 실습
- **JWT 기반 인증 및 Refresh Token 패턴**을 통한 인증 시스템 구현
- **Protected Route**를 위한 미들웨어, 클라이언트, 서버 측 보호 로직 추가

또한, 모든 화면은 반응형으로 구현하여 다양한 디바이스에서 최적의 사용자 경험(UX)을 제공하였으며,  
정적 타입(**TypeScript**)과 **@tanstack/react-query**를 적극 활용하여 코드 안정성과 비동기 데이터 관리 효율성을 높였습니다.


***해당 데이터는 오늘의집 데이터와 전혀 무관합니다.**



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
   JWT_SECRET="..."
   ```
5. <b>Start the project</b>
   ```
   yarn build
   yarn start
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

### [로그인]
- 고정된 테스트 계정(이메일/비밀번호)을 사용하여 로그인할 수 있도록 구성하였습니다.
- 로그인 성공 시 JWT 기반으로 Access Token과 Refresh Token을 발급받아 세션을 관리합니다.
- 로그인하지 않은 사용자가 보호된 페이지에 접근할 경우, 자동으로 로그인 페이지로 리다이렉트되도록 구현하였습니다.
- 로그인한 사용자가 로그인 페이지에 접근할 경우, 자동으로 홈 페이지로 리다이렉트되도록 구현하였습니다.

|로그인|
|--------|
| ![login](https://github.com/user-attachments/assets/6cc7b20d-89cb-44ba-b81b-e6981a70eac4) |

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
- 1.3.0
  - **@tanstack/react-query 의 전략을 Streaming 에서 Prefetching 으로 전환**
    - 첫 진입 시 완성된 UI 제공이 중요한 쇼핑몰 특성과 잘 맞음
    - 검색 엔진 최적화(SEO)가 매출과 직접 연결됨 → SSR HTML에 데이터 포함 필요
    - React Query 캐시 재사용으로 빠른 전환 가능
  - **공통 쿼리 옵션 함수 분리**
    - 중복 제거 및 일관성 유지를 위해 별도 옵션 생성 함수로 분리
- 1.2.1
  - **쿼리 갱신 방식 리팩토링**
    - 로그인/로그아웃 시 사용자 상태가 즉시 반영되도록 invalidateQueries → refetchQueries로 전환
  - **api/goods 로직 개선**
    - 무한스크롤 대응을 위한 page, pageSize 기반 슬라이스 처리 적용
- 1.2.0
  - **JWT 기반 인증 추가**
    - 고정된 테스트 계정(이메일/비밀번호)을 통한 로그인 구성
    - 로그인 성공 시 Access Token과 Refresh Token을 발급하여 세션 관리
  - **Protected Route 적용**
    - 인증 상태에 따라 보호된 페이지 접근 시 로그인 페이지로, 로그인 페이지 접근 시 홈 페이지로 리다이렉트 처리
    - 서버, 클라이언트 양쪽에서 인증 상태 검증
    - 미들웨어를 통한 경로 보호 로직 적용
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
