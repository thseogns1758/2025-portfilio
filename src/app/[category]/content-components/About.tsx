import React from "react";
import Chip from "./components/Chip";
const About = () => {
  const techStack = [
    "React",
    "Next.js",
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
            한국관광공사 웹사이트 제작 및 유지보수에 참여하며 이미지 캐시 처리로
            로딩 속도를 평균 3초 단축시켜 UX 향상에 기여했습니다.
            <br />
            React.js, Next.js, TailwindCSS 등 다양한 기술을 활용하며 성능과
            가독성을 고려한 개발을 지향합니다.
          </p>
        </div>
        <div className="flex justify-center gap-4 mt-8">
          {techStack.map((tech) => (
            <Chip key={tech}>{tech}</Chip>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
