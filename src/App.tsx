import {
    Routes, Route
} from "react-router-dom";
import Navbar from "./components/Navbar";
import { Homepage } from "./pages/Homepage";
import { Notfound } from "./pages/Notfound";
import {Signup} from "./pages/Signup";
import {Signin} from "./pages/Signin";


function App() {

    return (
        <div className="w-full overflow-hidden bg-primary">
            <div className="flex justify-center items-center">
                <div className="w-full">
                    {/*<Navbar/>*/}
                    <Routes>
                        <Route path="/" element={<Navbar/>}>
                            <Route index element={<Homepage/>} />

                        </Route>
                        <Route path="*" element={<Notfound/>} />
                        <Route path="signup" element={<Signup/>} />
                        <Route path="signin" element={<Signin/>} />
                    </Routes>
                </div>
            </div>
        </div>

    )
}

export default App
