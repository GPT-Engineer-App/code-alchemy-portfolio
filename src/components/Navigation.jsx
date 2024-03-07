import { Flex, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navigation = () => {
  return (
    <Flex as="nav" gap="4" align="center" justify="center" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
      <Box p="2">
        <Link as={RouterLink} to="/">
          Home
        </Link>
      </Box>
      <Box p="2">
        <Link as={RouterLink} to="/blog">
          Blog
        </Link>
      </Box>
      <Box p="2">
        <Link as={RouterLink} to="/projects">
          Projects
        </Link>
      </Box>
    </Flex>
  );
};

export default Navigation;
