import React from "react";
import { Box, SimpleGrid, Card, CardBody, Text,Flex,Image } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { BiLogoFacebook } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import { BiLogoInstagram } from "react-icons/bi";
import { useState,useEffect } from "react";
import { BsYoutube } from "react-icons/bs";
import {  InputGroup, InputRightElement, IconButton } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";

const Footer = () => {
    const [searchValue, setSearchValue] = useState("");
    const [data, setData] = useState([]);
    const [isLoading, setisLoading] = useState(true);
        const router = useRouter();
    
    const handleSearch = () => {
      if (searchValue.trim()) {
        router.push(`/search?s=${encodeURIComponent(searchValue)}`);
        setSearchValue("");
      }
    };

    const fetchData = async () => {
      try {
        setisLoading(true);
        const response = await fetch(`/api/get_latest_post`, {
          headers: {
              "Authorization": `Bearer fr9iFhQWPB3jjxh8D4pNKmyJUeEbKTf2Zgw7QJK0`,
          },
      }); // ✅ Fetch paginated data
        if (!response.ok) throw new Error("Failed to fetch podcasts");
  
        const data = await response.json();
        if (data.length === 0){ 
        //  setHasMore(false); // ✅ Stop loading if no more data
        }
        else{
          setData(data[0]); 
        } 
      } catch (error) {
        console.error("Error fetching podcasts:", error);
      } finally {
        setisLoading(false);
      }
    };

    useEffect(() => {
      fetchData(); 
    }, []); 
  return (
    <>
    {isLoading ? <></> : 
    <Box pb={'20px'} w="100%" bg="#1f2125" color="white">
        <SimpleGrid m={'auto'} columns={{ base: 1, md: 3 }} spacing={5} w="90%">
            <Card
            bg="none"
            borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
            >
              <CardBody>
              <Text color={'white'} mb={'10px'} fontSize={'20px'} fontWeight={'semibold'} >
              Vasudhaiva Kutumbakam Ki Oar 2.0 Conclave Report
              </Text>
              <Divider border={'2px solid white'} />
              <>
              <Box w={'full'}>
                <Link href="https://jyot.in/docs/Vasudhaiva-Kutumbakam-Ki-Oar-2-A-Report.pdf" passHref target="_blank" rel="noopener noreferrer" >
                <Image 
                  src={'https://vk.jyot.in/wp-content/uploads/2024/10/Vasudhaiva-Kutumbakam-Ki-Oar-Conclave-Report-1024x576-1.jpg'}
                  w={'full'}
                  h={'auto'}
                  objectFit={'contain'}
                />
                </Link>
              </Box>
              </>
              
              </CardBody>
            </Card>
            
            <Card
              bg="none"
              borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
            >
       <CardBody>
        <Text color={'white'} fontWeight={'bold'}>Quick Links:</Text>
        <Box p={2} gap={'10px'} textAlign={'left'}>
          <Link href={'/#'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Register</Text></Link>
          <Link href={'/h-h-spiritual-sovereign-jainacharya-yugbhushansuriji-maharaja'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Visionary</Text></Link>
          <Link href={'/conclave-2022'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Conclave 2022</Text></Link>
          <Link href={'/conclave-2023'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Conclave 2023</Text></Link>
          <Link href={'/podcast'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Podcast</Text></Link>
          <Link href={'/letters-of-jainacharya-on-world-order'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Letters</Text></Link>
          <Link href={'/contact'}><Text mt={'10px'} _hover={{color:"orange"}} color={'gray'}>Contact</Text></Link>
        </Box>

      
      </CardBody>
            </Card>

            <Card
            bg="none"
                          borderRadius="lg"
              overflow="hidden"
              boxShadow="md"
              p={4}
            >
              <CardBody>
              <Text color={'white'} mt={'30px'} mb={'10px'} fontSize={'30px'} fontFamily={'Oswald, sans-serif'} >Social Media</Text>
       
        <Flex  mt={'30px'} w={'full'} gap={'10px'} h={'40px'}>
              <Link href="https://www.facebook.com/jyotindia" isExternal>
        <IconButton
              icon={<BiLogoFacebook />}
              colorScheme="orange"
              fontSize={'20'}
              size="md"
              borderRadius={'50%'}
            /></Link>

<Link href="https://x.com/indiajyot" isExternal>
             <IconButton
              icon={<BsTwitterX />}
              colorScheme="orange"
              fontSize={'20'}
              size="md"
              borderRadius={'50%'}
            /></Link>

<Link href="https://www.instagram.com/jyotindia/" isExternal>
             <IconButton
             icon={<BiLogoInstagram />}
             colorScheme="orange"
             fontSize={'20'}
             size="md"
             borderRadius={'50%'}
            /></Link>

<Link href="https://www.youtube.com/jyotindia" isExternal>
             <IconButton
              icon={<BsYoutube />}
              colorScheme="orange"
              fontSize={'20'}
              size="md"
              borderRadius={'50%'}
            /></Link>
        </Flex>
              </CardBody>
            </Card>
        
        </SimpleGrid>

        <Divider border={'1px solid rgb(200,200,200)'} />
        <Text mt={'10px'} fontSize={'xs'} w={'full'} textAlign={'center'} color={'rgb(200,200,200)'}>© 2024 Jyot</Text>
      </Box>

    }
    </>
  );
};

export default Footer;
