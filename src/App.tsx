import {  Route, Routes } from "react-router-dom"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import Home from "./components/Home"
const App = () => {
  return (
    <Routes>
      {/* <Route
        path="/"
        element={<Navigate to="/signin" replace />}
      />       */}
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/sign-up" element={<SignUp />} />
    </Routes>
  )
}

export default App