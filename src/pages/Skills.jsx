import { Box, Heading, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useRef } from 'react';
import SkillCard from '../components/skillCard/SkillCard';
import biodermaLogo from '../assets/images/bioderma.png';
import noreva from '../assets/images/noreva.png';
import roche from '../assets/images/roche.png';

const Skills = () => {
  const scrollRef = useRef(null);

  const skills = [
    { title: 'Uriage', logo: 'https://cdn.uriage.fr/var/images/logo.svg' },
    { title: 'Nuhanciam', logo: 'https://nuhanciam.com/cdn/shop/files/nuhanciam-logo-nouveau.svg?v=1733312026&width=368' },
    { title: 'Nubiance', logo: 'https://nubiance.fr/cdn/shop/files/logo-noir-fond-transparent_cf4cf61d-812e-4fbd-a907-52909196a0f1.png?v=1673015857&width=320' },
    { title: 'CeraVe', logo: 'https://www.cerave.fr/-/media/project/loreal/brand-sites/cerave/emea/fr/fr-all-product-details-latest/cerave-logo/cerave-header-logo-fr.svg' },
    { title: 'Etiaxil', logo: 'https://www.etiaxil.fr/theme/etiaxil/img/logo-dark@2x.png' },
    { title: 'La Roche-Posay', logo: roche },
    { title: 'Bioderma', logo: biodermaLogo },
    { title: 'SVR', logo: 'https://fr.svr.com/cdn/shop/files/logo-SVR.png?crop=center&height=61&v=1613793556&width=120' },
    { title: 'Noreva', logo: noreva },
   ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        const rowHeight = 200; // estimation d’une rangée (~4 cartes hauteur moyenne)
        scrollRef.current.scrollBy({
          top: rowHeight,
          behavior: 'smooth',
        });

        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
        if (scrollTop + clientHeight >= scrollHeight - 1) {
          scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box p={20}>
      <Heading as="h2" size="xl" mb={6} color="#C89F72" textAlign="center">
        Mes marques
      </Heading>

      <Box
        ref={scrollRef}
        maxH="70vh"
        overflowY="auto"
        pr={2}
        css={{
          scrollBehavior: 'smooth',
          '&::-webkit-scrollbar': { display: 'none' },
        }}
      >
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing={4}>
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Skills;
