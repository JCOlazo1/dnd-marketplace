import React from 'react'
import { confirmAlert } from 'react-confirm-alert'
import  { useHistory } from 'react-router-dom'

const LeaveButton = ({ cartItems }) => {
  const history = useHistory();

  const isEmpty = (obj) => {
    return Object.keys(obj).length === 0;
  }

  const handleClick = () => {
    !isEmpty(cartItems) ? payOrSteal2() : goHome()
    console.log("handleClick is clicked")
  }

  const payOrSteal = () => {
    confirmAlert({
      title: 'Shopkeeper says: ',
      message: 'Hey, you\'ve still got some unpaid items in your bag, pal!',
      buttons: [
        {
          label: 'Stay and pay'
        },
        {
          label: 'Steal!',
          onClick: () => goHome()
        }
      ]
    })
  }

  const payOrSteal2 = () => {
    confirmAlert({
      customUI: ({ onClose }) => {
        return(
          <div className="shopkeeper">
            <h1>Shopkeeper says:</h1>
            <p className='shopkeeper-message'>
              Hey, you've still got some unpaid items in your bag, pal!
            </p>
            <button onClick={onClose}>Stay and pay</button>
            <button onClick={goHome}>Steal!</button> {/* "stealer" message persist after leaving the shop */}
          </div>
        );
      }
    })
  }

  const goHome = () => {
    history.push('/');
  }

  return (
    <div className='button'>
      <button onClick={handleClick} >Leave the Store</button>
    </div>
  )
}

export default LeaveButton

/* Functionality:
- It needs to check the cart to see if its empty
- If its empty, you can leave normally
- If there are items, create a pop-up prompt:
    - You havent paid yet!
      -> Pay
      -> Leave (STEAL)

- The stealing option should alert me somehow and which user
*/
