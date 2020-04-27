import produce from 'immer';

export default function post(state = [], action) {
  switch (action.type) {
    case '@post/ADD_SUCCESS':
      return produce(state, draft => {
        const { data } = action;

        draft.push(data);
      });
    case '@post/REMOVE':
      return produce(state, draft => {
        const messageIndex = draft.findIndex(p => p.id === action.id);

        if (messageIndex >= 0) {
          draft.splice(messageIndex, 1);
        }
      });
    case '@post/EDIT_MESSAGE': {
      return produce(state, draft => {
        const messageIndex = draft.findIndex(p => p.id === action.payload.id);

        if (messageIndex >= 0) {
          draft[messageIndex].post.message = action.payload.message;
        }
      });
    }

    default:
      return state;
  }
}
