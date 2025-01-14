import './App.css';
import Login from './Pages/LoginPage';
import Signup from "./Pages/SignupPage"
import StudentDash from './Pages/StudentDash';
import { ChakraProvider } from '@chakra-ui/react'
import AddBid from './Pages/Components/AddBid';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
        <div className="App">
    <ChakraProvider >

        <Routes>
            <Route path="/" element={<Login />} /> {/* Default route */}
            <Route path="/signup" element={<Signup />} />
            <Route path="/studentdashboard" element={<StudentDash />} />
            <Route path="/addbid" element={<AddBid />} />
          </Routes>
          </ChakraProvider>

        </div>
      </Router>

  );
}

export default App;
