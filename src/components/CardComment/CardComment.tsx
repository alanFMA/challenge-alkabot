import { CommentsProps } from "../../@types/interface";
import { AuthorInfo, Comment, Container } from "./CardComment.styles";

export function CardComment(comment: CommentsProps) {
  return (
    <li key={comment.id}>
      <Container>
        <Comment>{comment.body}</Comment>
        <AuthorInfo>
          {comment.name} -{" "}
          <a href={`mailto:${comment.email}`}>{comment.email}</a>
        </AuthorInfo>
      </Container>
    </li>
  );
}
