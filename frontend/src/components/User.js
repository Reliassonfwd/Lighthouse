import Register from "../pages/Register";
import Login from '../pages/Login'
import Logout from './Logout'
import { useState } from "react";

const User = ({ currUser, setCurrUser }) => {
  const [show, setShow] = useState(true)
  if (currUser)
    return (
      <div>
        <Logout setCurrUser={setCurrUser} />
      </div>
    )
  return (
    <div>
      {show ?
        <Login setCurrUser={setCurrUser} setShow={setShow} />
        :
        <Register setCurrUser={setCurrUser} setShow={setShow} />
      }
    </div>
  )
}
export default User