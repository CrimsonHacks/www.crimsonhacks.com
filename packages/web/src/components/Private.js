import { navigate } from "gatsby"

function Private({ willRedirect, children }) {
  if (typeof window !== "undefined" && !localStorage.getItem("user")) {
    if (willRedirect) navigate("/sign-in")
    return null
  }

  return children
}

export default Private
