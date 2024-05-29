import './Post.css';
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate";

export default function Post() {
    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    if (!post) {
        return <h1>Post não encontrado</h1>;
    }

    return (
        <PostTemplate
            fotoCapa={`/assets/posts/${post.id}/capa.png`}
            titulo={post.titulo}
        >
            <div className="post-markdown-container">
                <ReactMarkDown>
                    {post.texto}
                </ReactMarkDown>
            </div>
        </PostTemplate>
    );
}