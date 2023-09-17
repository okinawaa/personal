interface Career {
  id: string;
  title: string;
  date: string;
  works?: {
    title: string;
    list: string[];
  }[];
}

const careers: Career[] = [
  {
    id: "tosspayments",
    title: "토스페이먼츠 프론트엔드 개발",
    date: "2023.06 - ",
    works: [
      {
        title: "퀵계좌결제 사일로",
        list: ["가장 쉽고 부담없는 계좌이체 결제"]
      },
      {
        title: "상점계약 Division(상점계약 PS팀)",
        list: [
          "PG KYC(Know Your Customer)재이행 프로젝트 프론트엔드 구축.",
          "고객 데이터 클렌징으로 리스크 운영모델 구축 고도화"
        ]
      },
      {
        title: "토스커뮤니티",
        list: ["open source slash's maintainer"]
      }
    ]
  },
  {
    id: "musinsa",
    title: "무신사(29CM) 프론트엔드 개발",
    date: "2023.01 - 2023.06",
    works: [
      {
        title: "29CM 서비스 프론트엔드 개발",
        list: [
          "유저 인증 영역 유지보수",
          "상품상세 노출을 제어하여, 악의적인 리셀러 대응 구현"
        ]
      },
      {
        title: "프론트엔드 플랫폼팀 프론트엔드팀 생산성 향상",
        list: [
          "storybook PR preview 개발환경 구축",
          "github cloud runner를 self-hosted runner로 migration",
          "Design System(ruler) token 정의 및 모노레포 환경 구축"
        ]
      },
      {
        title: "29CM 신규 어드민 시스템 프론트엔드 개발",
        list: [
          "디자인 시스템에 DRI를 갖고 개발 및 유지보수",
          "모놀리식 서비스를 마이크로 서비스로 분리 및 공통화",
          "유저 인증 영역 개발 및 유지보수"
        ]
      },
      {
        title: "페이먼트 스쿼드",
        list: ["스태프 및 파트너 정산 시스템 프론트엔드 구축"]
      }
    ]
  },
  {
    id: "bigpicture",
    title: "빅픽처팀 프론트엔드 개발",
    date: "2022.03 - 2022.12.23",
    works: [
      {
        title: "몰라몰라 개복치 서비스 및 관리자 페이지 제작",
        list: [
          "소셜로그인 카카오톡 및 구글 로그인 구현",
          "회원가입 플로우 구현",
          "짤뽑기 컨텐츠 프론트엔드 작업"
        ]
      },
      {
        title: "짤툰대난투 소개페이지 및 관리자 페이지 제작",
        list: [
          "프로젝트 초기 환경세팅(yarn berry, i18next)",
          "타라이브러리 사용 없이, 모바일에서 지원하는 캐러셀 컴포넌트 제작",
          "모든 PR리뷰",
          "게임 소개, 미디어 페이지 퍼블리싱",
          "미디어를 관리하기 위한 관리자 페이지 기능 구현"
        ]
      },
      {
        title: "default-hooks(라이브러리) 제작",
        list: [
          "스토리북을 이용한 E2E 테스트 환경 구축",
          "Jenkins, Docker 를 활용한 npm 배포 파이프라인 구축",
          "프론트엔드 개발에서 자주사용되는 공통 훅을 라이브러리로 형태로 배포"
        ]
      },
      {
        title: "새서울자수 웹페이지 제작",
        list: [
          "next.js 를 활용한 SEO를 고려한 SSR 반응형 웹페이지 제작",
          "next-18next 를 이용한 다국어 페이지 제작",
          "Jenkins, Docker 를 활용한 CD 파이프라인 구축",
          "프론트엔드 환경에서 REST API 서버와 소통",
          "yarn berry 도입으로 인한 빌드시간 단축(zero-install)"
        ]
      },
      {
        title: "한국 야쿠르트 이벤트 페이지",
        list: [
          "react 를 활용한 반응형 웹페이지 제작",
          "react 를 활용한 백오피스 웹사이트 제작",
          "프론트엔드 환경에서 REST API 서버와 소통",
          "Jenkins, Docker 를 활용한 CD 파이프라인 구축",
          "yarn berry 도입으로 인한 빌드시간 단축(zero-install)",
          "크로스브라우징 QA 진행"
        ]
      },
      {
        title: "보건복지부 노담 웹페이지 제작 및 유지보수",
        list: [
          "next.js 를 활용한 SEO를 고려한 SSR 반응형 웹페이지 제작",
          "전 페이지 퍼블리싱 및 기능연동에 관여",
          "react-query 도입을 통한 클라이언트 / 서버 상태의 분리",
          "react 를 활용한 백오피스 웹사이트 제작​",
          "Jenkins, Docker 를 활용한 CI/CD 파이프라인 구축",
          "Jest를 활용한 단위 테스트 코드 작성",
          "크로스브라우징 QA 진행"
        ]
      },
      {
        title: "랠리즈 웹페이지",
        list: [
          "react 를 활용한 반응형 웹페이지 제작",
          "메인 페이지 전체 퍼블리싱 및 기능 구현",
          "Ad Tracker 삽입",
          "react 를 활용한 백오피스 웹사이트 제작​",
          "크로스브라우징 QA 진행"
        ]
      },
      {
        title: "아이발달 모바일 애플리케이션(RN)",
        list: ["온보딩 페이지 제작", "앱스토어 심사를 위한 회원 차단 기능 구현"]
      },
      {
        title: "프론트엔드 팀 문화 확립",
        list: [
          "프론트엔드 코딩 컨벤션 문화 확립",
          "프론트엔드팀 코드 리뷰 문화 개선",
          "yarn berry, react-query, husky등 신기술 도입 및 팀원분들에게 정확한 당위성과 근거 설명"
        ]
      }
    ]
  },
  {
    id: "parksystems",
    title: "파크시스템스 풀스택 웹개발 인턴",
    date: "2022.01 - 2022.03",
    works: [
      {
        title: "나노사이언티픽 심포지엄 사이트 구축",
        list: [
          "클라이언트(react) / 서버(express) / 데이터베이스(mysql) 환경 구축",
          "글로벌 웹사이트 환경을 위한 다국어 웹사이트 제작",
          "react 환경에서 SSR 구현",
          "Jenkins 를 활용한 Continuous deployment 파이프라인 구축"
        ]
      }
    ]
  },
  {
    id: "japan",
    title: "일본 워킹홀리데이",
    date: "2019.01 - 2020.01"
  }
];

export default careers;
