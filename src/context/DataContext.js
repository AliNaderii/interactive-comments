// TOOLS
import { createContext, useReducer } from "react";
// THE DEFAULT DATA
import data from '../data/data.json';

// CREATE CONTEXT
export const DataContext = createContext();

// REDUCERS
const dataReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_COMMENT':
      return {
        ...state,
        comments: [...state.comments, action.payload.comment]
      };

    case 'ADD_REPLY':
      const newComments = state.comments.map(
        comment => comment.id === action.payload.mainCommentId
          ?
          { ...comment, replies: [...comment.replies, action.payload.reply] }
          :
          comment
      );
      return { ...state, comments: newComments };

    case 'DELETE_COMMENT':
      let filteredComments;
      if (action.payload.tag === 'main') {
        filteredComments = state.comments.filter(
          comment => comment.id !== action.payload.deleteId
        );
        return { ...state, comments: filteredComments };
      }
      else if (action.payload.tag === 'reply') {
        const { deleteId, mainCommentId } = action.payload;
        const index = state.comments.findIndex(
          comment => comment.id === mainCommentId
        );
        const newComments = [...state.comments];
        const newReplies = newComments[index].replies.filter(
          reply => reply.id !== deleteId
        );
        newComments[index].replies = newReplies;
        return { ...state, comments: newComments };
      }
      break;

    case 'UPDATE_REPLY':
      if (action.payload.tag === 'main') {
        const newComments = [...state.comments];
        const index = newComments.findIndex(comment => comment.id === action.payload.editId);
        newComments[index].content = action.payload.editedComment;
        return { ...state, comments: newComments };
      }
      else if (action.payload.tag === 'reply') {
        const newComments = [...state.comments];
        const mainCommentIndex = newComments.findIndex(comment => comment.id === action.payload.mainCommentId);
        const mainComment = newComments[mainCommentIndex];
        const newReplies = [...mainComment.replies];
        const replyIndex = newReplies.findIndex(
          reply => reply.id === action.payload.editId
        );
        newReplies[replyIndex].content = action.payload.editedComment;
        mainComment.replies = newReplies;
        return { ...state, comments: newComments };
      }
      break;

    default:
      return state;
  }
};

// CONTEXT PROVIDER COMPONENT
export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, data);

  console.log(state);

  return (
    <DataContext.Provider
      value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};