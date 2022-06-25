import Image, { ImageProps, StaticImageData } from "next/image";
import { useMemo } from "react";
import * as Styled from "./NImage.style";

interface NImageProps {
  width?: number;
  height?: number;
  src: string | StaticImageData;
  alt: string;
  center?: boolean;
  moWidth?: number | string;
  moHeight?: number;
  objectFit?: "contain" | "cover";
  scale?: number;
  fullWidth?: boolean;
  quality?: number;
  as?: keyof JSX.IntrinsicElements;
  position?: {
    type: "absolute" | "fixed";
    offset: {
      top?: number;
      right?: number;
      bottom?: number;
      left?: number;
    };
  };
  zIndex?: number;
  shadow?: {
    value: string;
    borderRadius: number;
  };
}

const NImage = ({
  width,
  height,
  src,
  alt,
  center,
  moHeight,
  moWidth,
  objectFit,
  scale,
  fullWidth,
  quality,
  as,
  position,
  zIndex,
  shadow
}: NImageProps) => {
  // type 은 next/image 에서 가져왔습니다.
  const ImageProps: ImageProps = useMemo(() => {
    return {
      src,
      quality: quality || 100,
      placeholder: "blur",
      objectFit: objectFit || "contain",
      blurDataURL:
        typeof src === "string"
          ? "https://user-images.githubusercontent.com/57122180/170612624-d289b783-46d6-4d4b-b3a0-9f490a1ccd7a.png"
          : undefined
    };
  }, [objectFit, quality, src]);

  return (
    <Styled.Container
      width={width}
      height={height}
      center={center}
      moWidth={moWidth}
      moHeight={moHeight}
      scale={scale}
      fullWidth={fullWidth}
      as={as}
      position={position}
      zIndex={zIndex}
    >
      {width && height ? (
        <Image {...ImageProps} layout="fill" alt={alt} />
      ) : (
        <Image {...ImageProps} alt={alt} />
      )}
      {shadow && <Styled.Shadow shadow={shadow} />}
    </Styled.Container>
  );
};

export default NImage;
