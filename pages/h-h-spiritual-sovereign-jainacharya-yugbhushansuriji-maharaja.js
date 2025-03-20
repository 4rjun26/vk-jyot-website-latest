import React from "react";
import { Box,Image,Text,Link } from "@chakra-ui/react";

export default function HHSpiritual(){
    return(
        <>
            <Box w={'full'} maxW={'1100px'} m={'auto'} textAlign={'center'}>
                <Image
                    src={'https://vk.jyot.in/wp-content/uploads/2024/10/Spiritual-Sovereign-Jainacharya-Yugbhushansuriji-2.jpg'}
                    w={'full'}
                    h={'auto'}
                    objectFit={'contain'}
                />

                <Text mt={'20px'} fontSize={'xl'} fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>AN ERUDITE VISIONARY</Text>
                <Text mt={'20px'} fontSize={'3xl'} fontWeight={'bold'}>
                H.H. Spiritual Sovereign Jainacharya
                Yugbhushansuriji Maharaja
                </Text>

                <Box w={'full'} textAlign={'left'}>
                <Text mt={'10px'} color={'gray'}>
                His Holiness, Spiritual Sovereign Jainacharya Yugbhushansuri Maharaja, one of the 79th descendants of Tirthankar Mahavir Swami, has been gracing the land of India since his renunciation in 1979.
                </Text>
                <Text mt={'10px'} color={'gray'}>
                His Holiness is a scholar not just in Jain Darshan but in all six Darshans originating in India. He has always remained informed about contemporary affairs in multiple disciplines, including biology, physics, economics, and politics and their interplay with the principles of spirituality. He is an expert in delivering religious sermons in the context of modern ideas to depict the versatility of religious principles.
                </Text>
                <Text mt={'10px'} color={'gray'}>
                Having kept track of the global political order, he had perceived that the genesis of all the threats to Indian religions is situated in the current world order. For this, he researched the trajectory of the world order in depth by hiring top legal firms like Cyril Amarchand Mangaldas and AZB & Partners along with the involvement of several litigation counsels. One of the focus areas of his research was to understand the de-jure world order starting from the Roman conquest of England to the decolonisation of Hong Kong. Since his intent for the research was to recognise threats and take action to protect religions, he has never published his research or findings. He has occasionally indicated his insights to concerned ministers via personal correspondence. </Text>
                <Text mt={'10px'} color={'gray'}>
                However, recognising the political expertise of His Holiness, an NGO, JYOT (India) has published a few of his ideas on their twitter handle @IndiaJyot under the hashtag #JainacharyaOnWorldOrder. Many of his ideas were liked and supported by Indian foreign secretaries and MPs (such as <Link 
                href="https://x.com/ShashiTharoor/status/1517093330307682304?t=6WPcmbQ2ZEWl7hnj8BTabA&s=08"
                isExternal 
                color={'blue'}>Shashi Tharoor</Link>), among others.
               </Text>
               
                </Box>
            </Box>
        </>
    );
}