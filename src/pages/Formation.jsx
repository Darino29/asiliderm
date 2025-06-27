import { Box, Heading, Text, Flex, VStack } from '@chakra-ui/react';

const Formation = () => {
  const formations = [
    {
      year: '2024',
      diploma: 'Mastere Expert IT Développement et Big Data',
      institution: 'ECOLE IRIS',
    },
    {
      year: '2023',
      diploma: 'Bachelor 2/3',
      institution: 'ESIEA',
    },
    {
      year: '2022',
      diploma: 'Licence Informatique Appliquée',
      institution: 'UNIVERSITÉ DE LIMOGES ET UNIVERSITÉ DES MASCAREIGNES',
    },
  ];

  return (
    <Box p={8} minH="100vh" bg="gray.900" color="white">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Formations
      </Heading>

      <VStack spacing={4} align="stretch">
        {formations.map((formation, index) => (
          <Flex
            key={index}
            justify="space-between"
            p={4}
            bg="gray.800"
            borderRadius="8px"
            boxShadow="lg"
          >
            <Text fontWeight="bold">{formation.year}</Text>
            <VStack align="end">
              <Text>{formation.diploma}</Text>
              <Text fontSize="sm" color="gray.300">{formation.institution}</Text>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};

export default Formation;
