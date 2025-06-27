import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { Text, Link, Image, Stack, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, Card, CardBody } from '@chakra-ui/react';

const ProjectCard = ({ title, description, link, image }) => {
  const [style, api] = useSpring(() => ({
    opacity: 0,
    transform: 'translateY(20px)',
  }));

  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    api.start({ opacity: 1, transform: 'translateY(0)', config: { tension: 300, friction: 20 } });
  }, [api]);

  return (
    <animated.div style={style}>
      <Card
        className="project-card"
        bg="gray.800"
        borderRadius="8px"
        boxShadow="lg"
        transition="transform 0.3s"
        _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
        maxW="350px"  
        height="400px" 
        display="flex"
        flexDirection="column"
        justifyContent="space-between" 
      >
        <CardBody>
          {image && (
            <Image
              src={image}
              alt={title}
              borderRadius="8px"
              mb={3}
              boxSize="100%"
              height="200px" 
              objectFit="cover"
              onClick={() => setIsOpen(true)}
              cursor="pointer"
            />
          )}
          <Stack spacing={2}>
            <Text fontSize="xl" fontWeight="bold" color="white" noOfLines={1}>
              {title}
            </Text>
            <Text color="gray.300" noOfLines={2}>
              {description}
            </Text>
            <Link href={link} target="_blank" rel="noopener noreferrer" color="teal.300" mt={2} display="inline-block">
              Lien
            </Link>
          </Stack>
        </CardBody>
      </Card>

     
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} size="4xl">
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton bg="black"
            color="white"
            _hover={{ bg: 'gray.700'}}
          />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Image src={image} alt={title} boxSize="100%" objectFit="contain" />
          </ModalBody>
        </ModalContent>
      </Modal>
    </animated.div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string,
};

export default ProjectCard;
