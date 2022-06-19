export const addComment = (comment) => ({
  type: 'ADD_COMMENT',
  payload: {
    comment
  }
});

export const addReply = (reply, mainCommentId) => ({
  type: 'ADD_REPLY',
  payload: {
    reply,
    mainCommentId
  }
});

export const deleteComment = (deleteId, mainCommentId, tag) => ({
  type: 'DELETE_COMMENT',
  payload: {
    deleteId,
    mainCommentId,
    tag
  }
});

export const updateReply = (editedComment, mainCommentId, editId, tag) => ({
  type: 'UPDATE_REPLY',
  payload: {
    editedComment,
    mainCommentId,
    editId,
    tag
  }
});