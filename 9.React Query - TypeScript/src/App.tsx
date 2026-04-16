import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SearchPage from "./pages/SearchPage";
import UserPage from "./pages/UserPage";

function App() {
  const [page, setPage] = useState("search");
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  const handleSetSelectedUser = (username: string) => {
    setSelectedUser(username);
    setPage("user");
  };

  const handleBack = () => {
    setPage("search");
    setSelectedUser(null);
  };

  return (
    <>
      <div className="App">
        <Navbar setPage={setPage} />
        <main className="main-content">
          {page === "search" && (
            <SearchPage setSelectedUser={handleSetSelectedUser} />
          )}
          {page === "user" && selectedUser && (
            <UserPage username={selectedUser} onBack={handleBack} />
          )}
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />
    </>
  );
}

export default App;
