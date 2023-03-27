import { Link } from "react-router-dom";

import { PostProps } from "../../@types/interface";
import { Posts } from "./CardUserPosts.styles";

export function CardUserPosts(post: PostProps) {
  return (
    <Posts key={post.id}>
      <Link state={post} to={`/posts/${post.id}/comments`}>
        <h3>{post.title}</h3>
      </Link>
      <p>{post.body}</p>
    </Posts>
  );
}
