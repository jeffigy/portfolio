import { Image as ChakraImage, SkeletonCircle } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

type PreloadAndLazyLoadImageProps = {
  src: string;
  alt: string;
};

const PreloadAndLazyLoadImage: React.FC<PreloadAndLazyLoadImageProps> = ({
  src,
  alt,
}) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = src;

    img.onload = () => {
      setLoaded(true);
    };

    img.onerror = () => {
      setLoaded(true);
    };

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [src]);
  return (
    <>
      {loaded ? (
        <ChakraImage
          as={LazyLoadImage}
          mb={{ base: "15px", md: "30px" }}
          borderRadius={"full"}
          boxSize={{
            base: "170px",
            sm: "180px",
            md: "190px",
            lg: "200px",
            xl: "210px",
          }}
          alt={alt}
          src={src}
        />
      ) : (
        <SkeletonCircle
          boxSize={{
            base: "170px",
            sm: "180px",
            md: "190px",
            lg: "200px",
            xl: "210px",
          }}
          mb={{ base: "15px", md: "30px" }}
        />
      )}
    </>
  );
};
export default PreloadAndLazyLoadImage;
