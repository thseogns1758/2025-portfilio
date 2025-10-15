import src from "@emotion/styled";
import { ProjectType } from "./type";

export const projects: ProjectType = [
  {
    year: "2025",
    list: [
      {
        id: 1,
        url: "https://sondhoon-portfolio.netlify.app/",
        qrUrl: "",
        src: "/images/portfolio.png",
        alt: "portfolio",
        title: "portfolio",
        description:
          "2025년 기준으로 제작중인 포트폴리오 페이지입니다. 여러 작업과 함께 진행중입니다.",
      },
      {
        id: 2,
        url: "https://expo.dev/accounts/sondaehun/projects/minigame/builds/807cdccc-c9c6-49ca-b399-ed263fe360b6",
        qrUrl: "/images/gameQR.png",
        src: "/images/game.png",
        alt: "game",
        title: "game-project",
        description:
          "ReactNative를 사용하여 제작한 게임 프로젝트입니다. 숫자를 랜덤으로 설정하고 그 숫자를 맞추게하는 로직을 구현했습니다. 게임이 끝나고나면 클리어까지 소요된 라운드와 정답을 알려줍니다.\n\n 아래 링크를 통해 다운받거나 QR코드를 통해 실행할 수 있습니다.",
      },
    ],
  },
  {
    year: "2023",
    list: [
      {
        id: 1,
        url: "https://daehoonportfolio.netlify.app/",
        qrUrl: "",
        src: "/images/windowPj.png",
        alt: "window",
        title: "window-portfolio",
        description:
          "윈도우 화면에서 영감을 받아 제작한 포트폴리오 사이트입니다. 내정보, 내기술, 내프로젝트 등으로 구성되어 있으며 다양한 기능을 구현하기위해 노력했습니다.",
      },
      {
        id: 2,
        url: "https://sondaehoonflix.netlify.app/",
        qrUrl: "",
        src: "/images/netflix.png",
        alt: "netflix",
        title: "netflix-project",
        description:
          "넷플릭스화면을 가져온 영화 소개 사이트, 실제 상영영화의 db를 사용하여 영화정보를 가져오도록 제작하였습니다.",
      },
      {
        id: 3,
        url: "https://thseogns.github.io/pf1/",
        qrUrl: "",
        src: "/images/binggrae.png",
        alt: "binggrae",
        title: "binggrae-project",
        description:
          "빙그레 페이지를 따라만든 토이프로젝트 입니다. 메인페이지만 제작되었습니다.",
      },
      {
        id: 4,
        url: "https://thseogns.github.io/tire/",
        qrUrl: "",
        src: "/images/tire.png",
        alt: "tire",
        title: "tire-project",
        description:
          "타이어테크 페이지를 따라만든 토이프로젝트 입니다. 메인페이지만 제작되었습니다.",
      },
    ],
  },
];
