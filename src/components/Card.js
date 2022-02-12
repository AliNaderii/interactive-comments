// TOOLS
import { useState } from "react";
// COMPONENTS
import Modal from "./Modal";
import ReplyForm from "./ReplyForm";
import EditForm from './EditForm';
// STYLES
import {
  StyledCard, CommentSection, CommentDetails, ActionButton, CommentText, LikesWrapper
} from "../styles/Card.styled";
// CONTEXT HOOK
import { useDataContext } from "../hooks/useDataContext";


export default function Card({ comment, addId, deleteId }) {
  // STATES
  const [showModal, setShowModal] = useState(false);
  const [showReplyForm, setShowReplyForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [score, setScore] = useState(comment.score);
  // GET THE CURRENT STATE USING CONTEXT HOOK
  const state = useDataContext();

  // SHOW & HIDE REPLY FORM
  const replyFormSwitch = () => {
    setShowReplyForm(prevState => !prevState);
  };

  // SHOW & HIDE EDIT FORM
  const editFormSwitch = () => {
    setShowEditForm(prevState => !prevState);
  };

  // SHOW & HIDE MODAL
  const hideModal = () => {
    setShowModal(false);
  };

  // LIKE A COMMENT
  const incrementScore = () => {
    setScore(prevState => prevState += 1);
  };

  // DISLIKE A COMMENT
  const decrementScore = () => {
    setScore(prevState => prevState -= 1);
  };

  // THE CURRENT USER
  const current = state.currentUser.username;

  return (
    <div>
      <StyledCard>
        <LikesWrapper>
          {/* LIKE & DISLIKE SECTION */ }
          <div className="like-btn">
            <button onClick={ incrementScore } aria-label='upvote'>
              <img src="./images/icon-plus.svg" alt="" />
            </button>
            <p>{ score }</p>
            <button onClick={ decrementScore } aria-label='downvote'>
              <img src="./images/icon-minus.svg" alt="" />
            </button>
          </div>

          {/* ACTION BUTTONS THAT WILL ONLY SHOW WHEN MEDIA QUERY APPLIES */ }
          { comment.user.username !== current ? (
            <ActionButton onClick={ replyFormSwitch } className='query-btn'>
              <button>
                <img src="./images/icon-reply.svg" alt="" />
                <p>Reply</p>
              </button>
            </ActionButton>
          )
            :
            <div className="query-btn">
              <ActionButton type='delete' onClick={ () => setShowModal(true) } className='query-btn'>
                <button>
                  <img src="./images/icon-delete.svg" alt="" />
                  <p>Delete</p>
                </button>
              </ActionButton>

              <ActionButton onClick={ editFormSwitch } className='query-btn'>
                <button>
                  <img src="./images/icon-edit.svg" alt="" />
                  <p>Edit</p>
                </button>
              </ActionButton>
            </div>
          }
        </LikesWrapper>

        <CommentSection>

          {/* COMMENT AUTHOR & TIME */ }
          <CommentDetails>
            <div>
              <img src={ comment.user.image.png } alt="" />
              <p>{ comment.user.username }</p>
              { comment.user.username === current && (
                <p>you</p>
              ) }
              <span>{ comment.createdAt }</span>
            </div>

            {/* ACTION BUTTONS FOR DEFAULT MEDIA QUERY */ }
            { comment.user.username !== current ? (
              <ActionButton onClick={ replyFormSwitch }>
                <button>
                  <img src="./images/icon-reply.svg" alt="" />
                  <p>Reply</p>
                </button>
              </ActionButton>
            )
              :
              <div>
                <ActionButton type='delete' onClick={ () => setShowModal(true) }>
                  <button>
                    <img src="./images/icon-delete.svg" alt="" />
                    <p>Delete</p>
                  </button>
                </ActionButton>

                <ActionButton onClick={ editFormSwitch }>
                  <button>
                    <img src="./images/icon-edit.svg" alt="" />
                    <p>Edit</p>
                  </button>
                </ActionButton>
              </div>
            }
          </CommentDetails>

          { /* THE COMMENT ITSELF */ }
          <CommentText>
            <p>
              { comment.replyingTo && (
                <span>{ `@${comment.replyingTo}` }</span>
              ) }
              { comment.content }
            </p>
          </CommentText>
        </CommentSection>
        { showModal && <Modal hideModal={ hideModal } id={ deleteId } /> }
      </StyledCard>

      {/* CONDITIONAL RENDERING OF REPLY FORM */ }
      {
        showReplyForm &&
        <ReplyForm
          user={ state.currentUser }
          text={ `REPLY` }
          to={ comment.user.username }
          id={ addId }
          replyFormSwitch={ replyFormSwitch }
        />
      }

      {/* CONDITIONA RENDERING OF EDIT FORM */ }
      {
        showEditForm &&
        <EditForm
          user={ state.currentUser }
          value={ comment.content }
          text={ `Update` }
          to={ comment.user.username }
          id={ deleteId }
          editFormSwitch={ editFormSwitch }
        />
      }
    </div>
  );
}
