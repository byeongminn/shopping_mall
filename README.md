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



### Built With

- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=Next.js&logoColor=ffffff)
- ![Typescript](https://img.shields.io/badge/Typescript-3178C6?style=for-the-badge&logo=Typescript&logoColor=white)
- ![Vanilla-Extract](https://img.shields.io/badge/Vanilla_Extract-CBFBF1?style=for-the-badge&logo=vanillaextract&logoColor=000000)
- ![React-Query](https://img.shields.io/badge/React_query-FF4154?style=for-the-badge&logo=reactquery&logoColor=ffffff)
- ![MSW](https://img.shields.io/badge/MSW-FF6A33?style=for-the-badge&logo=mockserviceworker&logoColor=ffffff)
- ![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=ffffff)

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

## Release History

- 1.0.0
  - The first release
- 0.0.1 \* Work in progress
  <br />
