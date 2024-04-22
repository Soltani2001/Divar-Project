import { useQuery } from "@tanstack/react-query"
import { getCategory } from "../../services/admin";
import Loader from './modules/Loader'
import styles from './CategoryList.module.css'

function CategoryList() {
  const {data, isLoading} = useQuery(["get-categories"], getCategory);
  console.log({data, isLoading});
  return (
    <div className={styles.list}>{isLoading ? <Loader /> : (
      data.data.map(i => (
        <div key={i.id}>
          <img src={`${i.icon}.svg`} alt="" />
            <h5>{i.name}</h5>
            <p>{i.slug}</p>
        </div>
      ))
    )}</div>
  )
}

export default CategoryList