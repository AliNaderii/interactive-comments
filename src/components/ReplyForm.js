// TOOLS
import { useState } from "react";
import { useDataContext } from "../hooks/useDataContext";

// STYLES
import { StyledCommentForm, Avatar, CommentInput, Button } from "../styles/CommentForm.styled";


export default function ReplyForm({ user, text, to, id, replyFormSwitch }) {
  const [clicked, setClicked] = useState(false);
  const [replyText, setReplyText] = useState(`@${to}, `);

  const { addReply } = useDataContext();

  const clickEffect = () => {
    setClicked((prevState) => !prevState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const reply = {
      "id": Math.random() * 1000,
      "content": replyText.replace(`@${to},`, ''),
      "createdAt": "2 days ago",
      "score": 0,
      "replyingTo": to,
      "user": {
        "image": {
          "png": "./images/avatars/image-juliusomo.png",
          "webp": "./images/avatars/image-juliusomo.webp"
        },
        "username": "juliusomo"
      }
    };

    addReply(reply, id);
    setReplyText('');
    replyFormSwitch();
  };


  return (
    <StyledCommentForm>
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
        <Button
          setColor="hsl(238, 40%, 52%)"
          clicked={ clicked }
          onMouseDown={ clickEffect }
          onMouseUp={ clickEffect }
        >
          { text }
        </Button>

      </form>
    </StyledCommentForm>
  );
}