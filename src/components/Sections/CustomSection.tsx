import { Flex, Text, VStack } from "@chakra-ui/react";
import React from "react";

type CustomSectionProps = {
  children?: React.ReactNode;
  sectionTitle?: string;
  sectionName: string;
  minH: string;
};

const CustomSection: React.FC<CustomSectionProps> = ({
  children,
  sectionName,
  sectionTitle,
  minH,
}) => {
  return (
    <div id={sectionName}>
      <Flex direction={"column"} align={"center"} minH={minH}>
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
        <Flex align={"center"} justify={"center"} w={"full"} flexGrow={1}>
          <VStack spacing={10}>{children}</VStack>
        </Flex>
      </Flex>
    </div>
  );
};
export default CustomSection;
