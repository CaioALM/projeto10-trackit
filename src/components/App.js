import { BrowserRouter, Router, Route } from "react-router-dom"

export default function App() {

    return (
        <BrowserRouter>
            <Router>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Signin/>}/>
                <Route path="/habitos " element={<Habits/>}/>
                <Route path="/hoje" element={<Today/>}/>
                <Route path="/historico" element={<History/>}/>
            </Router>
        </BrowserRouter>
    )
}