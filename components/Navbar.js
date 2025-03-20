import React from "react";
import { Box, Flex, Input, Button, IconButton,Text } from "@chakra-ui/react";
import { MdSearch } from "react-icons/md";
import { useState } from "react";
import { BsChevronRight,BsChevronDown } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";
import {
  MenuItem
} from '@chakra-ui/react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure
  } from '@chakra-ui/react'
  import { Divider } from '@chakra-ui/react'

  import {
    Menu,
    MenuButton,
    MenuList,
  } from '@chakra-ui/react'

const Navbar = () => {
  return (
    <>
     <Flex position={'fixed'} zIndex={999} bg={'white'} boxShadow={'md'} borderBottom={'1px solid lightgray'} gap={'25px'} alignItems="center" justifyContent={'right'} w={'100vw'} h={'53px'} pr={'20px'}>
        {/* Logo */}
        <Box mr={'auto'} w={'50px'} h={'100%'}>
          <Link href={'/'}>
         <Image alt="sample" src='/jyot_logo.png' width={1000} height={1000} style={{width:"100%",height:"auto"}} />
         </Link>
          </Box>
      
              <Menu>
      <MenuButton
        textTransform={"uppercase"}  fontFamily={"Oswald, sans-serif"}
        color="black"
        _hover={{ textDecoration: "none", color: "orange" }}
        as={Button}
        rightIcon={<BsChevronDown />}
        fontWeight={'light'}
        bg={'none'}
      >
        About
      </MenuButton>
      <MenuList shadow={"lg"}>
        <MenuItem  textTransform={"uppercase"}  fontFamily={"Oswald, sans-serif"}
            color="black"
            _hover={{ textDecoration: "none", color: "orange" }}>
          <Link
           
            href="/about"
           
          >
            About
          </Link>
        </MenuItem>
        <MenuItem textTransform={"uppercase"}  fontFamily={"Oswald, sans-serif"}
            color="black"
            _hover={{ textDecoration: "none", color: "orange" }}>
          <Link
            href="/h-h-spiritual-sovereign-jainacharya-yugbhushansuriji-maharaja"
          >
            Our visionary
          </Link>
        </MenuItem>
        <MenuItem textTransform={"uppercase"}  fontFamily={"Oswald, sans-serif"}
            color="black"
            _hover={{ textDecoration: "none", color: "orange" }}>
          <Link
            href="/conclave-2022"
          >
            Conclave 2022
          </Link>
        </MenuItem>
        <MenuItem textTransform={"uppercase"}  fontFamily={"Oswald, sans-serif"}
            color="black"
            _hover={{ textDecoration: "none", color: "orange" }}>
          <Link
            href="/conclave-2023"
          >
            Conclave 2023
          </Link>
        </MenuItem>
      </MenuList>
    </Menu>    
          <Link className={styles.nextlink} textTransform={"uppercase"} href="/podcast" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
          Podcast
          </Link>
          <Link className={styles.nextlink} textTransform={"uppercase"} href="/letters-of-jainacharya-on-world-order" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
            Letters
          </Link>
          <Link className={styles.nextlink} textTransform={"uppercase"} href="/contact" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
            Contact
          </Link>
</Flex>
      </>
  );
};

export default Navbar;
