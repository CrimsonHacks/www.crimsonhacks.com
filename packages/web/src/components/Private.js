import { navigate } from "gatsby"

function Private({ willRedirect, children }) {
  if (!localStorage.getItem("user")) {
    if (willRedirect) navigate("/sign-in")
    return null
  }

  return children
}

export default Private
