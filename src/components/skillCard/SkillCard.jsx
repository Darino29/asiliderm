import { Box, Image,  Center } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SkillCard = ({ logo, title }) => (
  <Box
    className="skill-card"
    borderWidth="1px"
    borderRadius="lg"
    overflow="hidden"
    bg="brand.100"
    textAlign="center"
    padding="4"
  >
    <Center>
      <Image src={logo} alt={title} boxSize="80px" objectFit="contain" />
    </Center>
    {/* <Text fontWeight="bold" fontSize="xl" color="white" mt={2}>
      {title}
    </Text> */}
  </Box>
);

SkillCard.propTypes = {
    logo: PropTypes.string.isRequired,     
    title: PropTypes.string.isRequired,      
  };



export default SkillCard;
