import { Flex, Text, Button } from '@chakra-ui/react';
import { FiEdit } from 'react-icons/fi';
import { MdDelete } from 'react-icons/md';

function Prescriptions() {
  return (
    <>
      <Flex>
        <Text
          color="primaryGreen"
          pl={['4rem']}
          fontSize={['0.8rem', '1.8rem']}
          fontWeight="300"
          mb="3rem"
        >
          PRESCREPTIONS
        </Text>
      </Flex>

      <Flex zIndex="1" pl={['4rem']}>
        <Flex
          boxShadow="0px 2px 3px lightgray"
          bgColor="primaryGreen"
          h="11.125rem"
          w="9rem"
          borderLeftRadius="1rem"
          flexDirection="column"
          align="center"
          fontFamily="Source Code Pro"
        >
          <Flex
            mt="0.7rem"
            h="3.5rem"
            w="3.5rem"
            borderRadius="3.5rem"
            bgColor="grey"
          ></Flex>
          <Flex mt="1rem">
            <Text color="White" fontWeight="500" fontSize="1.3rem">
              Name
            </Text>
          </Flex>
          <Flex>
            <Text color="White" fontWeight="400" fontSize="0.9rem">
              Age-XX Sex-M/F
            </Text>
          </Flex>
          <Flex>
            <Text color="White" fontWeight="400" fontSize="0.7rem">
              Date and Time
            </Text>
          </Flex>
        </Flex>

        <Flex
          boxShadow="0px 2px 3px lightgray"
          h="11.125rem"
          w="31.125rem"
          borderRightRadius="1rem"
          flexDirection="column"
        >
          <Flex fontFamily="Source Code Pro" pl="1.9rem" pt="0.3rem">
            <Text fontWeight="400" fontSize="1.5rem" pr="16rem">
              Headline
            </Text>
            <FiEdit size="1.5rem" />
            <MdDelete size="1.5rem" />
          </Flex>

          <Flex>
            <Text fontFamily="Source Code Pro" w="25rem" pl="2rem" pt="1rem">
              Please add your content here. Keep it short and simple. And smile
              :)
            </Text>
          </Flex>

          <Flex px="2rem" fontFamily="Source Code Pro" pt="1rem">
            <Button
              mr="1.8rem"
              borderColor="primaryGreen"
              borderWidth="2px"
              borderRadius="1.2rem"
            >
              Med 1
            </Button>
            <Button
              mr="1.8rem"
              borderColor="primaryGreen"
              borderWidth="2px"
              borderRadius="1.2rem"
            >
              Med 2
            </Button>
            <Button
              mr="1.8rem"
              borderColor="primaryGreen"
              borderWidth="2px"
              borderRadius="1.2rem"
            >
              Med 3
            </Button>
            <Button
              borderColor="primaryGreen"
              borderWidth="2px"
              borderRadius="1.2rem"
            >
              Med 4
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
}

export default Prescriptions;
