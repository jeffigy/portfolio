import { Flex, Text } from "@chakra-ui/react";
import React from "react";

type CustomSectionProps = {
  children?: React.ReactNode;
  sectionTitle?: string;
  sectionName: string;
};

const CustomSection: React.FC<CustomSectionProps> = ({
  children,
  sectionName,
  sectionTitle,
}) => {
  return (
    <div id={sectionName}>
      <Flex
        direction={"column"}
        align={"center"}
        minH={"calc(100vh - 56px)"}
        mb={{ base: "50px", md: "100px" }}
      >
        {sectionTitle && (
          <Text
            zIndex={1}
            fontSize={{ base: "24px", md: "32px" }}
            fontWeight={"semibold"}
            color={"gray.500"}
          >
            {sectionTitle}
          </Text>
        )}
        {children}
      </Flex>
    </div>
  );
};
export default CustomSection;
