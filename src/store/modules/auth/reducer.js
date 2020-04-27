import produce from 'immer';

const INITIAL_STATE = {
  registred: [],
  signed: false,
  loading: false,
};

export default function post(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@auth/SIGN_UP_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_UP_SUCCESS': {
        draft.registred.push(action.payload.data);
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_IN_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@auth/SIGN_IN_SUCCESS': {
        draft.signed = true;
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@auth/SIGN_OUT': {
        draft.signed = false;
        break;
      }
      default:
        return state;
    }
  });
}
