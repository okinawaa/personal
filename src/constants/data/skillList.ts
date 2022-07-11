import * as Images from "@images/skill";

const skillList: {
  front: Skill.SkillType[];
  back: Skill.SkillType[];
  devOps: Skill.SkillType[];
  vcs: Skill.SkillType[];
  etc: Skill.SkillType[];
} = {
  front: [
    {
      id: "html5",
      spec: {
        src: Images.html5,
        alt: "html5"
      },
      proficiency: 85,
      checkedList: [
        "시멘틱태그의 사용 이유와 기대 효과",
        "크로스 브라우징 및 대처법",
        "웹 접근성 향상을 위한 방법들",
        "마크업을 정확하게 하는 방법",
        "특정 태그에 사용가능한 다양한 속성들"
      ],
      description:
        "실무에서 퍼블리싱을 진행해본 경험이 많이 있으며, 간단한 토이프로젝트가 아닌 실제로 운영되는 사이트를 구축함에 따라서 다양한 디바이스 및 브라우저의 호환성 문제를 해결한 경험이 많습니다. 예를들어 배경이 투명인 동영상을 랜더링할때 각 브라우저의 엔진 특성상 특정 확장자를 가진 동영상 파일을 랜더링 못하는 경우가 있었지만, 다양한 기기(MAC, WINDOW, ANDROID, IOS) 의 다양한 브라우저(Chrome, Edge, Safari, Naver Whale) 환경 속에서 완벽하게 랜더링 하도록 한 경험이 있습니다. \n\n다양한 시멘틱태그의 사용법을 숙지하고 있으며, 어떤 성격을 가진 요소들은 어떠한 태그를 사용해야 하는지 정확히 이해하고 있습니다. 디자인 파일을 받으면, 바로 에디터를 키고 코드를 작성하는 것이 아닌, 시멘틱하게 페이지 내부에서 구역을 분할한 뒤 작업을 진행하곤 합니다.\n\n항상 다양한 사용자의 접근을 기대하고 페이지를 제작합니다. 그에 따라서 웹 접근성 향상을 위한 노력을 항상 하고 있습니다. 스크린 리더기가 화면을 읽는 방식, img 태그 내부 alt 속성의 역할, Tab index의 역할, 클릭 가능한 요소들의 의미를 알고 있습니다.\n\n자주 사용하지 않는 태그들 iframe, dd, dl, dt 등에 대한 이해가 다소 부족해서 공부가 필요합니다."
    },
    {
      id: "css",
      spec: {
        src: Images.css,
        alt: "css"
      },
      proficiency: 70,
      checkedList: [
        "inline-style 사용법",
        "html태그에 스타일을 적용하는 방법",
        "태그 선택자, 클래스, id를 활용해 특정 요소에 스타일 적용하는 방법",
        "특정 html태그의 default 스타일 요소",
        "반응형 작업을 media query 사용법",
        "반응형 작업을 위한 rem 의 정확한 의미",
        "flexbox 에 대한 정확한 이해",
        "html태그에 애니매이션 효과를 적용하는 방법"
      ],
      description:
        "실무에서 디자이너분들과 협업한 경험이 많이 있습니다. 취미로 토이프로젝트를 진행했던 경우에는 생각했던 디자인을 기술의 부재로 구현하지 못해도 넘어가는 경우가 있었지만, 실제 컨펌된 디자인이기 때문에 정확하게 웹페이지 내 다양한 기기와 브라우저 환경속에서 구현해 낸 적이 있습니다.\n\n디자인을 보고 어떻게 스타일을 적용할지 구상을 할 수 있습니다. 구현만 하는 것이 아닌, 반복되는 작업을 줄이고 효율적으로 스타일링을 하기 위해서 노력합니다.\n\n제가 특정기능 및 효과를 pure css 로 구현하지 못한다면, 그 기능을 구현해주는 라이브러리 사용을 지양합니다. 라이브러리를 사용하면 사내 디자인팀의 요구를 정확하게 반영하지 못할 수도 있다고 생각합니다. 비즈니스 측면에서 약간 디자인을 수정해야하는데 라이브러리에서 특정 인터페이스를 제공해주지 않는 경우가 있기 때문입니다. 물론 업무의 효율성 및 생산성을 위해 적절한 근거가 뒷받침 되는 라이브러리 사용은 적극 지향합니다.\n\n남녀노소를 대상으로한 사이트를 서비스 함에 따라서 다양한 스펙트럼을 만족시킬 수 있는 스타일링을 해왔습니다. 그에 따라서 다양한 디바이스에서 사용이 원할하도록 반응형 작업을 할 수 있습니다.\n\n개인 특성상 grid로 사용가능한 디자인을 flex로 대체하는 경우가 많아서 grid에 대한 학습을 하려고 합니다. 또한 ::marker, @supports 등 새로운 css기술에 대한 학습이 필요합니다. "
    },
    {
      id: "javascript",
      spec: {
        src: Images.js,
        alt: "javascript"
      },
      proficiency: 80,
      checkedList: [
        "실무에서 사용되는 ES6 문법",
        "const 와 let의 차이점",
        "구조 분해 할당을 통한 코드의 가독성 향상",
        "돔(DOM) 조작",
        "배열을 다룰때에 forEach와 map과의 차이점",
        "이벤트 버블링과 캡쳐링을 방지하는 방법",
        "반복문 내부에서 비동기 처리를 동기적으로 처리하는 방법",
        "서버와의 API통신하는 방법"
      ],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "ts",
      spec: {
        src: Images.ts,
        alt: "ts"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "react",
      spec: {
        src: Images.react,
        alt: "react"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "react-native",
      spec: {
        src: Images.reactNative,
        alt: "react-native"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "NextJs",
      spec: {
        src: Images.nextJs,
        alt: "NextJs"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "webpack",
      spec: {
        src: Images.webpack,
        alt: "webpack"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "redux",
      spec: {
        src: Images.redux,
        alt: "redux"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "react-query",
      spec: {
        src: Images.reactQuery,
        alt: "react-query"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "styled-components",
      spec: {
        src: Images.styledComponents,
        alt: "styled-components"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "react-testing-library",
      spec: {
        src: Images.reactTestingLibrary,
        alt: "styled-components"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    }
  ],
  back: [
    {
      id: "django",
      spec: {
        src: Images.django,
        alt: "django"
      },
      proficiency: 85,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "nodejs",
      spec: {
        src: Images.nodejs,
        alt: "nodejs"
      },
      proficiency: 70,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "firebase",
      spec: {
        src: Images.firebase,
        alt: "firebase"
      },
      proficiency: 75,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "mysql",
      spec: {
        src: Images.mysql,
        alt: "mysql"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    }
  ],
  devOps: [
    {
      id: "aws",
      spec: {
        src: Images.aws,
        alt: "aws"
      },
      proficiency: 85,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "docker",
      spec: {
        src: Images.docker,
        alt: "docker"
      },
      proficiency: 70,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "jenkins",
      spec: {
        src: Images.jenkins,
        alt: "jenkins"
      },
      proficiency: 75,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "git",
      spec: {
        src: Images.git,
        alt: "git"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    }
  ],
  vcs: [
    {
      id: "vscode",
      spec: {
        src: Images.vscode,
        alt: "vscode"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "vscode2",
      spec: {
        src: Images.vscode,
        alt: "vscode"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    }
  ],
  etc: [
    {
      id: "vscode",
      spec: {
        src: Images.vscode,
        alt: "vscode"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "vscode1",
      spec: {
        src: Images.vscode,
        alt: "vscode"
      },
      proficiency: 90,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    }
  ]
};

export default skillList;
