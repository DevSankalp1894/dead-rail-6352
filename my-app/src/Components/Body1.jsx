
 import {Stack,Box,Heading,Text,Button,Image, HStack,VStack} from '@chakra-ui/react';
//    color: hsl(0,0%,20%);
// font-weight: 500;
// font-size: 48px;
// line-height: 1.15;
function Body1() {
    return (
        <>
        <Stack direction='row' align='center'>
          <Box>
            <Box w='35%'>
          <Text fontSize='68px' fontWeight='500' lineHeight='1.15' color='hsl(0,0%,20%)'
            fonts=' HaasText,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif'>Connect everything Achieve anything</Text>
            </Box>
            <Box w='40%' ml='7' mt='5'>
             <Text
             fontWeight='500'
             fontSize='20px' lineHeight='1.35'  color='hsl(0,0%,20%)'
             >Accelerate work and unlock potential with powerful apps that connect your data, workflows and teams. This is how.</Text>
            </Box>
          </Box>
        </Stack>
        </>
    )
}

  export default Body1;