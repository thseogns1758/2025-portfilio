import { ProjectType } from "./type";

export const projects: ProjectType = [
  {
    year: "2025",
    list: [
      {
        id: 1,
        url: "https://sondhoon-portfolio.netlify.app/",
        src: "/images/portfolio.png",
        alt: "portfolio",
        title: "portfolio",
        description:
          "2025년 기준으로 제작중인 포트폴리오 페이지입니다. 여러 작업과 함께 진행중입니다.",
      },
    ],
  },
  {
    year: "2023",
    list: [
      {
        id: 1,
        url: "https://daehoonportfolio.netlify.app/",
        src: "/images/windowPj.png",
        alt: "window",
        title: "window-portfolio",
        description:
          "윈도우 화면에서 영감을 받아 제작한 포트폴리오 사이트입니다. 내정보, 내기술, 내프로젝트 등으로 구성되어 있으며 다양한 기능을 구현하기위해 노력했습니다.",
      },
      {
        id: 2,
        url: "https://sondaehoonflix.netlify.app/",
        src: "/images/netflix.png",
        alt: "netflix",
        title: "netflix-project",
        description:
          "넷플릭스화면을 가져온 영화 소개 사이트, 실제 상영영화의 db를 사용하여 영화정보를 가져오도록 제작하였습니다.",
      },
      {
        id: 3,
        url: "https://thseogns.github.io/pf1/",
        src: "/images/binggrae.png",
        alt: "binggrae",
        title: "binggrae-project",
        description:
          "빙그레 페이지를 따라만든 토이프로젝트 입니다. 메인페이지만 제작되었습니다.",
      },
      {
        id: 4,
        url: "https://thseogns.github.io/tire/",
        src: "/images/tire.png",
        alt: "tire",
        title: "tire-project",
        description:
          "타이어테크 페이지를 따라만든 토이프로젝트 입니다. 메인페이지만 제작되었습니다.",
      },
    ],
  },
];
