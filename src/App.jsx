import { BrowserRouter, Routes, Route } from "react-router"
import LoginPage from "./Pages/LoginPage"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/" element={<h1>Go to /login</h1>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
