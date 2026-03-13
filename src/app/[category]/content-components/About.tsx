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

  const experience = [
    "저는 단순히 화면을 구현하는 것을 넘어, 서비스가 확장될 때 유지보수가 무너지지 않는 구조를 고민하는 프론트엔드 개발자입니다.",
    "React와 TypeScript 기반으로 실제 운영 서비스의 유지보수와 신규 기능 개발을 경험하며, 콘텐츠 유형이 늘어나면서 복잡해지는 조건 분기와 렌더링 구조를 정리하는 작업을 해왔습니다.",
    "Dynamic Rendering 구조 안정화 작업, 공통 컴포넌트의 NPM 패키지화, Storybook 기반 컴포넌트 검증 환경 구축 등을 통해 기능 구현뿐 아니라 개발 생산성과 확장성을 함께 개선하는 방향으로 개발해왔습니다.",
    "문제가 발생했을 때 바로 코드를 수정하기보다 원인의 범위를 좁히고 흐름을 추적하며 해결하는 과정을 중요하게 생각하며, 이러한 경험을 통해 구조를 이해하고 안정적으로 확장할 수 있는 프론트엔드를 만드는 것을 목표로 하고 있습니다.",
  ];

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
        <Grid size={{ xs: 12, md: 12 }}>
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
