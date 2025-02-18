import './App.css';
import Login from './Pages/Login/LoginPage';
import Signup from "./Pages/Signup/SignupPage"
import StudentDash from './Pages/Student Dashboard/StudentDash';
import { ChakraProvider } from '@chakra-ui/react'
import AddBid from './Components/AddBid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from "./Contexts/UserContext";
import ChatPage from "../src/Components/ChatSystem/ChatSystem"

function App() {
  return (
    <ChakraProvider >
      <UserProvider>

        <Router>
          <div className="App">

            <Routes>
              <Route path="/chat" element={<ChatPage />} />
              <Route path="/" element={<Login />} /> {/* Default route */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/studentdashboard" element={<StudentDash />} />
              <Route path="/addbid" element={<AddBid />} />
            </Routes>

          </div>
        </Router>
      </UserProvider>

    </ChakraProvider>

  );
}

export default App;
