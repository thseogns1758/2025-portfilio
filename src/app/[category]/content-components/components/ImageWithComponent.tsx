import React, { useState } from "react";
import { Box, Skeleton } from "@mui/material";
import Image from "next/image";

interface ImageWithSkeletonProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
  objectPosition?: string;
  skeletonVariant?: "rectangular" | "circular" | "rounded" | "text";
  skeletonComponent?: React.ReactNode;
  style?: React.CSSProperties;
  containerStyle?: React.CSSProperties;
  className?: string;
  onClick?: () => void;
  onLoadComplete?: () => void;
  onError?: () => void;
}

const ImageWithSkeleton: React.FC<ImageWithSkeletonProps> = ({
  src,
  alt,
  fill = true,
  width,
  height,
  objectFit = "cover",
  objectPosition = "center",
  skeletonVariant = "rectangular",
  skeletonComponent,
  style,
  containerStyle = { width: "100%", height: "100%" },
  className,
  onClick,
  onLoadComplete,
  onError,
}) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
    onLoadComplete?.();
  };

  const handleError = () => {
    setIsLoading(false);
    onError?.();
  };

  return (
    <Box
      sx={{
        position: "relative",

        ...containerStyle,
      }}
      className={className}
      onClick={onClick}
    >
      {/* 커스텀 스켈레톤 또는 기본 스켈레톤 */}
      {isLoading &&
        (skeletonComponent || (
          <Skeleton
            variant={skeletonVariant}
            width="100%"
            height="100%"
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 1,
            }}
          />
        ))}

      <Image
        src={src}
        alt={alt}
        fill={fill}
        width={width}
        height={height}
        style={{
          objectFit,
          objectPosition,
          opacity: isLoading ? 0 : 1,
          transition: "opacity 0.3s ease-in-out",
          ...style,
        }}
        onLoadingComplete={handleLoad}
        onError={handleError}
      />
    </Box>
  );
};

export default ImageWithSkeleton;
