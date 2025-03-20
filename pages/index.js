import React from "react";
import Navbar from "@/components/Navbar";
import { Image } from "@chakra-ui/react";
import { SimpleGrid,Box,Text,Flex,Button,Link } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { IconButton } from "@chakra-ui/react";
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { Card,CardBody } from "@chakra-ui/react";
import CategoriesVideosList from "@/components/category_page_components/CategoriesVideosList";
import { useRouter } from "next/router";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  useDisclosure,
  ModalCloseButton,
} from '@chakra-ui/react'

export default function Home() {
  const router=useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ar=[
    {
      imgSrc:"/jyot.jpg",
      text:"Host"
    },
    {
      imgSrc:"/gitarth-ganga.jpg",
      text:"Research Partner"
    },
    {
      imgSrc:"/vivekanada-international-foundation.jpg",
      text:"Knowledge Partner"
    },
    {
      imgSrc:"/india-foundation.jpg",
      text:"Knowledge Partner"
    },
    {
      imgSrc:"/wadia-ghandy.jpg",
      text:"Knowledge Partner"
    },
    {
      imgSrc:"/mnlu.jpg",
      text:"Education Partner"
    },
    {
      imgSrc:"/nimcj-web.jpg",
      text:"Media Education Partner"
    },
    {
      imgSrc:"/geostrata.jpg",
      text:"Support Partner"
    },
    {
      imgSrc:"/gap-logo.jpg",
      text:"Support Partner"
    },
    {
      imgSrc:"/Nirma-university.jpg",
      text:"Education Partner"
    },
  ]

  const OPS=[
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Alok-Bansal.png",
      t1:"Shri Alok Bansal",
      t2:"Director, India Foundation"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Justice-M-R-Shah.png",
      t1:"Justice M R Shah",
      t2:"Former Judge, Supreme Court of India"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/c-Aryama-Sundaram.png",
      t1:"Shri Aryama Sundaram",
      t2:"Senior Advocate, Supreme Court of India"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Devadatt-Kamat-Senior-Advocate-Supreme-Court.png",
      t1:"Shri ⁠Devadatt Kamat",
      t2:"Senior Advocate, Supreme Court"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Gopal-Sankarnarayan.png",
      t1:"Shri Gopal Sankarnarayan",
      t2:"Senior Advocate, Supreme Court of India"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Mr.-Vikramjit-Banerjee.png",
      t1:"Shri Vikramjit Banerjee",
      t2:"Additional Solicitor General of India, Supreme Court"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/Mohit-shah.png",
      t1:"Chief Justice Mohit Shah",
      t2:"Former Chief Justice, Bombay High Court"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/devang-nanavati.png",
      t1:"Shri Devang Nanavati",
      t2:"Senior Advocate, Gujarat High Court"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Achal-Malhotra.png",
      t1:"Shri Achal Malhotra",
      t2:"Ambassador( Retd) & Managing Editor Indian Foreign Affairs Journal"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/11/Aniruddh-Rajput.png",
      t1:"Dr. Aniruddha Rajput",
      t2:"Barrister & consultant with Withers LLP in London"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/Yashvardhan-Kumar-Sinha-1.png",
      t1:"Shri Yashvardhan Kumar Sinha",
      t2:"Chief Information Commissioner of India"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/Mr.-Percival-Billimoria-Senior-Advocate.png",
      t1:"Shri Percival Billimoria",
      t2:"Senior Advocate"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/rajiv-nayan.png",
      t1:"Shri Rajiv Nayan",
      t2:"Sr. Research Associate @MP-IDSA, Sec. Gen. IAIS"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/jr-bhatt.png",
      t1:"Dr J.R. Bhatt",
      t2:"Formerly Advisor at Ministry of Environment, Forests & Climate Change, Govt. of India"
    },
    {
      imgSrc:"https://vk.jyot.in/wp-content/uploads/2024/12/Dr-Saroj-Bishoyi.png",
      t1:"Dr Saroj Bishoyi",
      t2:"Research Fellow, VIF"
    },

  ]

  return (
    <>

<Modal blockScrollOnMount={true} isOpen={isOpen} onClose={onClose} size="xl"> 
  <ModalOverlay />
  <ModalContent w={'full'} maxW={'900px'}> {/* Restrict modal width */}
    <ModalCloseButton />
    <ModalBody p={10}>
      {/* Responsive container for the iframe */}
      <Box 
        position="relative" 
        paddingTop="56.25%" /* 16:9 Aspect Ratio */
        width="100%"
      >
        <iframe 
          src="https://www.youtube.com/embed/MpmNhj6JcKE"
          title="Vasudhaiva Kutumbkam Ki Oar 2.0 Highlights"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%"
          }}
        />
      </Box>
    </ModalBody>
    <ModalFooter>
    </ModalFooter>
  </ModalContent>
