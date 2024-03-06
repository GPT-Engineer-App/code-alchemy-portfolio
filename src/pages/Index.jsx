import { Box, Container, Heading, SimpleGrid, Text, VStack, Link, IconButton, useColorMode, useColorModeValue, Image, Badge } from "@chakra-ui/react";
import { FaGithub, FaSun, FaMoon, FaExternalLinkAlt } from "react-icons/fa";

const blogArticles = [
  // Dummy blog articles data
  { title: "Understanding Kubernetes", description: "An overview of K8s architecture...", link: "#" },
  { title: "CI/CD Best Practices", description: "How to streamline your deployment...", link: "#" },
  // ... add more blog articles here
];

const openSourceProjects = [
  // Dummy open source projects data
  { name: "CloudInfra", description: "A toolkit for managing cloud infrastructure", link: "https://github.com/GirishCodeAlchemy/CloudInfra" },
  { name: "SREToolkit", description: "Site Reliability Engineering tools", link: "https://github.com/GirishCodeAlchemy/SREToolkit" },
  // ... add more open source projects here
];

const Index = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.800");
  const color = useColorModeValue("black", "white");

  return (
    <Box bg={bgColor} color={color} minH="100vh">
      <Container maxW="container.xl" p={4}>
        <VStack spacing={4} as="header">
          <IconButton aria-label="Toggle dark mode" icon={colorMode === "light" ? <FaMoon /> : <FaSun />} onClick={toggleColorMode} alignSelf="flex-end" />
          <Image borderRadius="full" boxSize="150px" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxHaXJpc2glMjBWJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzA5NzQ2NzIyfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Girish V" />
          <Heading>Girish V</Heading>
          <Text as="p" fontSize="lg">
            Cloud Engineer | SRE | DevOps Advocate | Creator of GirishCodeAlchemy
          </Text>
        </VStack>

        <Heading as="h2" size="xl" mt={10} mb={6}>
          Blog Articles
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {blogArticles.map((article, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{article.title}</Heading>
              <Text mt={4}>{article.description}</Text>
              <Link href={article.link} isExternal>
                Read more <FaExternalLinkAlt />
              </Link>
            </Box>
          ))}
        </SimpleGrid>

        <Heading as="h2" size="xl" mt={10} mb={6}>
          Open Source Projects
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
          {openSourceProjects.map((project, index) => (
            <Box key={index} p={5} shadow="md" borderWidth="1px">
              <Heading fontSize="xl">{project.name}</Heading>
              <Text mt={4}>{project.description}</Text>
              <Link href={project.link} isExternal>
                <IconButton aria-label="GitHub link" icon={<FaGithub />} mr={2} />
              </Link>
              <Badge colorScheme="green">Open Source</Badge>
            </Box>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
