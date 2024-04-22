import { useQuery } from '@tanstack/react-query'
import { getPosts } from '../../services/user'
import Loader from './modules/Loader'
import { sp } from '../../utils/numbers';
import styles from './postList.module.css'

function PostList() {



    const {data, isLoading} = useQuery(["my-post-list"], getPosts);
    console.log(data);
  return (<div className={styles.list}>
    <h3>آگهی های شما</h3>
    {
        isLoading ? <Loader /> : (
            
            data.data.posts.map(post => (

                <div key={post._id} className={styles.post}>
                    {/* <div> */}
                        <img src={`http://localhost:3400/${post.images}`} />
                        <div className={styles.con}>
                            <p>{post.options.title}</p>
                            <span>{post.options.content}</span>
                        </div>
                        <div className={styles.price}>
                            <span>{sp(post.amount)} تومان</span>
                            <p>{new Date (post.createdAt).toLocaleDateString("fa-IR")}</p>
                        </div>
                    {/* </div> */}
                </div>
            )
            ))
            
        }
        <div>PostList</div>
  </div>
  )
}


export default PostList





// import { useQuery } from '@tanstack/react-query'
// import { getPosts } from '../../services/user'
// import Loader from './modules/Loader'

// function PostList() {
//     const {data, isLoading} = useQuery(["my-post-list"], getPosts);
//     console.log(data);
//   return (
//     {data.data}
//   )
  
//   }

// export default PostList