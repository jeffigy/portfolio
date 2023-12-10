import { Button, Card, Input, Stack, Textarea } from "@chakra-ui/react";
import CustomSection from "./CustomSection";
import { motion } from "framer-motion";
import { useSectionInView } from "lib/hooks";
import { GrSend } from "react-icons/gr";
const Contact = () => {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      ref={ref}
      id="contact"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <CustomSection sectionTitle="Contact" sectionName="contact" minH="600px">
        <Card p={"20px"} w={[300, 400, 500]}>
          <form
            method="Post"
            action="https://getform.io/f/7fbfb199-280e-44d8-b4f8-ef09e25d8ed6"
          >
            <Stack spacing={4} w={"full"}>
              <Input
                size={"lg"}
                name="name"
                placeholder="Name"
                type="string"
                isRequired
              />
              <Input
                size={"lg"}
                name="Email"
                placeholder="email"
                type="email"
                isRequired
              />
              <Textarea
                size={"lg"}
                focusBorderColor="teal"
                name="message"
                placeholder="Message"
                rows={5}
              />
              <Button
                size={"lg"}
                color={"white"}
                type="submit"
                borderRadius={"full"}
                rightIcon={<GrSend />}
              >
                {" "}
                Get in Touch
              </Button>
            </Stack>
          </form>
        </Card>
      </CustomSection>
    </motion.section>
  );
};
export default Contact;
