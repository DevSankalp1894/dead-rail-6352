

 import {Flex,AspectRatio,Stack,Box,Heading,Text,Button,Image, HStack,VStack} from '@chakra-ui/react';

  //https://www.airtable.com/_next/static/media/why-airtable.f77370a5.jpg
 function Body() {
     return (
         <>
         
         <Flex direction='row' align='center' bg='#C6F6D5'>
             <Box w='60%' mt='3%'  >
           <Box>
             <Box w='33%' ml='300px'>
           <Text fontSize='68px' fontWeight='500' lineHeight='1.15' color='hsl(0,0%,20%)'
             fonts=' HaasText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'>Connect </Text>
             </Box>
             <Box w='40%' ml='300px'>
           <Text fontSize='68px' fontWeight='500' lineHeight='1.15' color='hsl(0,0%,20%)'
             fonts=' HaasText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'>everything</Text>
             </Box>
             <Box w='30%' ml='300px'>
           <Text fontSize='68px' fontWeight='500' lineHeight='1.15' color='hsl(0,0%,20%)'
             fonts=' HaasText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'> Achieve</Text>
             </Box>
             <Box w='33%' ml='300px'>
           <Text fontSize='68px' fontWeight='500' lineHeight='1.15' color='hsl(0,0%,20%)'
             fonts=' HaasText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'> anything</Text>
             </Box>
             </Box>
             <Box   mt='5' >
                 <Box w='47%' ml='300px'>
              <Text
              fontWeight='500'
              fontSize='23px' lineHeight='1.35'  color='hsl(0,0%,20%)'
              >Accelerate work and unlock potential</Text>
              </Box>
            <Box w='60%' ml='300px'>
            <Text
              fontWeight='500' 
              fontSize='23px' lineHeight='1.35'  color='hsl(0,0%,20%)'
              > powerful apps that conect your data workflows</Text>
   </Box>
   <Box w='29%' ml='300px'>
 <Text
              fontWeight='500'
              fontSize='23px' lineHeight='1.35'  color='hsl(0,0%,20%)'
              >and teams. This is how.</Text>
              </Box>
           <Box>
           <Button mt='4' w='30%'variant='solid' colorScheme='blue'>Signup for free</Button>
           </Box>
             </Box>
           </Box>
    
         <Box w='50%'>
  <Image   mt='8%'borderRadius='5%' width='90%' height='400px' mr='10%' 
    title='naruto'
    src='https://i.pinimg.com/originals/c8/b6/33/c8b6337757992b2d470611736191923c.jpg'
   
  />
  </Box>  

     
       
 
         </Flex>

              <Flex bg='RGBA(0, 0, 0, 0.06)' w='100%' h='90px'>
         <HStack spacing='150px' mt='5' ml='10%'>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/Levis.svg'/>
            </Box>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/spotify.svg'/>
            </Box>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/netflix.svg'/>
            </Box>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/intuit.svg'/>
            </Box>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/shopify.svg'/>
            </Box>
            <Box>
                <Image src='https://www.airtable.com/images/home/logobar/time.svg'/>
            </Box>
           
         </HStack>
         </Flex>
         <VStack mt='10'>
            <Box>
                <Text  color='hsl(0,0%,20%)' fontSize='4rem' lineHeight='1.25' fontWeight='500'>Create Solutions that</Text>
            </Box>
            <Box>
                <Text  color='hsl(0,0%,20%)' lineHeight='1.15'fontSize='4rem' fontWeight='500'>Mirror your business</Text>
            </Box>
            <Box>
                <Text></Text>
            </Box>
            <Box>
                <Text lineHeight='1.35'fontSize='xl' fontWeight='400'>Move work forward faster with no-code apps that perfectly match</Text>
            </Box>
            <Box>
                <Text lineHeight='1.35' fontSize='xl' fontWeight='400'>your team’s agility and scale.</Text>
            </Box>
         </VStack>
         <Flex mt='5%' gap='50px' bg='#F0FFF4'>
             <Box w='70%' mt='8%'>
                <Box>
                    <Text fontSize='4xl' fontWeight='500' lineHeight='1.25'>Airtable is your organization's single  </Text>
                </Box>
                <Box >
                <Text ml='59px'fontSize='4xl' fontWeight='500' lineHeight='1.25'>source of truth. It's how teams, data, and</Text>
                </Box>
                <Box>
                <Text ml='60px'fontSize='4xl' fontWeight='500' lineHeight='1.25'>workflows are deeply connected by apps</Text>
                </Box>
                <Box w='60%'>
                <Text fontSize='4xl' fontWeight='500' lineHeight='1.25'> anyone can build.</Text>
                </Box>
             </Box>
             <Box w='60%'>
                <Image borderRadius='5%' w='100%' src='https://www.airtable.com/_next/static/media/why-airtable.f77370a5.jpg'/>
             </Box>
         </Flex>
         </>
     )
 }
 
   export default Body;