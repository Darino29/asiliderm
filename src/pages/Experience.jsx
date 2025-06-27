import { Box, Heading, VStack, Text, useBreakpointValue } from '@chakra-ui/react';

const Experience = () => {
  const experiences = [
    {
      year: ' Juil 2024',
      position: 'Employé polyvalent',
      company: 'carrefour Chilly-Mazarin',
      description: 'Job été: Mise en rayon des produits, facing et caisse',
    },
    {
      year: 'Nov 2023 - Decembre 2023',
      position: 'Freelance',
      company: 'DIGEIZ',
      description: 'Traitement de donnée',
    },
    {
      year: 'Juin 2022 - Août 2022',
      position: 'Stagiaire Développeur',
      company: 'Groupe GDS LTD Mauritius',
      description: 'Développement d&apos; un IA qui reconnaît les caractère sur les panneaux ',
    },
    {
        year: 'Juin 2021 - Août 2021',
        position: 'Stagiaire Chef de projet IT',
        company: 'Mineral Creative Furnitures LTD Mauritius',
        description: 'Supervision dune equipe de developpeurs',
      },
  ];

 
  const isMobile = useBreakpointValue({ base: true, md: false }); //verification taille d'ecran comme dans MUI

  return (
    <Box p={8} minH="100vh" bg="gray.900" color="white">
      <Heading as="h1" size="xl" mb={6} textAlign="center">
        Expériences Professionnelles
      </Heading>

      <VStack spacing={4} align="stretch">
        {experiences.map((experience, index) => (
          <Box
            key={index}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            bg="gray.800"
            shadow="md"
            width="100%"
            textAlign={isMobile ? 'left' : 'center'} >
            <Text fontWeight="bold" fontSize="lg" color="teal.300">{experience.year}</Text>
            <Text fontSize="lg" fontWeight="bold">{experience.position}</Text>
            <Text>{experience.company}</Text>
            <Text mt={2}>{experience.description}</Text>
          </Box>
        ))}
      </VStack>
    </Box>
  );
};

export default Experience;
