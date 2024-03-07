import { Box, Heading, Text, Link, VStack } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const blogArticles = [
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

function Blog() {
  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1">Blog Articles</Heading>
        {blogArticles.map((article, index) => (
          <Box key={index} p={5} shadow="md" borderWidth="1px">
            <Heading as="h3" size="lg">
              {article.title}
            </Heading>
            <Text mt={4}>{article.description}</Text>
            <Link href={article.link} isExternal>
              Read more <FaExternalLinkAlt />
            </Link>
          </Box>
        ))}
      </VStack>
    </Box>
  );
}

export default Blog;
