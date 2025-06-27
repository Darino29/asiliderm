import { Box, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const Projet = () => {
  const scrollRef = useRef(null);

  const projets = [
    {
      title: 'Sérum Éclat',
      description: 'Un sérum à la vitamine C pour un teint lumineux.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Serum+Eclat',
    },
    {
      title: 'Crème Hydra+',
      description: 'Hydratation intense pour les peaux sèches.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Creme+Hydra+',
    },
    {
      title: 'Gel Nettoyant',
      description: 'Nettoyage doux pour peaux sensibles.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Gel+Nettoyant',
    },
    {
      title: 'Fluide Matifiant',
      description: 'Unifie et matifie les peaux mixtes.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Fluide+Matifiant',
    },
    {
      title: 'Produit Cosméto 5',
      description: 'Description courte pour le produit numéro 5.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+5',
    },
    {
      title: 'Produit Cosméto 6',
      description: 'Description courte pour le produit numéro 6.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+6',
    },
    {
      title: 'Produit Cosméto 7',
      description: 'Description courte pour le produit numéro 7.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+7',
    },
    {
      title: 'Produit Cosméto 8',
      description: 'Description courte pour le produit numéro 8.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+8',
    },
    {
      title: 'Produit Cosméto 9',
      description: 'Description courte pour le produit numéro 9.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+9',
    },
    {
      title: 'Produit Cosméto 10',
      description: 'Description courte pour le produit numéro 10.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+10',
    },
    {
      title: 'Produit Cosméto 11',
      description: 'Description courte pour le produit numéro 11.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+11',
    },
    {
      title: 'Produit Cosméto 12',
      description: 'Description courte pour le produit numéro 12.',
      link: '#',
      image: 'https://via.placeholder.com/300x200?text=Produit+12',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: 'smooth',
        });

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: 'smooth' });
        }
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={8} minH="100vh" bgColor="#E7C7A4">
      <Heading as="h1" size="xl" mb={6} textAlign="center" color="#5E412F">
        Nos Produits Cosmétiques
      </Heading>

      <Flex
        ref={scrollRef}
        overflowX="auto"
        gap={6}
        p={4}
        css={{
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        {projets.map((projet, index) => (
          <Box
            key={index}
            minW="280px"
            maxW="300px"
            bg="#fffaf5"
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
            flex="0 0 auto"
          >
            <Image src={projet.image} alt={projet.title} objectFit="cover" w="100%" h="200px" />
            <Box p={4}>
              <Heading size="md" mb={2} color="#C89F72">
                {projet.title}
              </Heading>
              <Text fontSize="sm" color="#5E412F" mb={2}>
                {projet.description}
              </Text>
              <Text as="a" href={projet.link} fontSize="sm" color="#faaf40" fontWeight="bold">
                En savoir plus →
              </Text>
            </Box>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Projet;
