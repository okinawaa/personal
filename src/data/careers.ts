const careers = [
  {
    id: "musinsa",
    title: "무신사(29CM) 프론트엔드 개발",
    date: "2023.01 - "
  },
  {
    id: "bigpicture",
    title: "빅픽처팀 프론트엔드 개발",
    date: "2022.03 - 2022.12.23",
    works: [
      {
        title: "default-hooks(라이브러리) 제작 2022.07 - 2022.09",
        list: [
          "스토리북을 이용한 E2E 테스트 환경 구축",
          "Jenkins, Docker 를 활용한 npm 배포 파이프라인 구축",
          "프론트엔드 개발에서 자주사용되는 공통 훅을 라이브러리로 형태로 배포"
        ]
      },
      {
        title: "프론트엔드 팀 문화 확립",
        list: [
          "프론트엔드 코딩 컨벤션 문화 확립",
          "프론트엔드팀 코드 리뷰 문화 개선"
        ]
      }
    ]
  },
  {
    id: "parksystems",
    title: "파크시스템스 풀스택 웹개발 인턴",
    date: "2022.01 - 2022.03"
  },
  {
    id: "japan",
    title: "일본 워킹홀리데이",
    date: "2019.01 - 2020.01"
  }
] as const;

export default careers;
