import ImageGallery from 'react-image-gallery';

interface PropsType {
  images: { original: string; thumbnail: string }[];
}
const MyGallery = ({ images }: PropsType): JSX.Element => {
  return <ImageGallery items={images} />;
};

export default MyGallery;
