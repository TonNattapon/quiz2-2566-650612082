import { Reply } from "./Reply";
import { comments } from "@/libs/comments";

export const Comment = ({
  userImagePath,
  username,
  commentText,
  likeNum,
  replies,
}) => {
  const checkLike = () => {
    if (likeNum >= 0) {
      return true;
    } else {
      return false;
    }
  };
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
            {checkLike ? <img src="/like.svg" width={20}></img> : null}
            {checkLike ? <span className="text-muted">{likeNum}</span> : null}
          </div>
        </div>
      </div>
      {replies.map((index) => {
        return (
          <Reply
            key={index.username}
            replyText={index.replyText}
            userImagePath={index.userImagePath}
            username={index.username}
            likeNum={index.likeNum}
          />
        );
      })}
    </div>
  );
};
