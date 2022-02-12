// TOOLS
import { useDataContext } from '../hooks/useDataContext';
// STYLES
import { Button } from "../styles/CommentForm.styled";
import { StyledModal, ModalCard } from "../styles/Modal.styled";

export default function Modal({ hideModal, id }) {
  // CONTEXT HOOK
  const { deleteComment } = useDataContext();

  return (
    <StyledModal>
      <ModalCard>
        {/* MODAL TEXT */ }
        <h2>Delete comment</h2>
        <p>
          Are you sure you want to delete this comment?
          This will remove the comment and can't be undone.
        </p>

        {/* CANCELL BUTTON */ }
        <Button color="hsl(211, 10%, 45%)" onClick={ hideModal }>
          NO, CANCEL
        </Button>

        {/* ACCEPT BUTTON */ }
        <Button color="hsl(358, 79%, 66%)" onClick={ () => deleteComment(id) }>
          YES, DELETE
        </Button>

      </ModalCard>
    </StyledModal>
  );
}
