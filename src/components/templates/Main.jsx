import { sp } from "../../utils/numbers"
import styles from './main.module.css'

function Main({data}) {
    console.log(data);
  return (<>
    <div className={styles.container}>
        {data.data.posts.map((post) => (
                <div key={post._id} className={styles.card}>
                    <div className={styles.info}>
                        <p>{post.options.title}</p>
                        <div>
                            <p>{sp(post.amount)}</p>
                            <span>{post.options.city}</span>
                        </div>
                    </div>
                    <img src={`http://localhost:3400/${post.images[0]}`}/>
                </div>
            ))
        }
    </div>
  </>
    
  )
}

export default Main