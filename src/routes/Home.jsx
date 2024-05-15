import HomeItem from "../components/HomeItem"

function Home(){
  const item = 
    {
      id: 1,
      image: "https://drive.google.com/thumbnail?id=1JA0PCO16JPNtlpy4j7VdZtEF-AZkVdk8",
      company: "Apple",
      item_name: "iphone15",
      original_price: 69999,
      current_price: 49500,
      discount_percentage: 20,
      return_period: 7,
      delivery_date: "2024-05-17",
      description: "DYNAMIC ISLAND COMES TO IPHONE 15 — Dynamic Island bubbles up alerts and Live Activities — so you don’t miss them while you’re doing something else. You can see who’s calling, track your next ride, ch",
      rating: 5
  }

  return <main>
  <div className="items-container">
    <HomeItem item={item}/>
  </div>
</main>
}

export default Home