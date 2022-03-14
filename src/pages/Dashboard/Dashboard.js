import Sidebar from "../../components/Sidebar";
import {BrowserRouter, Route,Routes} from 'react-router-dom';
import AllCategeories from "../Admin/AllCategories";
const Dashboard =({children})=>{
    return(
        <div className="row" style={{minHeight:"100vh"}}>
            <div className="col-4">
                <Sidebar/>
            </div>
            <div className="col-8">
                {children}
            </div>
        </div>
    )
}

export default Dashboard;