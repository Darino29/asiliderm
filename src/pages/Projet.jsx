import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import Catalogue from "../assets/catalogue/catalogue.pdf";
import { useEffect, useRef } from "react";

const Projet = () => {
  const scrollRef = useRef(null);
  const bg = useColorModeValue("brand.100", "gray.800");
  const cardBg = useColorModeValue("brand.50", "brand.50");
  const headingColor = useColorModeValue("brand.900", "brand.100");
  const textColor = useColorModeValue("brand.900", "brand.900");

  const projets = [
    {
      title:
        "Uriage Eau Thermale Lait Velouté Corps Hydratant Peaux Sèches Sensibles 500ml",
      description:
        "Ce lait velouté, fluide et onctueux, fusionne immédiatement avec la peau pour l’hydrater intensément, la lisser et la réconforter.",
      link: "#",
      image:
        "https://assets.atida.com/transform/cb78c632-ef2f-4d2b-bdd7-bbd6417170e4/Uriage-Eau-Thermale-Lait-Veloute-Corps-Hydratant-Peaux-Seches-Sensibles-500ml?format=webp&io=transform%3Aextend%2Cwidth%3A600%2Cheight%3A600",
    },
    {
      title: "Sérum Anti-Taches Puissance 4, 30ml",
      description:
        "Sérum anti-taches pour peaux mates à foncées, efficace sur la plupart des taches pigmentaires du visage et du corps",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/p/o/powersante-nuhanciam-serum-anti-taches-puissance-4-30-ml.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    },
    {
      title:
        "Gel Nettoyant Anti-imperfections - Visage - Peaux Mixtes à Grasses, 200ml",
      description:
        "Le Gel Nettoyant Cleanactyl idéal pour peaux mixtes à grasses, élimine impuretés et excès de sébum pour un teint éclatant sans imperfections.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/n/u/nubiance-cleanactyl-gel-nettoyant-200ml-boticinal.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title: "EFFACLAR - Eau Micellaire Ultra Peaux Grasses Lot de 2, 2x400ml",
      description:
        "Une lotion très fraîche conçue pour nettoyer, purifier et apaiser en un seul geste les peaux grasses ou sensibles.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/p/o/powersante-la-roche-posay-effaclar-eau-micellaire-ultra-peaux-grasses-2x400-ml_2.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    },
    {
      title:
        "ATODERM - Crème Ultra-Nourrissante et Hydratante - Visage et Corps - Peaux Sensibles Normales à Sèches, 2x500ml",
      description:
        "Crème ultra-nourrissante pour soulager l’inconfort des peaux sensibles normales à sèches.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/a/t/atoder_1_3.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title:
        "TOPIALYSE - Gel Lavant Apaisant & Hydratant 24h Peaux Sensibles, 1L",
      description:
        "Un gel lavant pour les peaux sensibles de toute la famille.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/s/v/svr-topialyse-gel-boticinal.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title:
        "DAY PROTOCOLE - Crème de Jour 4 en 1 Anti-Âge SPF50 - Peaux Mixtes à Grasses, 50ml",
      description:
        "Ce produit est destiné à hydrater la peau et à la protéger efficacement des agressions du quotidien.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/d/e/dermeden-day-protocole-creme-de-jour-4-en-1-anti-age-spf50-50ml-boticinal-1.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    },
    {
      title:
        "ALPHA KM - Soin Raffermissant - Corps - Tous Types de Peaux, 2x200ml",
      description:
        "Soin de prévention anti-âge qui aide à lisser la peau en surface et à la raffermir en agissant en profondeur sur les zones ciblées.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/n/o/noreva-alpha-km-soin-anti-age-raffermissant-corporel-200ml_12112012114917_3.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title:
        "IKLEN + [PURE-C-REVERSE] - Trio Sérum Booster Perfecteur Régénérant - Tous Types de Peaux, 3x8ml",
      description:
        "Noreva Iklen+ [Pure-C-Reverse] Sérum Booster Perfecteur Régénérant 3x8ml est un sérum booster anti-âge et anti-taches.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/n/o/noreva-iklen-serum-booster-perfecteur-trio-boticinal.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title: "BÉBÉ - Gel Lavant Doux à l'avocat - Peau Normale, 500ml",
      description:
        "Un gel lavant sans savon spécialement conçu pour la toilette des enfants et des bébés dès la naissance.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/m/u/mustela-bebe-gel-lavant-doux-500ml.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title:
        "ULTRA-HYDRATANT - Lait Corps - Peaux Sensibles et Sèches, 2x500ml",
      description:
        "Lait ultra-hydratant pour les peaux sensibles des enfants et des adultes",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/t/o/topicrem-ultra-hydratant-lait-corps-duo.jpg?quality=80&fit=bounds&height=700&width=700&canvas=700:700",
    },
    {
      title: "Détranspirant - Aisselles Peaux Sensibles Roll-On, Lot de 2x15ml",
      description:
        "Détranspirant Roll-on idéal pour lutter contre la transpiration excessive.",
      link: "#",
      image:
        "https://www.boticinal.com/media/catalog/product/3/6/3614810000623_etiaxil_detrans_ps_hero_lot2_p00.png?quality=80&fit=bounds&height=700&width=700&canvas=700:700&format=jpeg",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });

        const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
        if (scrollLeft + clientWidth >= scrollWidth - 1) {
          scrollRef.current.scrollTo({ left: 0, behavior: "smooth" });
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
          scrollBehavior: "smooth",
          "&::-webkit-scrollbar": { display: "none" },
        }}
      >
        {projets.map((projet, index) => (
          <Flex
            key={index}
            direction="column"
            minW="280px"
            maxW="300px"
            bg={cardBg}
            borderRadius="xl"
            overflow="hidden"
            boxShadow="sm"
            transition="all 0.3s ease"
            _hover={{ transform: "scale(1.03)", boxShadow: "lg" }}
            flex="0 0 auto"
            justify="space-between"
          >
            <Image
              src={projet.image}
              alt={projet.title}
              objectFit="contain"
              w="100%"
              h="280px" // 🧴 Hauteur augmentée
              p={4}
            />
            <Flex
              direction="column"
              p={4}
              h="100%"
              justify="space-between"
              flex="1"
            >
              <Box mb={3}>
                <Heading size="sm" mb={1} color="brand.500" noOfLines={2}>
                  {projet.title}
                </Heading>
                <Text fontSize="xs" color={textColor} noOfLines={3}>
                  {projet.description}
                </Text>
              </Box>
              <Text
                as="a"
                href={Catalogue}
                download
                fontSize="sm"
                color="accent"
                fontWeight="bold"
                mt="auto"
              >
                En savoir plus →
              </Text>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Box>
  );
};

export default Projet;
