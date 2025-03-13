import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  tiktok,
  alyak,
  facebook,
  openai,
  oracle,
  Nwitter,
  Instar,
  ArcGIS,
  GMap,
  Chomovie,
  NextMovie,
  ChoiceBook,
  TikTikClone,
  DALLEClone,
  SamilFood,
  Unknown,
  Sanghyun,
  MyBro,
  github,
  notion,
  slack,
  firebase,
  supabase,
  vercel,
  aws,
  styledComponents,
  Booker,
  ShareLife,
  CoupleThePl,
  BeatBridge,
  Zani,
  introduceTeam,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "내정보",
  },
  {
    id: "work",
    title: "커리 큘럼",
  },
  {
    id: "contact",
    title: "연락처",
  },
];

const services = [
  {
    title: "React 개발자",
    icon: web,
  },
  {
    title: "Next.js 개발자",
    icon: mobile,
  },
  {
    title: "TypeScript 개발자",
    icon: backend,
  },
  {
    title: "성능 최적화",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Styled Components",
    icon: styledComponents,
  },
  {
    name: "aws",
    icon: aws,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "supabase",
    icon: supabase,
  },
  {
    name: "vercel",
    icon: vercel,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "oracle",
    icon: oracle,
  },
  {
    name: "notion",
    icon: notion,
  },
  {
    name: "slack",
    icon: slack,
  },
];

const experiences = [
  {
    title: "내일배움캠프 부트캠프 수료",
    company_name: "JavaScript / React / Next.js",
    icon: tiktok,
    iconBg: "#383E56",
    date: "2023.09 - 2024.01",
    points: [
      "JavaScript와 React를 활용한 5~6개의 팀 프로젝트 수행",
      "React Query, Redux 등 실무 중심 라이브러리 학습 및 적용",
      "90명 이상의 사용자 피드백을 반영한 사이트 유지 보수 경험",
      "2회의 팀 리더 역할로 프로젝트 리딩 및 협업 역량 강화",
    ],
  },
  {
    title: "항해99 부트캠프 수료",
    company_name: "Next.js / 알고리즘(Python)",
    icon: alyak,
    iconBg: "#383E56",
    date: "2024.07 - 2024.10",
    points: [
      "Python을 활용한 알고리즘 문제풀이 (백준 골드4 달성)",
      "Next.js를 이용한 개인 프로젝트 수행 및 성능 최적화 (SSR, 이미지 최적화, 캐싱 관리 등)",
      "코드 품질 향상을 위한 중복 코드 제거 및 리팩토링",
      "높은 참여율과 적극적인 활동으로 상장 수여",
    ],
  },
  // {
  //   title: "AI 웹 애플리케이션 개발",
  //   company_name: "DALL-E",
  //   icon: openai,
  //   iconBg: "#E6DEDD",
  //   date: "2023.03 - 2023.04",
  //   points: [
  //     "Open AI 모델을 학습시켜, 사용자 쿼리에 따른 사진결과 반환 및 사용자 프롬프트 저장 학습",
  //     "학습 및 반환된 사진을 출력하여 1024 X 1024의 화질 JPEG 데이터를 저장하는 기능 구현",
  //     "커뮤니티를 생성하여, 특정 쿼리를 입력하여 반환된 이미지를 조회할 수 있는 기능을 제공",
  //     "URL을 주변 지인에게 공유하여, 학습 데이터 강화 및 정확한 정보를 추출할 수 있도록 학습",
  //   ],
  // },
  // {
  //   title: "Node.js 백엔드 개발",
  //   company_name: "facebook",
  //   icon: facebook,
  //   iconBg: "#E6DEDD",
  //   date: "2019. 12 - 2020.02",
  //   points: [
  //     "로그인 및 회원가입과 해당 유저의 로그인 기록을 유지하는 토큰을 생성하여 반환하는 백엔드 API 개발",
  //     "유저의 데이터 파일 (이미지, 동영상)을 변환하여 Base64 형태로 인코딩 된 URL을 저장하고 출력하는 API 개발",
  //     "커뮤니티를 생성하여 좋아요, 댓글 등 UNION Query 사용하여 다양한 테이블의 데이터를 조합하고 반환하는 API 개발",
  //     "유저 스토리 및 게시글 등 실시간 상호작용이 가능한 데이터를 보관하고, 유저 채팅을 Socket.io를 사용한 실시간 양방향 개발",
  //   ],
  // },
];

