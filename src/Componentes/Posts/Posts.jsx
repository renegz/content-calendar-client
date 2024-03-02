import Singlepost from '../SinglePost/Singlepost';
import "./Posts.css"

const Posts = ({ posts }) => {
    const mappedPosts = posts.map((post) => {
        return (
            <Singlepost key={post.id} post={post} />
        );
    });

    return (
        <div className="postWrapper">
            {mappedPosts}
        </div>
    );
}

export default Posts;