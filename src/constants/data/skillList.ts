import * as Images from "@images/skill";

const skillList: {
  front: Skill.SkillType[];
  back: Skill.SkillType[];
  devOps: Skill.SkillType[];
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
    }
  ],
  back: [
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
    }
  ],
  devOps: [
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
    }
  ]
};

export default skillList;
