import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
export const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <h1 className="text-3xl font-semibold px-18 py-6 "><Link to="/">Simple E-commerce App</Link></h1>
      <div>
       <button onClick={()=>{Navigate('/')}}>Home</button>
       <button onClick={()=>{Navigate('admin')}}>Admin</button>
       <button onClick={()=>{Navigate('/login')}}>Login</button>
      </div>
      </div>
  )
}