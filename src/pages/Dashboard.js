import Header from '../components/Header/Header';
import Sidebar from '../components/Sidebar/Sidebar';
import './style.scss';

const Dashboard = () => {
  return (
    <>
    <Sidebar />
    <Header />
    <main>
      <h1>Dashboard</h1>
    </main>
    </>
  )
}

export default Dashboard;