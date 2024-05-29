import { useParams } from "react-router-dom";
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate";

export default function Post() {
    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    console.log(post);

    return (
        <PostTemplate
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            
        </PostTemplate>
    );
}