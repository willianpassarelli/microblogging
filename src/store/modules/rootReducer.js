import { combineReducers } from 'redux';

import post from './post/reducer';
import auth from './auth/reducer';
import user from './user/reducer';

export default combineReducers({ user, auth, post });
