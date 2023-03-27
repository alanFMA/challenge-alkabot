import axios from "axios";
import { useQuery } from "react-query";
import { useLocation, useParams } from "react-router-dom";

import { CardComment } from "../../components/CardComment/CardComment";
import { CardUser } from "../../components/CardUser/CardUser";

import { CommentsProps, UserProps } from "../../@types/interface";
import { PostContent, PostTitle, TitleComments } from "./Post.styles";

export function Post() {
  const { id } = useParams();
  let {
    state: { body, id: postId, title, userId },
  } = useLocation();

  const { data: dataComments, isFetching: isFetchingComments } = useQuery<
    CommentsProps[]
  >("commentsInPost", async () => {
    const response = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${id}/comments`
    );

    return response.data;
  });

  const { data: dataUser, isFetching: isFetchingUser } = useQuery<UserProps[]>(
    "UserInPost",
    async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      return response.data;
    }
  );

  return (
    <div>
      {isFetchingComments && <p>Carregando...</p>}
      <PostTitle>Title: {title}</PostTitle>
      {!isFetchingUser && <CardUser user={dataUser} />}
      <PostContent>{body}</PostContent>

      <TitleComments>Comments</TitleComments>

      {dataComments?.map((comment: CommentsProps) => (
        <CardComment
          postId={comment.postId}
          id={comment.id}
          name={comment.name}
          body={comment.body}
          email={comment.email}
          key={comment.id}
        />
      ))}
    </div>
  );
}
