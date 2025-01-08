import './App.css';
import Login from './Pages/LoginPage';
import Signup from "./Pages/SignupPage"
import StudentDash from './Pages/StudentDash';
import {  ChakraProvider } from '@chakra-ui/react'

function App() {
  return (
    <div className="App">
      <ChakraProvider >
      <StudentDash />
      {/* <Signup /> */}
      {/* <Login/> */}
      </ChakraProvider>
      </div>
  );
}

export default App;
