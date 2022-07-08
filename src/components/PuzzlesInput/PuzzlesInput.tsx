import { useSelector, useDispatch } from 'store/hooks';

import { makeSelectSettings } from 'store';

import { PuzzlesInputStyled } from './_styles';

export const PuzzlesInput: React.FC = () => {
  const settings = useSelector(makeSelectSettings);
  const dispatch = useDispatch();

  const puzzlesInLine = Math.sqrt(settings.puzzlesQuantity);

  return (
    <PuzzlesInputStyled>

    </PuzzlesInputStyled>
  );
};
