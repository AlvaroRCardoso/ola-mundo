import './Post.css';
import styles from './Post.module.css';
import { useParams } from "react-router-dom";
import ReactMarkDown from "react-markdown";
import posts from "json/posts.json"
import PostTemplate from "components/PostTemplate";
import PostCard from "components/PostCard";
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

    const recommendedPosts = posts
        .filter(post => post.id !== Number(params.id))
        .sort((a,b) => b.id - a.id)
        .slice(0, 4);

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

                <h2 className={styles.tituloOutrosPosts}>
                    Outros posts que você pode gostar:
                </h2>

                <ul className={styles.postsRecomendados}>
                    {recommendedPosts.map((post) => (
                        <li key={post.id}>
                            <PostCard post={post} />
                        </li>
                    ))}
                </ul>
            </PostTemplate>
        </DefaultPage>
    );
}