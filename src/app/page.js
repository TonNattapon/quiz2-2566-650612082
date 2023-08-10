"use client";

import { Comment } from "@/components/Comment";
import { PostOwner } from "@/components/PostOwner";
import { comments } from "@/libs/comments";
import { Reply } from "@/components/Reply";

export default function HomePage() {
  return (
    <div
      style={{ minHeight: "100vh", backgroundColor: "ghostwhite" }}
      className="p-3"
    >
      {/* Entire App Container */}
      <div
        style={{ maxWidth: "700px" }}
        className="mx-auto p-3 rounded rounded-3 shadow-sm bg-white"
      >
        {/* Post Owner Example*/}
        <PostOwner name={"Natthapon Chanaveroj"} studentId={"650612082"} />

        <span>Quiz ง่ายจังเลยครับ ขอยาก ๆ กว่านี้ได้ไหม #261207</span>

        <div className="d-flex align-items-center gap-1">
          <img src="/like.svg" width={20}></img>
          <span className="text-muted">100 คน</span>
        </div>
        <hr className="m-0 border" />
      </div>

      {/* Comment Example */}
      {comments.map((comment) => {
        return (
          <Comment
            key={comment.username}
            userImagePath={comment.userImagePath}
            username={comment.username}
            commentText={comment.commentText}
            likeNum={comment.likeNum}
            replies={comment.replies}
          />
        );
      })}

      {/* Reply Example */}

      {comments.map((replies) => {
        return (
          <Reply
            key={replies.username}
            replyText={replies.commentText}
            userImagePath={replies.userImagePath}
            username={replies.username}
            likeNum={replies.likeNum}
            replies={replies.replies}
          />
        );
      })}

      {/* map-loop render Comment component here */}
    </div>
  );
}
