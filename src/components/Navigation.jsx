import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" gap="4" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500">
      <Box p="2">
        <Link as={RouterLink} to="/" style={{ textDecoration: "none" }}>
          Home
        </Link>
      </Box>
      <Box p="2">
        <Link as={RouterLink} to="/blog" style={{ textDecoration: "none" }}>
          Blog
        </Link>
      </Box>
      <Box p="2">
        <Link as={RouterLink} to="/projects" style={{ textDecoration: "none" }}>
          Projects
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
