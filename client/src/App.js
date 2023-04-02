import './App.css';
import { Route, Routes } from 'react-router-dom';
import MentorView1 from './components/MentorView1';
import MentorView2 from './components/MentorView2';
import Navbar from './components/navbar/Navbar';
import AddStudents from './components/AddStudents';
function App() {
  return(
    <>
      <Navbar/>
      <Routes>
        <Route exact path='/mentor1' element={<MentorView1/>}></Route>
        <Route exact path='/mentor2' element={<MentorView2/>}></Route>
        <Route exact path='/addstudent' element={<AddStudents/>}></Route>

      </Routes>
    </>
  )
  
}

export default App;
