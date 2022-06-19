// TOOLS
import { useDataContext } from "../hooks/useDataContext";
// COMPONENTS
import Card from "./Card";
import ReplyCard from "./ReplyCard";
import CommentForm from "./CommentForm";
// STYLES
import { Wrapper } from "../styles/Wrapper";

export default function Container() {
  // CONTEXT HOOK
  const state = useDataContext();

  return (
    <Wrapper>
      {/* RENDERING COMMENTS  */}
      {state.comments.map(comment => (
        <div key={comment.id}>
          <Card comment={comment} deleteId={comment.id} mainCommentId={comment.id} tag='main' />

          {/* CONDITIONAL RENDERING OF REPLIES */}
          {
            comment.replies.length !== 0 &&
            comment.replies.map(
              reply => <ReplyCard reply={reply} key={reply.id} mainCommentId={comment.id} deleteId={reply.id} />
            )
          }
        </div>
      ))}

      <CommentForm user={state.currentUser} text={'SEND'} />
    </Wrapper>
  );
}
