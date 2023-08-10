import { useState } from "react";
import { Reply } from "./Reply";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const [isLike, setIsLike] = useState(true);

  function checkLike(props) {
    props.likeNum = likeNumber;
    if (likeNumber > 0) {
      setIsLike(true);
    } else {
      setIsLike(false);
    }
  }
  return (
    <div>
      <div className="d-flex gap-2 my-2">
        <img
          src={userImagePath}
          width="48"
          height="48"
          className="rounded-circle"
          style={{ objectFit: "cover" }}
        />
        <div
          className="rounded rounded-3 p-2"
          style={{ backgroundColor: "#E5E7EB" }}
        >
          <span className="fw-semibold">{username}</span>
          <br />
          <span>{commentText}</span>
          <div className="d-flex align-items-center gap-1">
            {isLike ? <img src="/like.svg" width={20}></img> : null}
            {isLike ? <span className="text-muted">{likeNum}</span> : null}
          </div>
        </div>
      </div>
      <Reply
        key={replies.username}
        replyText={replies.commentText}
        userImagePath={replies.userImagePath}
        username={replies.username}
        likeNum={replies.likeNum}
        replies={replies.replies}
      />
    </div>
  );
};
