import React, { useState } from 'react';

import { PreviewImage } from './_styles';

const App = () => {
  const [image, setImage] = useState<null | string>(null);

  const onSelectImage = (eventOnSelect: React.ChangeEvent<HTMLInputElement>) => {
    if (eventOnSelect.target.files) {
      const imageFile = eventOnSelect.target.files[0];
      
      const fileReader = new FileReader();
      fileReader.onload = () => {
        const result = fileReader.result as string;
        if (result) {
          setImage(result);
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

export default App;
