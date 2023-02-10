import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { GiHamburger, GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Flex border={"1px solid red"} justifyContent={"space-between"} px={"5"}>
      <Heading>Logo</Heading>
      <HStack display={{ base: "none", md: "flex" }}>
        <Text>Home</Text>
        <Text>About</Text>
        <Text>Login</Text>
      </HStack>
      <Button
        bgColor={"purple.700"}
        display={{ base: "block", md: "none" }}
        _hover={{ bgColor: "purple.400" }}
      >
        <Menu>
          <MenuButton as={"Button"} onClick={onOpen}>
            <GiHamburgerMenu />
          </MenuButton>
          <MenuList>
            <MenuItem>Home</MenuItem>
            <MenuItem>About</MenuItem>
            <MenuItem>Login</MenuItem>
          </MenuList>
        </Menu>
      </Button>
    </Flex>
  );
};

export default Navbar;
