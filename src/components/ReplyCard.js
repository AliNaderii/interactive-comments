// COMPONENTS
import Card from '../components/Card';
// STYLES
import { StyledReplyCard } from "../styles/ReplyCard.styled";

export default function ReplyCard({ reply, addId }) {
  return (
    <StyledReplyCard>
      <Card comment={ reply } addId={ addId } deleteId={ reply.id } />
    </StyledReplyCard>
  );
}
