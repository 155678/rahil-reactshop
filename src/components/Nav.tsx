import {type FC } from 'react'
import {Link} from "react-router-dom"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"

type NavProps = {
    link?: string,
    icon?:string,
}

const Nav: FC<NavProps> = ()=> {
  return (
    <div className="bg-blue-900 mx-auto-lg">
      <div className="flex flex-wrap justify-between items-center px-4"> 
        <ul className="flex ">
          <li className=" text-white m-2  text-end">
            <Link to="/"  className=" text-center text-lg" >Shop</Link>
          </li> 
          <li className=" text-white m-2">
            <Link to="/Cart" className=" text-center text-lg" >
               <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>    
        </ul>
      </div>
    </div>
  )
}

export default Nav





