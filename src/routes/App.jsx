import Header from "../components/Header"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom"

function App() {
  
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
// https://drive.google.com/thumbnail?id=
// https://drive.google.com/thumbnail?id=1JA0PCO16JPNtlpy4j7VdZtEF-AZkVdk8
// useEffect(() => {
//   console.log('hello'+ import.meta.env.VITE_API_URL)
//   console.log(
//     fetch('http://127.0.0.1:8000/api/items/').then(res => res.json())
//     .then(data => console.log(data))
//     .catch(err => console.log(err))
//   )
// }, [])