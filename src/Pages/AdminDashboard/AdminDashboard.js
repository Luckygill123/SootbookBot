import React, {useState} from 'react';
import AdminSideNav from "../../Components/Admin/AdminSideNav/AdminSideNav";
import AdminContentWrapper from"../../Components/Admin/AdminContentWrapper/AdminContentWrapper";
// import {withRouter} from 'react-router'
import './AdminDashboard.scss'

function AdminDashboard(props){

    const [expandView, setExpandView] = useState(false);

    function handleExpandView(){
        setExpandView(!expandView)
    }

return(
    <React.Fragment>
        <div className='admin_dashboardWrapper'>
            <AdminSideNav expandControl={() => handleExpandView()}/>
            <AdminContentWrapper viewManage={expandView}/>
        </div>
    </React.Fragment>
)
}

export default AdminDashboard;