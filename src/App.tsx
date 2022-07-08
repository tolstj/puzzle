import { Provider } from 'react-redux';

import { store } from 'store';

import { ImageLoader } from 'components/ImageLoader';
import { Settings } from 'components/Settings';
import { ShuffledPuzzles } from 'components/ShuffledPuzzles';
import { PuzzlesInput } from 'components/PuzzlesInput';

import './styles/reset.css';
import { Game, GameBoard } from './_styles';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Game>
        <ImageLoader />
        <Settings />
        <GameBoard>
          <ShuffledPuzzles />
          <PuzzlesInput />
        </GameBoard>
      </Game>
    </Provider>
  );
};

export default App;
