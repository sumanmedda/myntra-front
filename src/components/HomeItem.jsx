import { useDispatch, useSelector } from "react-redux"
import { bagActions } from "../store/bagSlice"

function HomeItem({item}){
  const dispatch = useDispatch()
  const bag = useSelector(state => state.bag)
  const itemInBag = bag.indexOf(item.id) >= 0

  const handleAddToBag = () => {
    dispatch(bagActions.addToBag(item.id))
  }

  const handleRemoveFromBag = () => {
    dispatch(bagActions.removeFromBag(item.id))
  }

  return <>
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
          {item.rating} ⭐ | {item.rating * 12}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      {itemInBag ? <button type="button" className="btn btn-add-bag btn-danger" onClick={handleRemoveFromBag}>Remove</button> : <button type="button" className="btn btn-add-bag btn-success" onClick={handleAddToBag}>Add To Bag</button> }
    </div>
  </>
}

export default HomeItem