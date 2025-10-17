import React from "react";
import Chip from "./components/Chip";
const About = () => {
  const techStack = [
    "React",
    "Next.js",
    "TypeScript",
    "React Native",
    "TailwindCSS",
    "MUI",
    "Styled-Components",
  ];
  return (
    <div>
      <section className="max-w-3xl mx-auto px-6 py-16 text-center">
        <div className="flex flex-col items-center">
          <div className="w-60 h-60 flex justify-center rounded-full overflow-hidden">
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="w-full h-full shadow-lg object-cover object-[center_30%]"
            />
          </div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <p className="mb-4">
            저는 사용자 경험을 개선하고, 효율적인 코드를 고민하며 협업을
            중시하는 프론트엔드 개발자입니다.
          </p>
          <p className="mb-6">
            네오아리아에서 1년 4개월간 근무하며 한국관광 콘텐츠랩의 유지보수 및
            개발을 수행하였습니다.
            <br /> 기존 한국관광콘텐츠랩의 코드를 개선하여 가독성 및 코드관리
            효율을 높였습니다. <br />
            (콘텐츠랩 메인페이지, 시즌2 페이지, 개발자센터 페이지, kto-rms
            페이지)
            <br />
            <br /> 콘텐츠랩의 시즌2 페이지를 개발하며 콘텐츠랩에서 제공하는
            기능을 효율적으로 사용할 수 있는 video, image, modal 등의 컴포넌트를
            개발하였습니다.
            <br />
            <br />
            CA(conlab-analytics)페이지를 제작하며 콘텐츠랩의 방문자수와
            실사용자들의 컨텐츠 생성횟수를 분석하여 차트를 제작하였고,
            <br /> kakaomap을 통해 컨텐츠를 지역별로 나누어 사용자에게 보여줄 수
            있도록 제작하였습니다.
            <br />
            <br />
            실제 사용중인 콘텐츠랩의 컴포넌트를 콘텐츠랩 사용자들에게
            제공하기위해 컴포넌트를 패키징하여 npm에 배포한 경험이 있습니다.{" "}
            <br />
            <br />
            콘텐츠랩의 최신관광콘텐츠 페이지를 무한스크롤, masonry를 사용하여
            제작했으며 이미지 로딩개선을위해 캐시저장기능을 활용했습니다.
            <br />
            콘텐츠 클릭시 제공되는 모달창을 제작하였습니다.
            <br />
            <br />
            <br />
            React.js, Next.js, TailwindCSS 등 다양한 기술을 활용하며 성능과
            가독성을 고려한 개발을 지향합니다.
          </p>
        </div>
        <div className="grid grid-cols-5 gap-4 mt-8 justify-center">
          {techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
