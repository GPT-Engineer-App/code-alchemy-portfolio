import { Box, Container, Heading, SimpleGrid, Text, VStack, Link, IconButton, useColorMode, useColorModeValue, Image, Badge } from "@chakra-ui/react";
import { FaGithub, FaSun, FaMoon, FaExternalLinkAlt } from "react-icons/fa";

const blogArticles = [
  // Dummy blog articles data
  { title: "Understanding Kubernetes", description: "An overview of K8s architecture...", link: "#" },
  { title: "CI/CD Best Practices", description: "How to streamline your deployment...", link: "#" },
  { title: "Deploying Microservices", description: "A complete guide for deploying microservices with Docker", link: "#" },
  { title: "Monitoring with Prometheus", description: "Learn how to monitor your applications with Prometheus", link: "#" },
  { title: "The Art of Command Line", description: "Master the command line with these essential tips", link: "#" },
  { title: "Infrastructure as Code", description: "An introduction to managing infrastructure using code", link: "#" },
  { title: "Serverless Architectures", description: "Understanding the benefits and challenges of serverless", link: "#" },
  { title: "Database Scaling Strategies", description: "Techniques for scaling databases horizontally and vertically", link: "#" },
  { title: "Edge Computing Basics", description: "Exploring the world of edge computing", link: "#" },
  { title: "Implementing CI Pipelines", description: "Step-by-step guide to implementing continuous integration pipelines", link: "#" },
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
        // Blog Articles and Open Source Projects sections have been moved to their own components
        <Heading as="h2" size="xl" mt={10} mb={6}>
          About Me
        </Heading>
        <Text fontSize="lg" mb={6}>
          Passionate Cloud Engineer with expertise in Site Reliability Engineering and DevOps practices. I enjoy automating cloud infrastructure and optimizing system performance.
        </Text>
        <Heading as="h2" size="xl" mt={10} mb={6}>
          Tech Stack
        </Heading>
        <SimpleGrid columns={{ base: 2, md: 4, lg: 6 }} spacing={4} mb={6}>
          <Text textAlign="center">Docker</Text>
          <Text textAlign="center">Kubernetes</Text>
          <Text textAlign="center">Terraform</Text>
          <Text textAlign="center">AWS</Text>
          <Text textAlign="center">Prometheus</Text>
          <Text textAlign="center">Grafana</Text>
        </SimpleGrid>
        <Heading as="h2" size="xl" mt={10} mb={6}>
          GitHub Stats
        </Heading>
        <Image src="https://github-readme-stats.vercel.app/api?username=GirishCodeAlchemy&show_icons=true" alt="GitHub Stats" mb={6} />
        <Heading as="h2" size="xl" mt={10} mb={6}>
          Certifications
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
          <Box shadow="md" borderWidth="1px" p={4}>
            <Text textAlign="center">AWS Certified Solutions Architect</Text>
          </Box>
          <Box shadow="md" borderWidth="1px" p={4}>
            <Text textAlign="center">Certified Kubernetes Administrator</Text>
          </Box>
          <Box shadow="md" borderWidth="1px" p={4}>
            <Text textAlign="center">Terraform Associate Certification</Text>
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
};

export default Index;
