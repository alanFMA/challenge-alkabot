import { useQuery } from "react-query";
import axios from "axios";

import { CardPost } from "../../components/CardPost/CardPost";

import { PostProps } from "../../@types/interface";
import { Header } from "../../components/Header/Header";
import { PostList } from "./Posts.styles";

export function Posts() {
  const { data, isFetching } = useQuery<PostProps[]>(
    "Posts",
    async () => {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/posts"
      );

      return response.data;
    },
    {
      staleTime: 1000 * 60, //1 Minuto
    }
  );

  return (
    <>
      <Header />
      {isFetching && <p>Carregando...</p>}
      <PostList>
        {data?.map((post: PostProps) => (
          <CardPost
            userId={post.userId}
            id={post.id}
            title={post.title}
            body={post.body}
            key={post.id}
          />
        ))}
      </PostList>
    </>
  );
}
