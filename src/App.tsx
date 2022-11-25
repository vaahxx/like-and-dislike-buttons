import cx from "classnames";
import React from "react";

export function Buttons() {
  const [likes, setLikes] = React.useState(100);
  const [dislikes, setDislikes] = React.useState(25);
  const [isLikeClicked, setIsLikeClicked] = React.useState(false);
  const [isDislikeClicked, setIsDislikeClicked] = React.useState(false);

  function handleClickLikeButton() {
    if (isLikeClicked) {
      setIsLikeClicked(false);
      setLikes((prev) => prev - 1);
    } else {
      setIsLikeClicked(true);
      setLikes((prev) => prev + 1);
    }
  }

  function handleClickDislikeButton() {
    if (isDislikeClicked) {
      setIsDislikeClicked(false);
      setDislikes((prev) => prev - 1);
    } else {
      setIsDislikeClicked(true);
      setDislikes((prev) => prev + 1);
    }
  }

  return (
    <>
      <div>
        <button
          className={cx("like-button", `${isLikeClicked ? "liked" : ""}`)}
          onClick={handleClickLikeButton}
        >
          Like | {likes}
        </button>
        <button
          className={cx(
            "dislike-button",
            `${isDislikeClicked ? "disliked" : ""}`
          )}
          onClick={handleClickDislikeButton}
        >
          Dislike | {dislikes}
        </button>
      </div>
      <style>{`
        .like-button, .dislike-button {
            font-size: 1rem;
            padding: 5px 10px;
            color:   #585858;
        }

        .liked, .disliked {
            font-weight: bold;
            color: #1565c0;
        }
    `}</style>
    </>
  );
}
