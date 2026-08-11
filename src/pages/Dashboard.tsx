import Navbar from "../components/layout/Navbar"
import Sidebar from "../components/layout/Sidebar"
import DashboardCard from "../components/cards/DashboardCard"

function Dashboard(){
    return(
        <div className="dashboard">
            <Sidebar />
            <div className="main">
                <Navbar />
                <div className="cards">
                    <DashboardCard title="Students" value={120} />
                    <DashboardCard title="Teacher" value={35} />
                    <DashboardCard title="Courses" value={18} />
                </div>
            </div>
        </div>
    )
}
export default Dashboard