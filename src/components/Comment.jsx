import { useState } from "react";
import { Reply } from "./Reply";
import { comments } from "@/libs/comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const [isLike, setIsLike] = useState(true);

  const repliesInfo = comments.map((comment) => {
    return comment.replies;
  });

  function checkLike() {
    if (likeNum > 0) {
      return setIsLike(true);
    } else {
      return setIsLike(false);
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
            {isLike && <img src="/like.svg" width={20}></img>}
            {isLike && <span className="text-muted">{likeNum}</span>}
          </div>
        </div>
      </div>
      <Reply
        key={repliesInfo.username}
        replyText={repliesInfo.replyText}
        userImagePath={repliesInfo.userImagePath}
        username={repliesInfo.username}
        likeNum={repliesInfo.likeNum}
      />
    </div>
  );
};
