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


export default function Card({ comment, deleteId, mainCommentId, tag }) {
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
    if (score <= comment.score) setScore(prevScore => prevScore += 1);
  };

  // DISLIKE A COMMENT
  const decrementScore = () => {
    if (score >= comment.score) setScore(prevScore => prevScore -= 1);
  };

  // THE CURRENT USER
  const current = state.currentUser.username;

  return (
    <div>
      <StyledCard>
        <LikesWrapper>
          {/* LIKE & DISLIKE SECTION */}
          <div className="like-btn">
            <button onClick={incrementScore} aria-label='upvote'>
              <img src="./images/icon-plus.svg" alt="" />
            </button>
            <p>{score}</p>
            <button onClick={decrementScore} aria-label='downvote'>
              <img src="./images/icon-minus.svg" alt="" />
            </button>
          </div>

          {/* ACTION BUTTONS THAT WILL ONLY SHOW WHEN MEDIA QUERY APPLIES */}
          {comment.user.username !== current ? (
            <ActionButton onClick={replyFormSwitch} className='query-btn'>
              <button>
                <img src="./images/icon-reply.svg" alt="" />
                Reply
              </button>
            </ActionButton>
          )
            :
            <div className="query-btn">
              <ActionButton colorType='delete' onClick={() => setShowModal(true)} className='query-btn'>
                <button>
                  <img src="./images/icon-delete.svg" alt="" />
                  Delete
                </button>
              </ActionButton>

              <ActionButton onClick={editFormSwitch} className='query-btn'>
                <button>
                  <img src="./images/icon-edit.svg" alt="" />
                  Edit
                </button>
              </ActionButton>
            </div>
          }
        </LikesWrapper>

        <CommentSection>

          {/* COMMENT AUTHOR & TIME */}
          <CommentDetails>
            <div>
              <img src={comment.user.image.png} alt="" />
              <p>{comment.user.username}</p>
              {comment.user.username === current && (
                <p>you</p>
              )}
              <span>{comment.createdAt}</span>
            </div>

            {/* ACTION BUTTONS FOR DEFAULT MEDIA QUERY */}
            {comment.user.username !== current ? (
              <ActionButton onClick={replyFormSwitch}>
                <button>
                  <img src="./images/icon-reply.svg" alt="" />
                  Reply
                </button>
              </ActionButton>
            )
              :
              <div>
                <ActionButton colorType='delete' onClick={() => setShowModal(true)}>
                  <button>
                    <img src="./images/icon-delete.svg" alt="" />
                    Delete
                  </button>
                </ActionButton>

                <ActionButton onClick={editFormSwitch}>
                  <button>
                    <img src="./images/icon-edit.svg" alt="" />
                    Edit
                  </button>
                </ActionButton>
              </div>
            }
          </CommentDetails>

          { /* THE COMMENT ITSELF */}
          <CommentText>
            <p>
              {comment.replyingTo && (
                <span>{`@${comment.replyingTo}`}</span>
              )}
              {comment.content}
            </p>
          </CommentText>
        </CommentSection>
        {showModal &&
          <Modal
            hideModal={hideModal}
            deleteId={deleteId}
            mainCommentId={mainCommentId}
            tag={tag}
          />}
      </StyledCard>

      {/* CONDITIONAL RENDERING OF REPLY FORM */}
      {showReplyForm &&
        <ReplyForm
          user={state.currentUser}
          text='REPLY'
          to={comment.user.username}
          mainCommentId={mainCommentId}
          replyFormSwitch={replyFormSwitch}
        />
      }

      {/* CONDITIONA RENDERING OF EDIT FORM */}
      {
        showEditForm &&
        <EditForm
          user={state.currentUser}
          content={comment.content}
          text='UPDATE'
          to={comment.user.username}
          mainCommentId={mainCommentId}
          editId={deleteId}
          editFormSwitch={editFormSwitch}
          tag={tag}
        />
      }
    </div>
  );
}
