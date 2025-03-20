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


export default function AboutUs(){
    return(
        <>
             <Box m={'auto'} w={'full'} maxW={'1000px'} p={2} pt={'30px'} pb={'30px'}>
                  {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
                    <Box textAlign={'center'}>
                    <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
                    The world is one family
                  </Text>
                  <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
                  Vasudhaiva Kutumbakam Ki Oar
                  </Text>
                  <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
                    </Box>

                    <Text m={'10px 0px'}>
                    The ‘Vasudhaiva Kutumbakam ki Oar’ conclave series was conducted under the holy aegis of Spiritual Sovereign His Holiness Jainacharya Yugbhushansuriji Maharaja. This series is an attempt to revive the Indian legacy of dialogues and discussions with spiritual leaders for their profound guidance on temporal affairs, thus promoting societal harmony, peace, and prosperity. The aim of the conclave series is to foster a fair and just global order within the framework of ‘Vasudhaiva Kutumbakam’.    
                    </Text>
                    <Text m={'10px 0px'}>
                    Held in October 2022, the first conclave was named ‘Vasudhaiva Kutumbakam ki Oar’, and notably, in November 2022, when India assumed the presidency of G20, the Government of India announced ‘Vasudhaiva Kutumbakam’ as the theme for its G20 presidency.
                    </Text>
                    <Text m={'10px 0px'}>
                    This first conclave was based on the theme of ‘Arya Niti and World Order’ in Borivali, Mumbai. It was followed by the second conclave on the theme of the ‘Future of the Western World and the Global South’, held in Manilaxmi Tirth on 18th and 19th October, 2023. The theme explored the trajectory and format of the new world order under the ideology of ‘Vasudhaiva Kutumbakam’ in contrast with Western ideas. The conclave was appropriately timed, given the rising voice of the Global South and the global challenges posed by the pandemic, armed conflicts, revolutionary technological changes, climate crisis, global uncertainties, and transition from West-dominated unipolarity to multipolarity.
                    </Text>
                    <Text m={'10px 0px'}>
                    Panellists comprised pioneers from varied fields of military, diplomacy, and economics, among others. The conclave was attended by intelligentsia from various think tanks, dignitaries from prestigious corporate houses, legal fraternities, and bureaucracy.
                     </Text>

<Box m={'10px auto'} w={'full'} maxW={'1000px'} p={2} pb={'40px'}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box>
          <Image 
            src={'https://vk.jyot.in/wp-content/uploads/2024/11/vasudhaiva-kutumbakam-ki-oar-2-manilaxmi-e1730908796375.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box>
            <Text>
          The second conclave witnessed 3 closed-door sessions on the New Political, Economic, and Social World Order and an open session on the ‘Future of the Western World and Global South’.

The session on the New Political World Order primarily focused on the sovereignty and security of nations. The problems of reserve currency and unfair trade terms were discussed in the session on the Economic New World Order. The session on the Social New World Order highlighted the significance of the Indian joint family system and the values of ‘Vasudhaiva Kutumbakam’ to foster a free, fair, and just world order. The open session witnessed a robust discussion and diverse perspectives put forth by the panellists amidst a full house.
          </Text>
      </Box>
      </SimpleGrid>
      </Box>
             </Box>

             <Box bg={'gray.100'} w={'full'}>
      <Box m={'10px auto'} w={'full'} maxW={'1000px'}  p={2} pb={'40px'}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box textAlign={'center'} pt={'40px'}>
        <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        Harnessing Heritage
                  </Text>
                  <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
                  India’s Timeless Strength
                  </Text>
                  <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box pt={'40px'}>
            <Text>
            The current world is witnessing a rising trust deficit. India is the only country enjoying a trust surplus. Everyone trusts India, and this is her asset. The current world scenario is in favour of India, as she has the youngest population with skilled manpower. India used to be the most developed civilisation, which peaked under the Gupta and Mauryan dynasty. Despite limited resources, she used to contribute 33 percent of the world’s GDP back then. In fact, even after the Mughal invasion, she contributed 25 percent of the world’s GDP. This contribution dropped to 3–4 percent under British rule. This depicts the extent of the loot of Indian wealth by the British.

Despite the lack of resources, the skills, talent, and wisdom found in rural India is unparalleled. Today, the population explosion is propagated as a burden on the country. Even former Prime Minister Jawaharlal Nehru promulgated the concept of family planning across India. Elite Indians blindly and widely adopted this concept.

Despite such promotion, India is the most populated country with vastly skilled manpower, which is an asset in reality.
                 </Text>
      </Box>
      </SimpleGrid>
      </Box>
      </Box>


      <Box w={'full'}>
      <Box m={'10px auto'} w={'full'} maxW={'1000px'}  p={2} pb={'40px'}>
      <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box textAlign={'center'} pt={'40px'}>
        <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
        Reviving Ancient Wisdom
                  </Text>
                  <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
                  India's Path to Global Leadership
                  </Text>
                  <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
        </Box>
        <Box pt={'40px'}>
            <Text>
            In such circumstances, if we revive ancient Indian philosophies and traditions, there will be global acceptance. China too has philosophies similar to the idea of Vasudhaiva Kutumbakam, and the US is also looking to India for solutions. In the affirmative words of Indian External Affairs Minister Dr. S Jaishankar, India’s relations with the US today are beyond imagination. All scenarios are favourable to India to propagate her ‘dharmik’ philosophies.

India is looking at a bright future ahead of her not just economically and politically but also in terms of an enriched culture and ascending morality and virtues. He also suggested that the saints of this country are responsible for inspiring the youth with ancient Indian customs, traditions, and culture. Time is of the essence to mentor, guide, and uplift the Indian youth.

Saints can logically, scientifically, and scripturally prove the existence of the soul. Universal truths can be established and popularised with confidence. The rich culture, traditions, customs, religions, and spirituality are the heritage of this great nation. All ‘Arya dharmas’ are ‘moksh-lakshi’ (liberation-oriented). Materialism is subordinate and spirituality is prime according to ‘Arya dharmas’. With the acceptance and adoption of these ‘dharmik’ philosophies, the life of the Indian populace will be better, happier, and more pleasurable.
                 </Text>
      </Box>
      </SimpleGrid>
      </Box>
      </Box>

            <Box p={3} bg={'black'} textAlign={'center'}>
                <Text m={'auto'} w={'full'} maxW={'900px'} fontWeight={'bold'} fontSize={'2xl'} color={'white'}>
                "India should aim to do good for herself and others while staying alert and safeguarding her interests."    
                </Text>
            </Box>


        </>
    );
}