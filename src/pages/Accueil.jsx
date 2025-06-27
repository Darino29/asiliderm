import { Box, Button, Heading, Text, VStack, Image, Stack, Flex } from '@chakra-ui/react';
import { DownloadIcon, EmailIcon } from '@chakra-ui/icons';
import pdp from '../assets/images/pdp.png';
import Catalogue from '../assets/catalogue/catalogue.pdf';
import '../styles/animation.css';


const Accueil = () => {
  return (
    <Box
      p={8}
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgColor="white"
    >
      
      <Stack
        spacing={8}
        align="center"
        justify="space-between"
        w="100%"
        direction={{ base: 'column-reverse', md: 'row' }}
      >
        
        <VStack align={{ base: 'center', md: 'start' }} spacing={6} maxW={{ base: '100%', md: '50%' }} >
          <Heading as="h1" size="2xl" color="brand.500" textAlign={{ base: 'center', md: 'left' }} className='reveal'>
          Suzelle THIMON
          </Heading>
          <Text fontSize="lg" color="brand.500" textAlign={{base: 'center',md:'left'}} className='bounce-in-left' >
          COSMETIQUE ET DERMATOLOGIE
          </Text>
          <Text fontSize="sm" color="brand.500" textAlign={{ base: 'center', md: 'left' }} className='bounce-in-left' >

          Je suis une professionnelle passionnée d&apos;esthétique, spécialisée dans l&apos;import/export de produits dermo-cosmétiques de qualité. Grâce à ma solide expertise et ma connaissance des besoins de la peau, je propose des conseils personnalisés pour sublimer la peau et répondre à des besoins spécifiques. Ma mission est de vous aider à maintenir une peau saine et éclatante, avec des produits de confiance adaptés à vos besoins.
          </Text>
          <Flex gap={4} mt={6} justify="center" wrap="wrap">
            <Button
              as="a"
              href={Catalogue}
              download
              bg="accent"
              size="lg"
              variant="solid"
              className="bounce2"
            >
              <DownloadIcon />
              &nbsp;Catalogue
            </Button>

            <Button
            as="a"
            href="mailto:contact@example.com?subject=Demande%20de%20renseignements&body=Bonjour%2C%20je%20souhaite%20obtenir%20plus%20d'informations%20sur%20vos%20produits."
            bg="accent"
            size="lg"
            variant="solid"
            className="bounce1"
>
              <EmailIcon />
              &nbsp; Me Contacter
            </Button>
          </Flex>
                  </VStack>

        {/* PDP (Photo de profil) */}
        <Image
          src={pdp}
          alt="Photo de Suzelle"
          mt={{ base: '50px', md:'none'}}
          boxSize={{ base: '200px', md: '400px' }}
          borderRadius={{base:"full", md: "full"}}
          objectFit="cover"
          border={{base:'5px solid teal',md: 'none'}}
          className='grow'
          
        />
      </Stack>
    </Box>
  );
};

export default Accueil;
