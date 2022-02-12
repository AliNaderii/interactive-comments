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
      state.comments.push(action.payload);
      return { ...state };

    case 'ADD_REPLY':
      state.comments.map(comment => {
        if (comment.id === action.payload.id) {
          comment.replies.push(action.payload.reply);
        }
        return comment;
      });
      return { ...state };

    case 'DELETE_COMMENT':
      const filtered = state.comments.filter(
        comment => comment.id !== action.payload
      );
      state.comments = filtered;

      state.comments.map(comment => {
        if (comment.replies.length !== 0) {
          const filteredReplies = comment.replies.filter(
            reply => reply.id !== action.payload
          );
          comment.replies = filteredReplies;
        }
        return comment;
      });
      return { ...state };

    case 'UPDATE_REPLY':
      state.comments.map(comment => {
        if (comment.id === action.payload.id) {
          comment.content = action.payload.reply;
        }
        return comment;
      });

      state.comments.map(comment => {
        if (comment.replies.length !== 0) {
          comment.replies.map(reply => {
            if (reply.id === action.payload.id) {
              reply.content = action.payload.reply;
            }
            return reply;
          });
        }
        return comment;
      });
      return { ...state };

    default:
      return state;
  }
};

// CONTEXT PROVIDER COMPONENT
export const DataContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, data);

  console.log(state);

  const addComment = (comment) => {
    dispatch({ type: 'ADD_COMMENT', payload: comment });
  };

  const addReply = (reply, id) => {
    dispatch({ type: 'ADD_REPLY', payload: { reply, id } });
  };

  const deleteComment = (id) => {
    dispatch({ type: 'DELETE_COMMENT', payload: id });
  };

  const updateReply = (reply, id) => {
    dispatch({ type: 'UPDATE_REPLY', payload: { reply, id } });
  };

  return (
    <DataContext.Provider
      value={ { ...state, addComment, addReply, deleteComment, updateReply } }>
      { children }
    </DataContext.Provider>
  );
};