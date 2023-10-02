import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Icon,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
} from '@chakra-ui/react';
import { FaUserCircle } from 'react-icons/fa';
const TopNav = () => {
  return (
    <Box >
      <HStack h="16" justify="space-between" px="32px" maxW="80rem" mx="auto">
        <Heading fontWeight="medium" fontSize="28px">
          Dashboard
        </Heading>
        <Menu>
          <MenuButton as={Button} r>
            <Icon as={FaUserCircle} fontSize="24px" />
          </MenuButton>
          <MenuList>
            <MenuItem>Logout</MenuItem>
            <MenuItem>Support</MenuItem>
          </MenuList>
        </Menu>
      </HStack>
    </Box>
  );
};

export default TopNav;
