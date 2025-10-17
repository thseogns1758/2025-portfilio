import React from "react";
import Chip from "./components/Chip";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import "./about.css";

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

  const experience = [
    "네오아리아에서 1년 4개월간 근무하며 한국관광 콘텐츠랩의 유지보수 및 개발을 수행하였습니다.",

    "기존 한국관광콘텐츠랩의 코드를 개선하여 가독성 및 코드관리 효율을 높였습니다. (콘텐츠랩 메인페이지, 시즌2 페이지, 개발자센터 페이지, kto-rms 페이지)",

    "콘텐츠랩의 시즌2 페이지를 개발하며 콘텐츠랩에서 제공하는 기능을 효율적으로 사용할 수 있는 video, image, modal 등의 컴포넌트를 개발하였습니다.",

    "CA(conlab-analytics)페이지를 제작하며 콘텐츠랩의 방문자수와 실사용자들의 컨텐츠 생성횟수를 분석하여 차트를 제작하였고, kakaomap을 통해 컨텐츠를 지역별로 나누어 사용자에게 보여줄 수 있도록 제작하였습니다.",

    "실제 사용중인 콘텐츠랩의 컴포넌트를 콘텐츠랩 사용자들에게 제공하기위해 컴포넌트를 패키징하여 npm에 배포한 경험이 있습니다.",

    "콘텐츠랩의 최신관광콘텐츠 페이지를 무한스크롤, masonry를 사용하여 제작했으며 이미지 로딩개선을위해 캐시저장기능을 활용했습니다. 콘텐츠 클릭시 제공되는 모달창을 제작하였습니다.",

    "React.js, Next.js, TailwindCSS 등 다양한 기술을 활용하며 성능과 가독성을 고려한 개발을 지향합니다.",
  ];

  return (
    <Box sx={{ p: 4, backgroundColor: "#f0f8ff", borderRadius: "16px" }}>
      <Typography variant="h4" align="center" gutterBottom>
        About Me
      </Typography>

      <Typography paragraph align="center">
        저는 사용자 경험을 개선하고, 효율적인 코드를 고민하며 협업을 중시하는
        프론트엔드 개발자입니다.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 4 }}>
          <Box className="about-image-container" sx={{ textAlign: "center" }}>
            <img
              src="/profile.jpeg"
              alt="Profile"
              className="rounded-full"
              style={{ width: 220, height: 220 }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>

          <Typography>Email: thseo1758@naver.com</Typography>

          <Typography>Phone: 010-7599-1758</Typography>

          <Typography>
            GitHub:{" "}
            <a href="https://github.com/thseogns1758">
              https://github.com/thseogns1758
            </a>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>

          <Box className="grid grid-cols-2 gap-2">
            {techStack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 6 }}>
          <Typography variant="h5" gutterBottom>
            Experience
          </Typography>

          <ul>
            {experience.map((exp, index) => (
              <li key={index} style={{ marginBottom: "12px" }}>
                {exp}
              </li>
            ))}
          </ul>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
