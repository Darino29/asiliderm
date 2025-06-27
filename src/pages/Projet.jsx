import { Box, Flex, Heading, Text, Image, useColorModeValue } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';

const Projet = () => {
  const scrollRef = useRef(null);
  const bg = useColorModeValue('brand.100', 'gray.800');
  const cardBg = useColorModeValue('brand.50', 'gray.700');
  const headingColor = useColorModeValue('brand.900', 'brand.100');
  const textColor = useColorModeValue('brand.900', 'brand.50');

  const projets = [
    {
      title: 'Uriage Eau Thermale Lait Velouté Corps Hydratant Peaux Sèches Sensibles 500ml',
      description: 'Un sérum à la vitamine C pour un teint lumineux.',
      link: '#',
      image: 'https://assets.atida.com/transform/cb78c632-ef2f-4d2b-bdd7-bbd6417170e4/Uriage-Eau-Thermale-Lait-Veloute-Corps-Hydratant-Peaux-Seches-Sensibles-500ml?format=webp&io=transform%3Aextend%2Cwidth%3A600%2Cheight%3A600',
    },
    {
      title: 'Sérum Anti-Taches Puissance 4, 30ml',
      description: 'Sérum anti-taches pour peaux mates à foncées, efficace sur la plupart des taches pigmentaires du visage et du corps',
      link: '#',
      image: 'https://www.boticinal.com/media/catalog/product/p/o/powersante-nuhanciam-serum-anti-taches-puissance-4-30-ml.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg',
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
    <Box p={8} minH="100vh" bg={bg}>
      <Heading as="h1" size="xl" mb={6} textAlign="center" color={headingColor}>
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
            position="relative"
            minW="280px"
            maxW="300px"
            bg={cardBg}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="md"
            transition="transform 0.3s ease"
            _hover={{ transform: 'scale(1.03)', boxShadow: 'lg' }}
            flex="0 0 auto"
          >
            <Image
              src={projet.image}
              alt={projet.title}
              objectFit="cover"
              w="100%"
              h="260px"
            />
            <Box
              position="absolute"
              bottom="0"
              w="100%"
              bg="rgba(0, 0, 0, 0.6)"
              color="white"
              p={3}
            >
              <Heading size="sm" mb={1}>
                {projet.title}
              </Heading>
              <Text fontSize="xs" mb={1}>
                {projet.description}
              </Text>
              <Text as="a" href={projet.link} fontSize="xs" fontWeight="bold" textDecoration="underline">
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
