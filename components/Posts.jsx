import { useCollection } from 'react-firebase-hooks/firestore'
import { db } from '../firebase'
import Post from './Post';


const Posts = ({posts}) => {
    const [realtimePosts, loading, error] = useCollection(
        db.collection('posts').orderBy('timestamp', 'desc')
    )

    return (
        <div>
            {
            realtimePosts 
            ?  realtimePosts?.docs.map(post =>( 
                    <Post 
                        key={post.id}
                        name={post.data().name}
                        message={post.data().message}
                        timestamp={post.data().timestamp}
                        avatar={post.data().avatar}
                        postImage={post.data().postImage}
                    />
                ))
            : posts?.map(post =>( 
                    <Post 
                        key={post.id}
                        name={post.name}
                        message={post.message}
                        timestamp={post.timestamp}
                        avatar={post.avatar}
                        postImage={post.postImage}
                    />
                ))
            }
        </div>
    )
}

export default Posts
