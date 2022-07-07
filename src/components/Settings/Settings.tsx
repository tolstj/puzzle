import { useSelector, useDispatch } from 'store/hooks';

import { makeSelectSettings } from 'store';
import { decreasePuzzlesQuantity, increasePuzzlesQuantity } from 'store';

export const Settings: React.FC = () => {
  const settings = useSelector(makeSelectSettings);
  const dispatch = useDispatch();

  const decreasePuzzles = () => {
    dispatch(decreasePuzzlesQuantity());
  };

  const increasePuzzles = () => {
    dispatch(increasePuzzlesQuantity());
  };

  return (
    <div>
      <button onClick={decreasePuzzles}>-</button>
      {settings.puzzlesQuantity}
      <button onClick={increasePuzzles}>+</button>
    </div>
  );
};
