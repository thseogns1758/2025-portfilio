import React from "react";
import Chip from "./components/Chip";
import { Box, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import ImageWithSkeleton from "./components/ImageWithComponent";
import "./about.css";
import { useMediaQuery } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

const About = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const techStack = ["React", "Next.js", "TS"];

  // const experience = [
  //   "네오아리아에서 약 1년 4개월간 근무하며 한국관광콘텐츠랩 서비스의 유지보수와 신규 기능 개발을 담당했습니다. 메인 페이지를 비롯해 시즌2 페이지, 개발자센터, KTO-RMS 페이지 등 주요 화면을 개선하며 기존 코드의 구조를 정리하고 가독성과 유지보수성을 높이는 작업을 진행했습니다.",

  //   "콘텐츠랩 시즌2 페이지 개발 과정에서는 서비스 전반에서 반복적으로 사용되는 기능을 정리해 Video, Image, Modal 등 공용 컴포넌트를 설계·개발했으며, 이를 통해 화면 구성의 일관성을 유지하고 개발 효율을 개선했습니다. 이후 실제 서비스에서 사용 중인 컴포넌트를 패키징하여 npm에 배포함으로써 내부 사용자뿐만 아니라 콘텐츠랩 이용자들도 활용할 수 있도록 제공한 경험이 있습니다.",

  //   "또한 CA(conlab-analytics) 페이지를 제작하며 방문자 수와 사용자 콘텐츠 생성 데이터를 기반으로 다양한 차트를 구현했고, Kakao Map API를 연동해 콘텐츠를 지역별로 시각화하여 사용자 이해도를 높였습니다. 최신 관광 콘텐츠 페이지에서는 무한 스크롤과 Masonry 레이아웃을 적용해 콘텐츠 탐색 경험을 개선했으며, 이미지 로딩 성능을 높이기 위해 캐시 저장 방식을 활용하고 콘텐츠 클릭 시 노출되는 모달 UI를 직접 구현했습니다.",

  //   "이러한 경험을 통해 React와 Next.js 기반의 서비스 환경에서 성능과 가독성, 그리고 사용자 경험을 함께 고려하는 개발 방식을 익혔으며, Tailwind CSS 등 다양한 도구를 활용해 유지보수하기 쉬운 UI를 구현하는 데 집중해왔습니다.",
  // ];

  return (
    <Box
      sx={{
        p: 4,
        backgroundColor: "rgba(255, 228, 212, 1)",
        borderRadius: "16px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom pt={8} pb={2}>
        About Me
      </Typography>

      <Typography paragraph align="center" pb={2}>
        프론트엔드 개발자
        <br /> <strong>손대훈</strong>입니다.
      </Typography>

      <Grid container spacing={4} justifyContent="center" sx={{ mt: 4 }}>
        <Grid className="flex justify-center" size={{ xs: 12, md: 4 }}>
          <Box className="about-image-container" sx={{ textAlign: "center" }}>
            <ImageWithSkeleton
              src="/profile.jpeg"
              alt="Profile"
              width={250}
              height={250}
              fill={false}
              skeletonVariant="circular"
              containerStyle={{
                margin: "0 auto",
                borderRadius: "50%",
                overflow: "hidden",
              }}
              style={{
                borderRadius: "50%",
              }}
            />
          </Box>
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <Typography variant="h5" gutterBottom>
            Contact Information
          </Typography>

          <Typography>Email: thseo1758@naver.com</Typography>

          <Typography>Phone: 010-7599-1758</Typography>

          <Typography sx={{ display: "flex", alignItems: "center" }}>
            GitHub:
            <Box>
              {isMobile ? (
                <a href="https://github.com/thseogns1758" target="_blank">
                  <GitHubIcon />
                </a>
              ) : (
                <a href="https://github.com/thseogns1758" target="_blank">
                  https://github.com/thseogns1758
                </a>
              )}
            </Box>
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={4} sx={{ mt: 4 }}>
        {/* <Grid size={{ xs: 12, md: 12 }}>
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
        </Grid> */}
        <Grid size={{ xs: 12, md: 12 }}>
          <Typography variant="h5" gutterBottom>
            Skills
          </Typography>

          <Box className="grid grid-cols-2 gap-2">
            {techStack.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default About;
