import { useQuery } from "react-query";
import axios from "axios";
import { useParams } from "react-router-dom";
import { PostProps, UserProps } from "../../@types/interface";
import { CardUserPosts } from "../../components/CardUserPosts/CardUserPosts";
import { CardProfile } from "../../components/CardProfile/CardProfile";
import { Container, PostsTitle } from "./User.styles";

export function User() {
  const { userId } = useParams();

  const { data: dataProfile, isFetching: isFetchingProfile } = useQuery<
    UserProps[]
  >(
    "Profile",
    async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}`
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, //1 Minuto
    }
  );

  const { data: dataPostsByUser, isFetching: isFetchingPostsByUser } = useQuery<
    PostProps[]
  >(
    "PostsByUser",
    async () => {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/users/${userId}/posts`
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, //1 Minuto
    }
  );

  return (
    <Container>
      {!isFetchingProfile && <CardProfile user={dataProfile} />}
      <PostsTitle>Postagens</PostsTitle>
      {isFetchingPostsByUser && <p>Carregando...</p>}
      {dataPostsByUser?.map((posts: PostProps) => (
        <CardUserPosts
          userId={posts.userId}
          id={posts.id}
          title={posts.title}
          body={posts.body}
        />
      ))}
    </Container>
  );
}
