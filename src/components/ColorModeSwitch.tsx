import {
  HStack,
  IconButton,
  Switch,
  Text,
  useColorMode,
} from '@chakra-ui/react';
import { BsGithub } from 'react-icons/bs';

function ColorModeSwitch() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack>
      <Switch colorScheme="green" onChange={toggleColorMode} />
      <Text whiteSpace={'nowrap'}>
        {colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode
      </Text>

      <a
        target="_blank"
        rel="noopener"
        href="https://github.com/AbhavThakur"
        aria-label="GitHub"
      >
        <IconButton aria-label="Github" icon={<BsGithub />} />
      </a>
    </HStack>
  );
}

export default ColorModeSwitch;