const testimonials = [
  {
    testimonial:
      "혼자 뭘 만들고 있는지는 모르겠는데, 어느새 보면 이상한걸 항상 만들어온다. 실질적으로 도움이 될지는 모르겠지만 요즘은 그래도 퀄리티가 괜찮아진듯",
    name: "김학X 멘토님",
    designation: "익명",
    company: "IT 아카데미",
    image: Unknown,
  },
  {
    testimonial:
      "열심히 노력하는 모습이 보기 좋습니다 ㅎㅎ 비록 같은 회사에서 일해보진 않았지만 항상 열심히 하는모습 응원해요~",
    name: "김상현님",
    designation: "JavaScript Mastery",
    company: "수강생",
    image: Sanghyun,
  },
  {
    testimonial:
      "아주 푸딩같은 녀석, 물론 이유는 없다. 이유도 있어야해? 안좋은 일이 생기면 탄력있게 튕겨낸다 해야하나",
    name: "김우혁",
    designation: "형",
    company: "가족",
    image: MyBro,
  },
  {
    testimonial:
      "극소수한테만 공개해서 아직 네명이나 못 보여줬습니다.. 학교에서 자랑하고 반응 있으면 추가할 예정",
    name: "절대 왕따 아님",
    designation: "오해",
    company: "하지마요",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Share Life",
    description:
      "사진으로 일상 생활을 공유하는 인스타그램을 기반으로 구현한 SNS 사이트이자 성능 최적화를 목표로 한 개인 사이드 프로젝트",
    tags: [
      {
        name: "Google Map",
        color: "blue-text-gradient",
      },
      {
        name: "VanilaJS",
        color: "green-text-gradient",
      },
      {
        name: "Road Map",
        color: "pink-text-gradient",
      },
    ],
    image: ShareLife,
    source_code_link: "https://github.com/gyugod-s-team/ShareLife-SNS-",
  },
  {
    name: "Booker",
    description:
      "도서소개, 맞춤추천, 커뮤니티, 중고거래, 독립서점을 전부 이용할 수 있는 팀 프로젝트",
    tags: [
      {
        name: "TS",
        color: "blue-text-gradient",
      },
      {
        name: "ReactJS",
        color: "green-text-gradient",
      },
      {
        name: "AWS S3",
        color: "pink-text-gradient",
      },
    ],
    image: Booker,
    source_code_link: "https://github.com/gyugod93/booker-aws",
  },
  {
    name: "커플더플(Couple the Place)",
    description:
      "친구나 애인끼리 가고 싶은 장소를 조합하여 각자만의 데이트 코스를 만드는 팀 프로젝트",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "FireBase",
        color: "green-text-gradient",
      },
      {
        name: "Redux-Toolkit",
        color: "pink-text-gradient",
      },
    ],
    image: CoupleThePl,
    source_code_link: "https://github.com/jjuhee/outsourcing-project",
  },
  {
    name: "BeatBridge(BB)",
    description: "음악 관련 다양한 소식 공유하는 팀 프로젝트",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
      {
        name: "Firebase",
        color: "green-text-gradient",
      },
      {
        name: "Redux",
        color: "pink-text-gradient",
      },
    ],
    image: BeatBridge,
    source_code_link: "https://github.com/dygmm4288/team-newsfeed",
  },
  {
    name: "Zani Movie",
    description:
      "TMDB 데이터 베이스를 기반으로 영화 확인 및 검색을 할 수 있도록 순수 바닐라 자바스크립트로 구현한 팀 프로젝트",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: Zani,
    source_code_link:
      "https://github.com/KANG0417/moviePage-Zani?tab=readme-ov-file",
  },
  {
    name: "introduce team",
    description:
      "첫 부트캠프 자기기 소개 팀 프로젝트",
    tags: [
      {
        name: "HTML5",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: introduceTeam,
    source_code_link:
      "https://github.com/kms99/IntroduceTeam",
  },
];

export { services, technologies, experiences, testimonials, projects };
