import { UserAuth } from "../context/AuthContext"

function Navbar() {

  const { currentUser, logOut } = UserAuth()

  const handleLogOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="navbar fixed z-10 bg-neutral text-neutral-content">
      <div className="containerWrap flex justify-between">
        <a className="btn btn-ghost normal-case text-xl">LavaChat</a>
        {currentUser ? <button onClick={handleLogOut} >LogOut</button> : null}
      </div>
    </div>
  )
}

export default Navbar