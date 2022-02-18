// TOOLS
import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";
// STYLES
import { StyledCommentForm, Avatar, CommentInput, Button } from '../styles/CommentForm.styled';

export default function EditForm({ value, user, id, to, text, editFormSwitch }
) {
  const [replyText, setReplyText] = useState(`@${to}, ${value}`);
  const { updateReply } = useDataContext();

  // SUBMIT FORM FUNCTION
  const handleSubmit = (e) => {
    e.preventDefault();

    // EDITED REPLY
    const reply = replyText.replace(`@${to},`, '');

    updateReply(reply, id);
    setReplyText('');
    editFormSwitch();
  };

  return (
    <StyledCommentForm >
      <form onSubmit={ handleSubmit }>

        {/* USER AVATAR */ }
        <Avatar>
          <img src={ user.image.png } alt="" />
        </Avatar>

        {/* TEXTAREA */ }
        <CommentInput>
          <textarea
            placeholder="Add a comment..."
            value={ replyText }
            onChange={ (e) => setReplyText(e.target.value) }
          >{ to }</textarea>
        </CommentInput>

        {/* SUBMIT BUTTON */ }
        <Button setCcolor="hsl(238, 40%, 52%)">
          { text }
        </Button>

      </form>
    </StyledCommentForm>
  );
}

