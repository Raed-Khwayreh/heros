type data = {
  image: string;
};
import {Image} from 'react-native';
const HeroImage = (image: data) => {
  const heroImage =
    image.image === 'Spiderman'
      ? require('../../assets/images/spiderman.png')
      : image.image === 'Batman'
      ? require('../../assets/images/batman.jpeg')
      : image.image === 'Superman'
      ? require('../../assets/images/superman.jpg')
      : image.image === 'Thor'
      ? require('../../assets/images/thor.jpg')
      : image.image === 'Ironman'
      ? require('../../assets/images/iron.jpg')
      : image.image === 'Hulk'
      ? require('../../assets/images/hulk.jpg')
      : require('../../assets/images/marvel.jpg');
  return (
    <Image
      style={{height: 100, width: 100, borderRadius: 15}}
      source={heroImage}></Image>
  );
};
export default HeroImage;
