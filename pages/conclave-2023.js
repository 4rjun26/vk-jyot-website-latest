import React from "react";
import { Box,Image,Text,Link,SimpleGrid,Divider,Button,Flex } from "@chakra-ui/react";
import NextLink from "next/link";
import { BiBox } from "react-icons/bi";

export default function ConClave2023(){


  const OPS = [
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Arvind-Gupta.png",
      t1: "Mr. Arvind Gupta",
      t2: "Director, Vivekananda International Foundation",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Alok-Bansal.png",
      t1: "Capt. Alok Bansal",
      t2: "Director, India Foundation",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Air-CMDR-Ranjan-Mukherjee.png",
      t1: "Air CMDR Ranjan Mukherjee",
      t2: "VSM IAF, State Commissioner for PwD, NCT of Delhi",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/biswajit-dasgupta.png",
      t1: "Vice Admiral Biswajit Dasgupta",
      t2: "AVSM, YSM, VSM, Indian Navy",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Abhinav-Pandya.png",
      t1: "Shri Abhinav Pandya",
      t2: "Founder & CEO, Usanas Foundation, Geopolitical Analyst and Author",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Anshuman-Tripathi.png",
      t1: "Shri Anshuman Tripathi",
      t2: "Member, NSAB",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Jaxay-Shah.png",
      t1: "Shri Jaxay Shah",
      t2: "Chairman, Quality Council of India; Ex-President, CREDAI; CMD, Savvy Group",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Siddharth-Shah.png",
      t1: "Shri Siddharth Shah",
      t2: "Co-Founder and CEO, PharmEasy",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/come.png",
      t1: "Shri Côme Carpentier De Gourdon",
      t2: "Convener, Editorial Board, World Affairs Journal",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Lt-Gen-Rakesh-Sharma.png",
      t1: "Lt Gen Rakesh Sharma",
      t2: "Distinguished Fellow, VIF",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/Lt-Gen-Ravi-Sahni.png",
      t1: "Lt Gen Ravi Sawhney",
      t2: "Senior Fellow, VIF",
    },
    {
      imgSrc: "https://vk.jyot.in/wp-content/uploads/2024/10/rajiv-jain.png",
      t1: "Shri Rajiv Jain",
      t2: "Former Director, Intelligence Bureau",
    },
  ];
  const guarantees = [
    { imgSrc: "", title: "Guarantee of Security" },
    { imgSrc: "", title: "Guarantee of Basic Necessities" },
    { imgSrc: "", title: "Guarantee of Health & Education of Choice" },
    { imgSrc: "", title: "Guarantee of Free Growth & Development" },
    { imgSrc: "", title: "Guarantee of Support & Guidance" },
    { imgSrc: "", title: "Guarantee of Equal Access to Common Resources" },
    { imgSrc: "", title: "Guarantee of Material & Spiritual Development of the Individual" },
    { imgSrc: "", title: "Guarantee of Family String" },
    { imgSrc: "", title: "Guarantee of Protection to Weak & Vulnerable" },
    { imgSrc: "", title: "Guarantee of Grievance Redressal, Punishment, & Justice System" },
    { imgSrc: "", title: "Equal but Differential Duty According to Capability" },
    { imgSrc: "", title: "A Strong, Mature, Neutral, & Visionary Leadership" }
  ];


    return(
        <>
            <Box w={'full'} maxW={'1500px'} m={'auto'} textAlign={'center'}>
                            <Image
                                src={'https://vk.jyot.in/wp-content/uploads/2024/10/vasudhaiva-kutumbakam-ki-oar-2-conclave-2023-manilaxmi-2.jpg'}
                                w={'full'}
                                h={'auto'}
                                objectFit={'contain'}
                            />
            </Box>

              <Box m={'20px auto'} w={'full'} maxW={'1000px'} p={2} pb={'40px'}>
                  <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                    <Box mt={'40px'}>
                      <Image 
                        src={'https://vk.jyot.in/wp-content/uploads/2024/10/1K3A8621-e1729934626828.png'}
                        width={1000}
                        height={1000}
                        style={{width:"100%",height:"auto",objectFit:"contain"}}
                      />
                    </Box>
                    <Box pt={'40px'}>
                    <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >Future of Western World & Global South</Text>
                      <Text fontSize={'4xl'} fontWeight={'bold'} >A Global Challenge</Text>
                      <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
                      <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                      Considering global challenges posed by the pandemic, armed conflicts, revolutionary technological changes, the climate crisis, the current state of global upheaval – uncertainties, transition to multipolarity, and taking into account the rising voice of the Global South, the panellists would discuss their impact on domains of economics, social systems, and politics and explore the trajectory and format of the new World Order. The panellists will also contemplate the necessary nuances to move towards a free, fair, and just order.

The upcoming conclave – ‘Vasudhaiva Kutumbakam ki Oar 2.0’, builds on the success of the previous conclave with a fresh theme of ‘Future of the Western World and the Global South’.

The conclave shall take place under the aegis of H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja.

India’s role in shaping the emerging World Order, considering its hard and soft power, is widely anticipated.
                          </Text>
                     <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                     – H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja
                        </Text>
                  </Box>
                  </SimpleGrid>
                  </Box>

                  <Box bg={'rgb(250,250,250)'} m={'20px auto'} w={'full'} p={2} pb={'40px'}>
                  <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                  <Box mt="40px" display="flex" justifyContent="center" alignItems="center">
  <iframe 
    width="670" 
    height="378" 
    src="https://www.youtube.com/embed/MpmNhj6JcKE" 
    title="Vasudhaiva Kutumbakam Conclave-2023" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
</Box>
                    <Box pt={'40px'}>
                    <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >Glimpse Of</Text>
                      <Text fontSize={'4xl'} fontWeight={'bold'} >Glimpse Of Arya Niti & World Order</Text>
                      <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
                      <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                      This is what our esteemed Panelists of Conclave 2022 had to say about H.H. Spiritual Sovereign Jainacharya Yugbhushansuriji Maharaja.
                       </Text>
                     
                   <Link href="https://jyot.in/docs/joint%20declaration%20signed%20copy.pdf" isExternal><Button colorScheme="orange" mt={'15px'}>{"READ MORE >"}</Button></Link>
                  </Box>
                  </SimpleGrid>
                  </Box>
                  
         <Box m={'auto'} w={'full'} p={2} pt={'30px'} pb={'30px'}>
              {/* <SimpleGrid m={'auto'} pt={'30px'} w={'full'} maxW={'1200px'} columns={{ base: 1, md: 2, lg: 2 }} spacing={6}> */}
                <Box textAlign={'center'}>
                <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
                CONCLAVE 2023
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
              Future of Western World & Global South Panelists
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

          <Box m={'20px auto'} bg={'rgb(250,250,250)'} w={'full'} p={2} pb={'40px'}>
                  <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                    <Box mt={'40px'}>
                      <Link href="https://jyot.in/docs/joint%20declaration%20signed%20copy.pdf" isExternal>
                      <Image 
                        src={'https://jyot.in/wp-content/uploads/2023/10/vasudhaiva-kutumbakam-ki-oar-joint-declaration-1024x576.jpg'}
                        width={1000}
                        height={1000}
                        style={{width:"100%",height:"auto",objectFit:"contain"}}
                      />
                      </Link>
                    </Box>
                    <Box pt={'40px'}>
                    <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >A CONSTRUCTIVE RESOLUTION</Text>
                      <Text fontSize={'4xl'} fontWeight={'bold'} >Joint Declaration</Text>
                      <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
                      <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                      Under the guidance of Spiritual Sovereign His Holiness Jainacharya Yugbhushansuriswarji Maharaja, we propose twelve pivotal ethics, derived from this philosophy, to be considered at the global level for establishing Global Order based on Vasudhaiva Kutumbakam.
                          </Text>
                          <Link href="https://jyot.in/docs/joint%20declaration%20signed%20copy.pdf" isExternal><Button colorScheme="orange" mt={'15px'}>{"READ MORE >"}</Button></Link>
                
                  </Box>
                  </SimpleGrid>
                  </Box>

                  <Box w={'full'}>
                  <Box textAlign={'center'}>
                <Text textTransform={'uppercase'} color={'black'} fontSize="lg" fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'}>
                CONCLAVE 2023
              </Text>
              <Text fontSize="3xl" fontWeight="semibold" fontFamily={"Poppins, sans-serif"} color="black">
              Future of Western World & Global South
              </Text>
              <Divider w={'100px'} m={'10px auto'} border={'2.5px solid #FF6943'} />
                </Box>
             <SimpleGrid w={'full'} maxW={'1100px'} m={'auto'} columns={{ base: 1, md: 2, lg: 2 }} spacing={4} p={4}>
      {guarantees.map((item, index) => (
        <Flex key={index} p={4} gap={'10px'} alignItems={'center'}>
          <Flex justifyContent={'center'} alignItems={'center'} w={'50px'} borderRadius={'md'} border={'4px solid rgb(224,77,5)'} p={'5px'} h={'50px'}>
          <Image 
          src={`/i_${index+1}.png`}
            w={'40px'}
            h={'auto'}
            objectFit={'contain'}
          />
          </Flex>
          <Text fontSize="lg" fontWeight="semibold">{item.title}</Text>
        </Flex>
      ))}
    </SimpleGrid>
             </Box>
            
              <Box m={'20px auto'} w={'full'} bg={'rgb(250,250,250)'} p={2} pb={'40px'}>
                  <SimpleGrid w={"full"} maxW={'1100px'} m={'auto'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                  <Box mt="40px" display="flex" justifyContent="center" alignItems="center">
  <iframe 
    width="670" 
    height="378" 
    src="https://www.youtube.com/embed/JdtMS-i2m4I" 
    title="Vasudhaiva Kutumbakam Conclave-2023" 
    frameBorder="0" 
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
    referrerPolicy="strict-origin-when-cross-origin" 
    allowFullScreen
  ></iframe>
</Box>
                    <Box pt={'40px'}>
                    <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >An exhibition</Text>
                      <Text fontSize={'4xl'} fontWeight={'bold'} >Arya Drashti: Vishwa Ki Oar</Text>
                      <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
                      <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                      An exhibition titled ‘Arya Drashti: Vishwa ki Oar’ was displayed at the conclave. It presented His Holiness’s contemporary and futuristic insights on temporal matters and His correspondence with concerned authorities. It offered a unique perspective on the global order through the lens of Arya philosophy.
                        </Text>
                     
                  </Box>
                  </SimpleGrid>
                  </Box>

                  <Box m={'20px auto'} w={'full'} maxW={'1000px'} p={2} pb={'40px'}>
                  <SimpleGrid columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
                    
                    <Box pt={'40px'}>
                    <Text fontFamily={"Poppins, sans-serif"} textTransform={'uppercase'} letterSpacing={'6.5px'} color={'gray.700'} >A Blueprint</Text>
                      <Text fontSize={'4xl'} fontWeight={'bold'} >Arya Dharmanusari Paramarsh</Text>
                      <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
                      <Text fontSize={'md'} color={'gray'} mt={'20px'}>
                      ‘Arya Dharmanusari Paramarsh’, a blueprint for a just and fair new world order based on ‘Vasudhaiva Kutumbakam’, was shared with the apex decision makers. It is an embodiment of the profound wisdom of His Holiness, meticulously drawn from ancient Indian scriptures and is tailored to resonate with prevailing global circumstances.
                          </Text>
                 
                  </Box>
                  <Box mt={'40px'}>
                      <Image 
                        src={'https://vk.jyot.in/wp-content/uploads/2024/11/arya-dharmanusari-paramarsh.jpg'}
                        width={1000}
                        height={1000}
                        style={{width:"90%",height:"auto",objectFit:"contain"}}
                      />
                    </Box>
                  </SimpleGrid>
                  </Box>
<Box bg={'rgb(249, 249, 249)'} m={'auto'} w={'full'} p={2}>
      <SimpleGrid w={'full'} maxW={'1000px'} m={'auto'} columns={{ base: 1, md: 1, lg: 2 }} spacing={6}>
        <Box>
          <Image 
            src={'https://vasudhaivakutumbakam.jyot.in/images/1-Values-are-most-valuable.jpg'}
            width={1000}
            height={1000}
            style={{width:"100%",height:"auto",objectFit:"contain"}}
          />
        </Box>
        <Box pt={'40px'}>
        <Text fontFamily={"Poppins, sans-serif"} letterSpacing={'6.5px'} color={'gray.700'} >VISION FOR FUTURE</Text>
          <Text fontSize={'4xl'} fontWeight={'bold'} >Importance Of Human Values</Text>
          <Divider mt={'10px'} w={'100px'} border={'5px solid red'} />
          <Text fontSize={'md'} color={'gray'} mt={'20px'}>
          Human values are the compass guiding our decisions and actions towards a more compassionate, ethical, and harmonious world.
         </Text>
         <NextLink href="/podcast" passHref><Link ><Button colorScheme="orange" mt={'15px'}>{"Listen Now >"}</Button></Link></NextLink>
         
      </Box>
      </SimpleGrid>
      </Box>

             
        </>
    );
}