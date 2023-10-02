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
import { FaUserCircle, FaBars } from 'react-icons/fa';
const TopNav = ({ title, onOpen }) => {
  return (
    <Box px="4">
      <HStack h="16" justify="space-between" maxW="70rem" mx="auto">
        <Icon
          as={FaBars}
          onClick={onOpen}
          display={{
            base: 'block',
            lg: 'none',
          }}
        />
        <Heading fontWeight="medium" fontSize="28px">
          {title}
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
