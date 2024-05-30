import './Post.css';
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate";
import NotFound from 'pages/NotFound';
import DefaultPage from 'components/DefaultPage';

export default function Post() {
    const params = useParams();

    const post = posts.find(post => post.id === Number(params.id));

    if (!post) {
        return (
            <NotFound />
        );
    }

    return (
        <DefaultPage>
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
        </DefaultPage>
    );
}