import React, { useState } from "react";
import { Box, Flex, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, VStack, Image } from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import { Input } from "@chakra-ui/react";
import MusicPlayer from "../MusicPlayer";
import Link from "next/link";
import styles from '@/styles/Home.module.css'
import { useRouter } from "next/router";

import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'


import { SiYoutubeshorts } from "react-icons/si";
import { BsYoutube } from "react-icons/bs";
import { MdLocalMovies } from "react-icons/md";
import { MdPodcasts } from "react-icons/md";
import { BsMusicNoteBeamed } from "react-icons/bs";
import { MdArticle } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const MobileNavbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
 const router = useRouter();
    const [searchValue, setSearchValue] = useState("");

    const handleSearch = () => {
      if (searchValue.trim()) {
        router.push(`/search?s=${encodeURIComponent(searchValue)}`);
        onClose();
        setSearchValue("");

      }
    };

  return (
    <>
      {/* Navbar */}
      <Flex
        as="nav"
        w="100%"
        h="60px"
        boxShadow={'md'}
        px={4}
        bg={'white'}
        color="white"
        align="center"
        justifyContent={'right'}
        position="fixed"
        gap={'20px'}
        top="0"
        zIndex="1000"
      >
        {/* Logo */}
        <Box mr={'auto'}>
          <Link href={'/'}>
          <Image src="/jyot_logo.png" alt="Logo" h="50px" />
          </Link>
        </Box>

        {/* Hamburger Menu */}
        <MusicPlayer />
        {/* <CategoryButton /> */}
        {/* <Chatbot /> */}
        <IconButton
          icon={<GiHamburgerMenu />}
          aria-label="Open Menu"
          variant="outline"
          colorScheme="orange"
          fontSize="24px"
          onClick={onOpen}
        />
      </Flex>

      {/* Drawer */}
      <Drawer isOpen={isOpen} placement="right" size={'md'} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent color="black">
          <DrawerCloseButton size={'lg'} />
          <DrawerHeader p={'3px'} borderBottom={'2px solid orange'}>
          <Image src="/jyot_logo.png" alt="Logo" h="50px" />
        </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="start">

  
            <Accordion allowMultiple w={'full'}>
  <AccordionItem>
    <h2>
      <AccordionButton textTransform={"uppercase"}  href="/podcast" fontFamily={'Oswald, sans-serif'} color="black" p={'5px 0px'} w={'100%'}>
        <Box as='span' flex={'1'}>
          About
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <VStack spacing={4} align="start">
       <Link  onClick={onClose} className={styles.nextlink} display={'block'} textTransform={"uppercase"} href="/about" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                About
                </Link>
                <Link  onClick={onClose} className={styles.nextlink}  display={'block'}  textTransform={"uppercase"} href="/h-h-spiritual-sovereign-jainacharya-yugbhushansuriji-maharaja" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                  Our Visionary
                </Link>
                <Link  onClick={onClose} className={styles.nextlink}  display={'block'}  textTransform={"uppercase"} href="/conclave-2022" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                  Conclave 2022
                </Link>
                <Link  onClick={onClose} className={styles.nextlink}  display={'block'}  textTransform={"uppercase"} href="/conclave-2023" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                Conclave 2023
                </Link>
    </VStack>

    </AccordionPanel>
  </AccordionItem>
  </Accordion>

  
                        <Link  onClick={onClose} className={styles.nextlink} textTransform={"uppercase"} href="/podcast" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                          Podcast
                        </Link>
                        <Link  onClick={onClose} className={styles.nextlink} textTransform={"uppercase"} href="/letters-of-jainacharya-on-world-order" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                          Letters
                        </Link>
                        <Link  onClick={onClose} className={styles.nextlink} textTransform={"uppercase"} href="/contact" fontFamily={'Oswald, sans-serif'} color="black" _hover={{ textDecoration: "none", color: "orange" }}>
                          Contact
                        </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MobileNavbar;
