import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"


export function RightPanel(){

const {cart}=useContext(CartContext)
    return(
        <div className="flex flex-col mt-6 gap-4">
        <div className="text-4xl">Cart</div>
      
      <ul>
        {cart.map((cartItem)=>(
          <li key={cartItem.id}>{`${cartItem.name} - $${cartItem.price} X 1`}</li>
        ))}  
        
      </ul>


        <button className="bg-green-300  font-semibold rounded px-2 py-2"> Checkout</button>
      </div>
    )
}