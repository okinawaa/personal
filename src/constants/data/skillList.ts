import * as Images from "@images/skill";

const skillList: {
  front: Skill.SkillType[];
  back: Skill.SkillType[];
  devOps: Skill.SkillType[];
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
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "css",
      spec: {
        src: Images.css,
        alt: "css"
      },
      proficiency: 70,
      checkedList: ["마크업", "시멘틱", "구조"],
      description:
        "개잘합니다.ㅁㄴㅇ.ㅁㅇ.ㅁㄴ.ㅇㅁㄴ.ㅇㅁ.ㅇㅁ.ㅇㅁㄴ.ㅇㅁ.ㅇ.ㅁㄴㅇㄴㅁ.ㅇ.ㅁㄴㅇ.ㅁ"
    },
    {
      id: "js",
      spec: {
        src: Images.js,
        alt: "js"
      },
      proficiency: 75,
      checkedList: ["마크업", "시멘틱", "구조"],
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
    }
  ]
};

export default skillList;
