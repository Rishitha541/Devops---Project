import "./App.css"
import AddTask from "./components/AddTask"
import ViewTasks from "./components/ViewTasks"

function App() {

  return (

    <div className="page">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2>AI Study Planner</h2>
      </nav>

      {/* HERO SECTION */}
      <div className="hero">
        <h1>Plan Your Study Smartly</h1>
        <p>Organize your tasks, stay consistent, and boost productivity 🚀</p>
      </div>

      {/* DASHBOARD TITLE */}
      <h2 className="dashboard-title">Your Dashboard</h2>

      {/* MAIN CONTENT */}
      <div className="main">

        <div className="left">
          <AddTask />
        </div>

        <div className="right">
          <ViewTasks />
        </div>

      </div>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 AI Study Planner | Built with ❤️</p>
      </footer>

    </div>

  )
}

export default App