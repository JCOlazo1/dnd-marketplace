import React, { useState, useEffect } from 'react'

const Cart = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState([]); // Stores the item selected by user from dropdown
  const [itemList, setItemList] = useState([]); // Stores the user's current shopping list
  const [totalPrice, setTotalPrice] = useState(0); // Updates total amount
  
  // this useEffect will update the value of 'items' whenever user selects
  // something from the dropdown
  useEffect(() => {
    setSelectedItem(items);
  }, [items])

  // this useEffect will update the total amount needed to pay. Updates when any changes to cart is made
  useEffect(() => {
    setTotalPrice(itemList.reduce((acc, curr) => acc + curr.price, 0))
  }, [itemList])

  // Takes the selected item, adds to the itemList state hook which will be mapped to display the list
  const AddToCart = () => {
    setItemList([...itemList, selectedItem])
  }

  const test = () => {
    console.log(selectedItem.price);
  }

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  return (
    <div className='overview'>
      <ul className='item-list'>
        <ShoppingCart 
          items={itemList.map((item) => (
            <>
              <p key={item.id}>
                {item.name} ----- {item.price}G
              </p>
              <button onClick={() => {
                setItemList(currentItem => currentItem.filter(x => x.id !== item.id))
              }}>x</button>
            </>
          ))}
        />
      </ul>
      <h3>TOTAL:  ===  {totalPrice}G</h3>
      <button onClick={AddToCart}>Add to Cart</button>
      <button onClick={() => setItemList([])}>Clear Cart</button>
      <button onClick={test}>Test</button>
    </div>
  )
}

const ShoppingCart = ({items}) => {
  return(
    <>
      {items}
    </>
  );
}

export default Cart;

/* TODO:
 * 
 * - There should be a check for leaving the store:
 *    - if cart !isEmpty && [tries to leave]:
 *      -> HEY YOU HAVENT PAID YET (options): STAY/STEAL
 */