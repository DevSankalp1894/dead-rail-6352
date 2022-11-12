

 import {Box,Text,Image, HStack, Heading,Button,ButtonGroup } from '@chakra-ui/react';
  import React from 'react'
 function Navbar() {
    return(
        
        <Box>
            <HStack h='100px' bg='RGBA(0, 0, 0, 0.06)'>
                <Box >
       <Image ml='10'boxSize='45px' src='data:image/png;base64,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'/>
         </Box>
         <Box>
       <Heading fontSize='3xl'>Airtable</Heading>
       </Box>
       <Box ml='30' w='40%'>
         <Text color='
     RGBA(0, 0, 0, 0.70)'fontSize='15px' as='b'>Products  ></Text>
         <Text ml='7' color='
     RGBA(0, 0, 0, 0.70)'fontSize='15px' as='b'>Solutions ></Text>
         <Text  ml='7' color='
     RGBA(0, 0, 0, 0.70)'fontSize='15px' as='b'>Pricing</Text>
         <Text  ml='7' color='
     RGBA(0, 0, 0, 0.70)'fontSize='15px' as='b'>Enterprises ></Text>
         <Text  ml='7' color='
     RGBA(0, 0, 0, 0.70)'fontSize='15px' as='b'>Resources ></Text>
        
       </Box>
       <Box   w='50%' direction='row' align='center'>
         <Button ml='30%' variant='outline'>Contact sales</Button>
         <Button ml='5'variant='solid' colorScheme='blue'>Signup for free</Button>
         <Button ml='5'variant='link'>Sign in</Button>
       </Box>
       </HStack>
        </Box>
     
        
    )
}

  export default Navbar;