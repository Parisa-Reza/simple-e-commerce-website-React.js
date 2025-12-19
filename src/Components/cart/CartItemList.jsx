import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import { DeleteIcon } from "../../common";
import {  useContext } from "react";
import { CartContext } from "../../contexts";

export const CartItemList = () => {
    const {cart,removeFromCart}=useContext(CartContext);
  return (
    <Box>
        <div>
        <h2 className="text-3xl text-center text-bold mb-5">Cart Items</h2>
        </div>
      <List>
       { cart.map((cartItem)=>(

        <ListItem
          secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={()=>{removeFromCart(cartItem)}}>
              <DeleteIcon />
            </IconButton>
          } key={cartItem.name}
        >
          <ListItemText primary={`${cartItem.name} - $${cartItem.price} X 1`} />
        </ListItem>
       ))}
        
      </List>
    </Box>
  );
};
