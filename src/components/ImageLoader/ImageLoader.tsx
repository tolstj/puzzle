import { useSelector, useDispatch } from 'store/hooks';
import { makeSelectImage } from 'store';
import { setImage } from 'store';

import { PreviewImage } from './_styles';

export const ImageLoader: React.FC = () => {
  const image = useSelector(makeSelectImage);
  const dispatch = useDispatch();

  const onSelectImage = (eventOnSelect: React.ChangeEvent<HTMLInputElement>) => {
    if (eventOnSelect.target.files) {
      const imageFile = eventOnSelect.target.files[0];
      
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const imageInBase64 = fileReader.result as string;
        if (imageInBase64) {
          dispatch(setImage({ imageInBase64 }));
        }
      };
    
      fileReader.readAsDataURL(imageFile);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={onSelectImage} />
      {image && <PreviewImage src={image} />}
    </div>
  );
};
