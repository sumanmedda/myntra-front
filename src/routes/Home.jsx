import { useSelector } from "react-redux"
import HomeItem from "../components/HomeItem"

function Home(){
  const items = useSelector(state => state.items)

  return <main>
  <div className="items-container">
    {items.map(items => <HomeItem key={items.id} item={items}/>)}
  </div>
</main>
}

export default Home