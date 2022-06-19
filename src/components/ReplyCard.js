// COMPONENTS
import Card from '../components/Card';
// STYLES
import { StyledReplyCard } from "../styles/ReplyCard.styled";

export default function ReplyCard({ reply, mainCommentId, deleteId }) {
  return (
    <StyledReplyCard>
      <Card comment={reply} mainCommentId={mainCommentId} deleteId={deleteId} tag='reply' />
    </StyledReplyCard>
  );
}
