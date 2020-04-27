import { AsyncStorage } from 'react-native';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'microblogging',
      storage: AsyncStorage,
      whitelist: ['auth', 'user', 'post'],
    },
    reducers
  );
  return persistedReducer;
};
