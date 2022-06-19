// TOOLS
import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import { addComment } from "../context/actions";
// STYLES
import { StyledCommentForm, Avatar, CommentInput, Button } from "../styles/CommentForm.styled";

export default function CommentForm({ user, text, to }) {
  // STATES
  const [replyText, setReplyText] = useState(to);
  // USING CONTEXT HOOK
  const { dispatch } = useDataContext();

  // SUBMIT FORM FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();
    // COMMENT TO BE ADDED
    const comment = {
      "id": Math.floor(Math.random() * 1000),
      "content": replyText,
      "createdAt": formatDistanceToNow(new Date()),
      "score": 0,
      "user": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      },
      "replies": [],
    };

    dispatch(addComment(comment));
    setReplyText('');
  };


  return (
    <StyledCommentForm>

      <form onSubmit={handleSubmit}>

        {/* USER AVATAR */}
        <Avatar>
          <img src={user.image.png} alt="" />
        </Avatar>

        {/* TEXTAREA */}
        <CommentInput>
          <textarea
            placeholder="Add a comment..."
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
          />
        </CommentInput>

        {/* SUBMIT BUTTON */}
        <Button setColor="hsl(238, 40%, 52%)">
          <span>{text}</span>
        </Button>

      </form>
    </StyledCommentForm>
  );
}
