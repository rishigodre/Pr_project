import { Text, Heading, Box, Image, Flex, Button } from '@chakra-ui/react';
import home from '/home.png';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <Flex
        alignItems="center"
        justifyContent="space-around"
        mt="5rem"
        direction={{ base: 'column', lg: 'row' }}
        px="1rem"
        mx="1rem"
      >
        <Box
          maxW="39rem"
          minW={{ base: 'auto', md: '29rem' }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          order={{ base: '1', md: '0' }}
        >
          <Heading color="primaryGreen" mb="2rem" textAlign="center" size="2xl">
            Creating prescriptions at Ease.
          </Heading>
          <Text fontSize="xl" textAlign="center" mb="1rem">
            APD creates quick prescriptions with a qr for person-less medicine
            disposal
          </Text>

          <Button
            backgroundColor="primaryGreen"
            color="white"
            _hover={{ bg: 'highlightGreen' }}
            onClick={() => {
              navigate('/OrderList');
            }}
          >
            Place Order
          </Button>
        </Box>
        <Box>
          <Image src={home} alt="Landing Image" />
        </Box>
      </Flex>
    </>
  );
};

export default Hero;
