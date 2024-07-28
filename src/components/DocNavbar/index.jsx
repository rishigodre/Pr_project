import { Flex, Spacer, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import DocDefault from '/DocDefault.png';

function Navbar() {
  //const navigate = useNavigate();

  return (
    <>
      <Flex
        align="center"
        w="86%"
        top="0"
        positon="sticky"
        h={['60px', '110px']}
        boxShadow="0px 2px 3px lightgray"
        pr={['15px', '30px']}
        zIndex="1"
        mb="4rem"
      >
        <Text color="#005856" pl={['3rem']} fontSize="2.2rem" fontWeight="600">
          Welcome Dr. XYZ
        </Text>
        <Spacer />
        {/* there is some confusion regarding this link tag */}
        <Link to="/">
          <Image src={DocDefault} alt="DocDefault" />
        </Link>
      </Flex>
    </>
  );
}

export default Navbar;