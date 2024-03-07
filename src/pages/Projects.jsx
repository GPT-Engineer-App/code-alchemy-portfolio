import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";

const openSourceProjects = [
  { name: "CloudInfra", description: "A toolkit for managing cloud infrastructure", link: "https://github.com/GirishCodeAlchemy/CloudInfra" },
  { name: "SREToolkit", description: "Site Reliability Engineering tools", link: "https://github.com/GirishCodeAlchemy/SREToolkit" },
];

function Projects() {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1">Open Source Projects</Heading>
        {openSourceProjects.map((project, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              {project.name}
            </Heading>
            <Text mt={4}>{project.description}</Text>
            <Link href={project.link} isExternal>
              <FaGithub /> View on GitHub
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Projects;
