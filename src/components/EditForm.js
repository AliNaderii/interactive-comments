// TOOLS
import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";
import { updateReply } from "../context/actions";
// STYLES
import { StyledCommentForm, Avatar, CommentInput, Button } from '../styles/CommentForm.styled';

export default function EditForm({ content, user, mainCommentId, editId, to, text, editFormSwitch, tag }
) {
  const [comment, setComment] = useState(`@${to}, ${content}`);
  const { dispatch } = useDataContext();

  // SUBMIT FORM FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    // EDITED REPLY
    const editedComment = comment.replace(`@${to},`, '');

    dispatch(updateReply(editedComment, mainCommentId, editId, tag));
    setComment('');
    editFormSwitch();
  };

  return (
    <StyledCommentForm >
      <form onSubmit={handleSubmit}>

        {/* USER AVATAR */}
        <Avatar>
          <img src={user.image.png} alt="" />
        </Avatar>

        {/* TEXTAREA */}
        <CommentInput>
          <textarea
            placeholder="Add a comment..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          >{to}</textarea>
        </CommentInput>

        {/* SUBMIT BUTTON */}
        <Button setColor="hsl(238, 40%, 52%)">
          {text}
        </Button>

      </form>
    </StyledCommentForm>
  );
}

