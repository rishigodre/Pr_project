import { Flex, Image } from '@chakra-ui/react';

import { Link } from 'react-router-dom';
import Logo from '/Logo.png';
import LogoSmall from '/LogoSmall.png';

function Navbar() {
  return (
    <>
      <Flex
        justifyContent="center"
        w="14%"
        top="0"
        positon="sticky"
        float="left"
        h="100vh"
        boxShadow="0px 2px 3px lightgray"
        //pr={['15px', '30px']}
        pt="12px"
        bgColor="primaryGreen"
        zIndex="1"
        mb="4rem"
      >
        <Link to="/">
          <Image
            src={Logo}
            alt="Logo"
            display={{ base: 'none', md: 'block' }}
          />
          <Image
            src={LogoSmall}
            alt="Logo"
            display={{ base: 'block', md: 'none' }}
          />
        </Link>
      </Flex>
    </>
  );
}

export default Navbar;
