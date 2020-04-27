export function addMessageRequest(id, profile, post) {
  return {
    type: '@post/ADD_REQUEST',
    payload: { id, profile, post },
  };
}

export function addMessageSuccess(data) {
  return {
    type: '@post/ADD_SUCCESS',
    data,
  };
}

export function editPost(id, message) {
  return {
    type: '@post/EDIT_MESSAGE',
    payload: { id, message },
  };
}

export function editPostSuccess(id, message) {
  return {
    type: '@post/EDIT_MESSAGE_SUCCESS',
    payload: { id, message },
  };
}

export function removePost(id) {
  return {
    type: '@post/REMOVE',
    id,
  };
}
