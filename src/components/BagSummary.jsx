import {useSelector} from 'react-redux'
function BagSummary(){

  const bag = useSelector(state => state.bag)
  const items = useSelector(state => state.items)
  const finalItems = items.filter(item => {
    const itemIndex = bag.indexOf(item.id)
    return itemIndex >= 0
  })

  let totalItem = bag.length
  let totalMRP = bag.length
  let totalDiscount = bag.length
  let CON_FEES = 100

  finalItems.map((bagItem) => {
    totalMRP += bagItem.original_price;
    totalDiscount += bagItem.original_price - bagItem.current_price
  })

  let finalPayment = totalMRP - totalDiscount + CON_FEES


  return <div className="bag-summary">
    <div className="bag-details-container">
    <div className="price-header">PRICE DETAILS ({totalItem} Items) </div>
    <div className="price-item">
      <span className="price-item-tag">Total MRP</span>
      <span className="price-item-value">₹{totalMRP}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Discount on MRP</span>
      <span className="price-item-value priceDetail-base-discount">-₹{totalDiscount}</span>
    </div>
    <div className="price-item">
      <span className="price-item-tag">Convenience Fee</span>
      <span className="price-item-value">₹99</span>
    </div>
    <hr />
    <div className="price-footer">
      <span className="price-item-tag">Total Amount</span>
      <span className="price-item-value">₹{finalPayment}</span>
    </div>
  </div>
  <button className="btn-place-order">
    <div className="css-xjhrni">PLACE ORDER</div>
  </button>
  </div>
}

export default BagSummary