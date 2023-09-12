import { Image } from '@chakra-ui/react';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import thumbsUp from '../assets/thumbs-up.webp';
interface Props {
  rating: number;
}
function Emoji({ rating }: Props) {
  const emojiMap: {
    [key: number]: { src: string; alt: string; boxSize: string };
  } = {
    3: {
      src: meh,
      alt: 'Meh',
      boxSize: '25px',
    },
    4: {
      src: thumbsUp,
      alt: 'recommended',
      boxSize: '25px',
    },
    5: {
      src: bullsEye,
      alt: 'exceptional',
      boxSize: '35px',
    },
  };
  return (
    <Image
      marginTop={1}
      src={emojiMap[rating].src}
      alt={emojiMap[rating].alt}
      boxSize={emojiMap[rating].boxSize}
    />
  );
}

export default Emoji;
