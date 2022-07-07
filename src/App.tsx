import { Provider } from 'react-redux';

import { store } from 'store';

import { ImageLoader } from 'components/ImageLoader';
import { Settings } from 'components/Settings';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ImageLoader />
      <Settings />
    </Provider>
  );
};

export default App;
