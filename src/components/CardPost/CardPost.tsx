import { Link } from "react-router-dom";
import { PostProps } from "../../@types/interface";
import { Post } from "./CardPost.styles";

export function CardPost(post: PostProps) {
  return (
    <Link state={post} to={`posts/${post.id}/comments`}>
      <Post key={post.id}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </Post>
    </Link>
  );
}
