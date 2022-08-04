import { BrowserRouter as Router } from "react-router-dom";
import { HeaderComponent } from "./components/HeaderComponent";
import { RoutesCreate } from "./routes";


function App() {
    return (
        <Router>
            <HeaderComponent />
            <RoutesCreate />
        </Router>
    );
}

export default App;
