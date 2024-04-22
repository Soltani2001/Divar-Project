import SideBar from '../components/templates/SideBar'
import Main from '../components/templates/Main'
import { useQuery } from '@tanstack/react-query'
import { getAllPosts } from '../services/user'
import Loader from '../components/templates/modules/Loader'
import { getCategory } from '../services/admin'

const style = {display: "flex"}

function HomePage() {
  const {data:dataPost, isLoading: isLoadingPost} = useQuery(["post-list"], getAllPosts);
  const {data: dataCategori, isLoading: isLoadingCategori} = useQuery(["get-categories"], getCategory);
  return (
    <>{isLoadingPost || isLoadingCategori ? <Loader /> : 
    <div style={style}>
      <SideBar data={dataCategori} />
       <Main data={dataPost} isLoading={isLoadingPost} />
    </div>}
    </>
  )
}

export default HomePage