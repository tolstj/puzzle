import { Provider } from 'react-redux';

import { store } from 'store';

import { ImageLoader } from 'components/ImageLoader';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ImageLoader />
    </Provider>
  );
};

export default App;