</Modal>



      <Image 
        src={'/hero_image.jpg'}
        width={1000}
        height={1000}
        style={{width:"100%",height:"auto"}}
      />

      <Box m={'auto'} w={'full'} maxW={'1000px'} p={2}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box>
          <Image 
            src={'/what_is_VK.png'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'} color={'gray.700'} >THE ESSENCE</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >What is Vasudhaiva Kutumbakam ?</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'2xl'} color={'gray'} mt={'20px'}>
          “…all countries are not equal in capacities, yet they enjoy rights, perform duties, and fulfil responsibilities in line with their capabilities to work as a single unit. This is the substance of Vasudhaiva Kutumbakam.”
          </Text>
          <Text mt={'20px'} fontSize={'lg'}>– H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja</Text>
      </Box>
      </SimpleGrid>
      </Box>

      <Box
      w="full"
      mx="auto"
      p="6"
      textAlign="center"
      bg="gray.100"
    >
      <Text fontSize="lg" color={'gray.400'} fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        A LARGER GOAL
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
        Vasudhaiva Kutumbakam Ki Oar 3.0
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid red'} />
      <Text fontSize="md" color="gray.700">
        This initiative has an underlying vision of endeavoring to educate, preserve, and propagate 
        Bharat’s traditional, social, and cultural construct of Vasudhaiva Kutumbakam as the most 
        balanced way of social living. By extrapolating these rich ideals at a global level, this conclave is an attempt to foster 
        shaping a world order that is free, fair, and just such that it can also protect and revive 
        numerous cultures and civilizations throughout the world. Vasudhaiva Kutumbakam Ki Oar 3.0 looks to shape a harmonious world based on Bharat’s 
        cultural heritage. The Conclave series returns with two distinct facets of Vasudhaiva 
        Kutumbakam this year.
      </Text>
    </Box>

    <Box m={'auto'} w={'full'} p={2}>
      <SimpleGrid pt={'30px'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box textAlign={'center'}>
          <Image 
            src={'/14th.png'}
            width={1000}
            height={1000}
            style={{width:"50%",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'2xl'} fontWeight={'bold'} textTransform={'uppercase'}>The Legal Theme :</Text>
          <Text fontSize={'xl'} fontWeight={'semibold'}>Sovereignty, Basic Structure Doctrine & Secularism</Text>
          <Text fontSize={'md'} color={'gray'} mt={'15px'}>
          This initiative aims to discuss the fundamental legal issues that are central and basic touching not just the law points but also the jurisprudence of the laws of the land.
          </Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src={'/15th.png'}
            width={1000}
            height={1000}
            style={{width:"50%",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'2xl'} fontWeight={'bold'} textTransform={'uppercase'}>The Geopolitical Theme :</Text>
          <Text fontSize={'xl'} fontWeight={'semibold'}>Global Trust, Multipolarity & Role of Vishvabandhu Bharat</Text>
          <Text fontSize={'md'} color={'gray'} mt={'15px'}>
          his initiative has an underlying vision of endeavouring to educate, preserve and propagate Bharat’s traditional, social and cultural construct of Vasudhaiva Kutumbakam as the most balanced way of social living.
         </Text>
        </Box>
      </SimpleGrid>
      </Box>

      <Box
      w="full"
      mx="auto"
      p="6"
      textAlign="center"
      bg="gray.100"
    >
      <Text fontSize="lg" color={'gray.400'} fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
      OUR PARTNERS
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Joining Forces For A Better Tomorrow
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid red'} />
      <Text fontSize="md" color="gray.700">
      Jyot, in association with Vivekananda International Foundation, India Foundation and Gitarth Ganga, cordially invites you to witness the third edition of this historic initiative, which will take place at Gitarth Ganga, Ahemdabad on the 14th & 15th of December, 2024.
      We eagerly anticipate your presence and participation at ‘Vasudhaiva Kutumbakam ki Oar 3.0’ as we strive to foster a fair and just global order.
      </Text>
    </Box>


    <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
      <SimpleGrid pt={'30px'} columns={{ base: 1, md: 2, lg: 5 }} spacing={6}>
        {ar.map((a)=>(
        <Box textAlign={'center'}>
          <Image 
            src={a.imgSrc}
            width={1000}
            height={1000}
            style={{width:"200px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'sm'}>{a.text}</Text>
        </Box>
        ))}
      </SimpleGrid>
      </Box>

      <Box bg={'#FF6943'} m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
        <Box textAlign={'center'}>
        <Text fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        OUR VALUABLE
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Supporters
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid white'} />
        </Box>
        <Box textAlign={'center'}>
          
          <Text fontSize={'xl'} fontWeight={'semibold'}>BMK Foundation
&
Shri Adarsh Kelavani Mandal</Text>
        </Box>
      </SimpleGrid>
      </Box>


      <Box bg={'#FFDFDF'} m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}>
        <Box textAlign={'center'}>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Shubhecchak
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box textAlign={'center'}>
          
          <Text fontSize={'xl'} fontWeight={'semibold'}>Pravarsh Group of Companies</Text>
        </Box>
      </SimpleGrid>
      </Box>

      
      <Box bg={'black'} m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text color={'white'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        OUR ESTEEMED
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="white">
      Advisory Board
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
        <SimpleGrid pt={'30px'} columns={{ base: 1, md: 3, lg: 3 }} spacing={6}>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/Arvind-Gupta.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>Dr. Arvind Gupta</Text>
          <Text fontSize={'lg'} color={'white'}>Director, VIF</Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/Ram-Madhav.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>Dr. Ram Madhav</Text>
          <Text fontSize={'lg'} color={'white'}>President of India Foundation</Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/dr-vijay-chauthaiwale.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>Dr. Vijay Chauthaiwale</Text>
          <Text fontSize={'lg'} color={'white'}>Department of Foreign Affairs, BJP</Text>
        </Box>
      </SimpleGrid>
        </Box>
      </Box>


      <Box m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        advisory & executive committee
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Guiding Vision, Driving Excellence
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
        <SimpleGrid pt={'30px'} columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/Dr-Shirish-Kashikar.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>Dr. Shirish Kashikar</Text>
          <Text fontSize={'md'} color={'black'}>Director of National Institute of Mass Communication & Journalism, Ahmedabad</Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/Nikunt-K.-Raval-advocate.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>Shri Nikunt K. Raval</Text>
          <Text fontSize={'md'} color={'black'}>Advocate Gujarat High Court, Standing Counsel Union of India</Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/dhawal-mehta-managing-partner.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>Shri Dhaval Mehta</Text>
          <Text fontSize={'md'} color={'black'}>Managing Partner, Wadia Ghandy</Text>
        </Box>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/11/Bhavik-lalan.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>Shri Bhavik Lalan</Text>
          <Text fontSize={'md'} color={'black'}>Counsel at Bombay High Court & Supreme Court of India</Text>
        </Box>

      </SimpleGrid>
        </Box>
      </Box>

      <Box bg={'black'} m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text color={'white'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        OUR ESTEEMED
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="white">
      Guest Of Honor
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
        <SimpleGrid pt={'30px'} columns={{ base: 1, md: 1, lg: 1 }} spacing={6}>
        <Box textAlign={'center'}>
          <Image 
            src="https://vk.jyot.in/wp-content/uploads/2024/12/suresh-prabhu.png"
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'white'}>Shri Suresh Prabhu</Text>
          <Text fontSize={'lg'} color={'white'}>Minister of Civil Aviation of India</Text>
        </Box>
      </SimpleGrid>
        </Box>
      </Box>



      <Box m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        advisory & executive committee
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Guiding Vision, Driving Excellence
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
        <SimpleGrid pt={'30px'} columns={{ base: 1, md: 2, lg: 4 }} spacing={6}>
     {OPS.map((op)=>(   
        <Box textAlign={'center'}>
          <Image 
            src={op.imgSrc}
            width={1000}
            height={1000}
            style={{width:"300px",height:"auto",objectFit:"contain",margin:"auto"}}
          />
          <Text fontSize={'xl'} fontWeight={'bold'} color={'black'}>{op.t1}</Text>
          <Text fontSize={'md'} color={'black'}>{op.t2}</Text>
        </Box>
     ))}
      </SimpleGrid>
        </Box>
      </Box>

      <Box textAlign={'center'} pt={'80px'} pb={'80px'} w={'full'} bg={'rgba(0,0,0,0.7)'}>
        <Text w={'full'} fontSize={'2xl'} color={'white'}>Watch The Success of</Text>
        <Text fontSize={'4xl'} color={'#FF6943'} fontWeight={'bold'}>Vasudhaiva Kutumbakam Ki Oar 2.0</Text>
        <IconButton
        icon={<MdOutlinePlayCircleFilled />}
        colorScheme="orange"
        w={'70px'}
        mt={'30px'}
        h={'70px'}
        onClick={onOpen}
        borderRadius={'full'}
        fontSize={'6xl'}
          />
      </Box>



      <Box m={'20px auto'} w={'full'} maxW={'1000px'} p={2} pb={'40px'}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box mt={'40px'}>
          <Image 
            src={'https://jyot.in/wp-content/uploads/2023/10/vasudhaiva-kutumbakam-ki-oar-joint-declaration-1024x576.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'} color={'gray.700'} >A CONSTRUCTIVE RESOLUTION</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >Joint Declaration</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'md'} color={'gray'} mt={'20px'}>
          Under the guidance of Spiritual Sovereign His Holiness Jainacharya Yugbhushansuriswarji Maharaja, we propose twelve pivotal ethics, derived from this philosophy, to be considered at the global level for establishing Global Order based on Vasudhaiva Kutumbakam.
          </Text>
       <Link href="https://jyot.in/docs/joint%20declaration%20signed%20copy.pdf" isExternal><Button colorScheme="orange" mt={'15px'}>{"Read More >"}</Button></Link>
      </Box>
      </SimpleGrid>
      </Box>


      <Box m={'20px auto'} w={'full'} maxW={'1000px'} p={2} pb={'40px'}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
      <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >Vasudhaiva Kutumbakam Ki Oar 2.0</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >Conclave Report</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'md'} color={'gray'} mt={'20px'}>
          At a time of turbulence, the wisdom coming from spiritual leaders provides the calming influence and a hope for the future. The Jainacharya’s vision for the new world order is comprehensive, strategic and practical. The present book contains the key themes of his vision.          </Text>
          <Text mt={'20px'} fontSize={'lg'}>– Arvind Gupta, Director,
          VIF | Vivekananda International Foundation</Text>
       <Link href="https://jyot.in/docs/Vasudhaiva-Kutumbakam-Ki-Oar-2-A-Report.pdf" isExternal><Button colorScheme="orange" mt={'15px'}>{"Read More >"}</Button></Link>
      </Box>
        <Box mt={'40px'}>
          <Image 
            src={'https://vk.jyot.in/wp-content/uploads/2024/10/Vasudhaiva-Kutumbakam-Ki-Oar-Conclave-Report-1024x576-1.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
      </SimpleGrid>
      </Box>


      <Box bg={'#FDECD8'} m={'auto'} w={'full'} p={2}>
      <SimpleGrid w={'full'} maxW={'1000px'} m={'auto'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box>
          <Image 
            src={'https://vk.jyot.in/wp-content/uploads/2024/10/Spiritual-Sovereign-Jainacharya-Yugbhushansuriji-e1730213721751.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'} color={'gray.700'} >AN ERUDITE VISIONARY</Text>
        <Text mt={'20px'} fontSize={'lg'}>H.H. Spiritual Sovereign Jainacharya</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >Yugbhushansuriji Maharaja</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'md'} color={'gray'} mt={'20px'}>
          His Holiness is a scholar not just in Jain Darshan but in all six Darshans originating in India.
He has always remained informed about contemporary affairs in multiple disciplines, including biology, physics, economics, and politics and their interplay with the principles of spirituality.
He is an expert in delivering religious sermons in the context of modern ideas to depict the versatility of religious principles.
         </Text>
         <Link href="#" isExternal><Button colorScheme="orange" mt={'15px'}>{"Read More >"}</Button></Link>
         
      </Box>
      </SimpleGrid>
      </Box>


      <Box bg={'black'} m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text color={'white'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        A BROADER HORIZON
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="white">
      Jainacharya On World Order
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>

        <Box m={'auto'} w={'full'} maxW={'1200px'} p={2}>
        <SimpleGrid pt={'30px'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
       <Card p={'30px 10px'}>
          <CardBody>
          <Text color={'gray'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
          UKRAINE ACID TEST
      </Text>
      <Flex m={'20px'} justifyContent={'space-between'}>
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-jyot-handle.jpg'}
          width={1000}
          height={1000}
          style={{width:"130px",height:"auto",objectFit:"contain"}}
        />
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-logo-x.png'}
          width={1000}
          height={1000}
          style={{width:"50px",height:"auto",objectFit:"contain"}}
        />
      </Flex>

      <Text fontSize={'sm'} color={'gray'}>
      Under US guardianship and security, Ukraine lost Crimea, and now it is time for Ukraine itself. With the fall of the Soviet, Ukraine was persuaded to denuclearise with the promise of security. Today it is an acid test of the US to fulfil that promise as threat from Russia looms and when war sirens ring frequently.
      </Text>
      <Text mt={'10px'} fontSize={'sm'} color={'gray'}>
      20 Jun 2021
     </Text>
          </CardBody>
       </Card>
       <Card p={'30px 10px'}>
          <CardBody>
          <Text color={'gray'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
          AUSTRALIAN ACID TEST
      </Text>
      <Flex m={'20px'} justifyContent={'space-between'}>
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-jyot-handle.jpg'}
          width={1000}
          height={1000}
          style={{width:"130px",height:"auto",objectFit:"contain"}}
        />
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-logo-x.png'}
          width={1000}
          height={1000}
          style={{width:"50px",height:"auto",objectFit:"contain"}}
        />
      </Flex>

      <Text fontSize={'sm'} color={'gray'}>
      Of all those dependents of the US nuclear umbrella security, Australia has learnt a hard lesson from current strategic vulnerabilities and experiences. Now she has taken a strategic step to be self-reliant in defence and it will be an acid test for the US to turn the trend of self-reliance in strategic sectors and promote USD-denominated global trade and supply chains.
      </Text>
      <Text mt={'10px'} fontSize={'sm'} color={'gray'}>
      8 Jun 2021
     </Text>
          </CardBody>
       </Card>

       <Card p={'30px 10px'}>
          <CardBody>
          <Text color={'gray'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
          UNITED KINGDOM ACID TEST
      </Text>
      <Flex m={'20px'} justifyContent={'space-between'}>
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-jyot-handle.jpg'}
          width={1000}
          height={1000}
          style={{width:"130px",height:"auto",objectFit:"contain"}}
        />
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-logo-x.png'}
          width={1000}
          height={1000}
          style={{width:"50px",height:"auto",objectFit:"contain"}}
        />
      </Flex>

      <Text fontSize={'sm'} color={'gray'}>
      Post-Brexit, a trade deal between US-UK is still pending, the face-off as to the Good Friday Agreement is unresolved, the UK’s ambition of being a global leader has sprouted, defence and nuclear deterrence are upped. Now, how their ‘special relations’ endure and how the US is able to accommodate the aspirational UK is an acid test.
      </Text>
      <Text mt={'10px'} fontSize={'sm'} color={'gray'}>
      31 May 2021
     </Text>
          </CardBody>
       </Card>

       <Card p={'30px 10px'}>
          <CardBody>
          <Text color={'gray'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
          EUROPEAN ACID TEST
      </Text>
      <Flex m={'20px'} justifyContent={'space-between'}>
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-jyot-handle.jpg'}
          width={1000}
          height={1000}
          style={{width:"130px",height:"auto",objectFit:"contain"}}
        />
        <Image 
          src={'https://vk.jyot.in/wp-content/uploads/2024/10/twitter-logo-x.png'}
          width={1000}
          height={1000}
          style={{width:"50px",height:"auto",objectFit:"contain"}}
        />
      </Flex>

      <Text fontSize={'sm'} color={'gray'}>
      For decades those Nations who put trust and faith in the US as security umbrella provider, were suddenly left out like orphans by the Trump administration before superpowers like #Russia and #China. There will be a real acid test for US to gain their faith and trust back since they have once faced the harsh reality of such vulnerable scenarios.
      </Text>
      <Text mt={'10px'} fontSize={'sm'} color={'gray'}>
      29 May 2021
     </Text>
          </CardBody>
       </Card>
      </SimpleGrid>

      <Box pt={'20px'} w={'full'} m={'auto'} textAlign={'center'}>
     <Button colorScheme={'orange'} >{"View more >"}</Button>
      </Box>
        </Box>
      </Box>


      <Box m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
      {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
        <Box textAlign={'center'}>
        <Text color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        WORDS OF WISDOM
      </Text>
      <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
      Letters of Jainacharya on World Order
      </Text>
      <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <CategoriesVideosList category={"letters-of-jainacharya-on-world-order"} showThree={3} hideMeta={true} />

      <Box pt={'20px'} w={'full'} m={'auto'} textAlign={'center'}>
     <Button  onClick={() => router.push("/letters-of-jainacharya-on-world-order")} colorScheme={'orange'} >{"View more >"}</Button>
      </Box>

        </Box>


        <Box bg={'rgb(249, 249, 249)'} m={'auto'} w={'full'} p={2}>
      <SimpleGrid w={'full'} maxW={'1000px'} m={'auto'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box>
          <Image 
            src={'https://jyot.in/wp-content/uploads/2023/09/3-a-just-world-order.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'} color={'gray.700'} >VISION FOR FUTURE</Text>
        <Text mt={'20px'} fontSize={'lg'}>A Just World Order</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >Yugbhushansuriji Maharaja</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'md'} color={'gray'} mt={'20px'}>
          This is a podcast series based on the sermons of H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja. It sheds light on how the Indian joint family system serves as the foundation for the concept of Vasudhaiva Kutumbakam & how a just world order would be.
         </Text>
         <Link href="#" isExternal><Button colorScheme="orange" mt={'15px'}>{"Listen Now >"}</Button></Link>
         
      </Box>
      </SimpleGrid>
      </Box>

    </>
  );
}
