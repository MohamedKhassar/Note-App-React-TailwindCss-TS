import { Navigate, Route, Routes } from "react-router-dom"
import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
const App = () => {
  return (
    <Routes>
      <Route
        path="*"
        element={<Navigate to="/signin" replace />}
      />      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  )
}

export default App