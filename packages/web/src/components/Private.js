import { navigate } from "gatsby"

function Private({ willRedirect, children }) {
  if (window && !localStorage.getItem("user")) {
    if (willRedirect) navigate("/sign-in")
    return null
  }

  return children
}

export default Private
