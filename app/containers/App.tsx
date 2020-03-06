import * as React from "react"
import { hot } from "react-hot-loader/root";
import Routes from "../Routes";

const App: React.FC = () => {
    return (
        <div>
            <Routes />
        </div>
    )
}
export default hot(App)