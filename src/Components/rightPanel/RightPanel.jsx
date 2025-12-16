import { useContext } from "react"
import { CartContext } from "../../contexts"



export function RightPanel(){

const {cart}=useContext(CartContext)
    return(
        <div className="flex flex-col mt-6 gap-4">
        <div className="text-xl font-semibold mb-2">Cart</div>
      
      <ul>
        {cart.map((cartItem)=>(
          <li key={cartItem.id}>{`${cartItem.name} - $${cartItem.price} X 1`}</li>
        ))}  
        
      </ul>

<div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4"> Checkout</button>
      </div>
      </div>
    )
}