import { range } from 'lodash';

import { useSelector, useDispatch } from 'store/hooks';
import { makeSelectImage, makeSelectSettings } from 'store';

import { ShuffledPuzzlesStyled, Puzzle } from './_styles';

export const ShuffledPuzzles: React.FC = () => {
  const settings = useSelector(makeSelectSettings);
  const image = useSelector(makeSelectImage);
  const dispatch = useDispatch();

  const puzzlesInLine = Math.sqrt(settings.puzzlesQuantity);

  const sizeOfPuzzleInPercent = 100 / puzzlesInLine;
  const sizeOfPuzzleInPx = 500 / puzzlesInLine;

  return (
    <ShuffledPuzzlesStyled>
      {image && range(settings.puzzlesQuantity).map((puzzleIndex) => {
        const leftOffsetInPx = 500 - (puzzleIndex % puzzlesInLine * sizeOfPuzzleInPx);
        const topOffsetInPx = 500 - (Math.floor(puzzleIndex / puzzlesInLine) * sizeOfPuzzleInPx);

        return (
          <Puzzle
            image={image}
            size={sizeOfPuzzleInPercent}
            leftOffset={leftOffsetInPx}
            topOffset={topOffsetInPx}
          />
        );
      })}
    </ShuffledPuzzlesStyled>
  );
};
