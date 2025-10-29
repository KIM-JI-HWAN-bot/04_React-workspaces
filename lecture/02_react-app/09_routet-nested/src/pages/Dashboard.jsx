// pages/Dashboard.jsx
import { Outlet, Link } from "react-router-dom";

function Dashboard() {
  return (
    <div>
      <h2>대시보드</h2>
      <nav>
        <Link to="settings">설정</Link> | <Link to="analytics">분석</Link>
      </nav>

      <Outlet />
    </div>
  );
}

export default Dashboard;
