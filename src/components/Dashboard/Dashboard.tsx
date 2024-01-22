import { Route, Routes } from "react-router-dom";
import Homepage from "../../pages/Homepage/Homepage";
import Degerlendirmeler from "../../pages/Degerlendirmeler/Degerlendirmeler";
import Login from "../../pages/Auth/Login";
import Register from "../../pages/Auth/Register";
import ProfileEdit from "../../pages/Profile/ProfileEdit/ProfileEdit";
import Profile from "../../pages/Profile/Profile";
import IstanbulCoding from "../../pages/IstanbulCoding/IstanbulCoding";
import Calendar from "../../pages/Calendar/Calendar";


export default function Dashboard() {
  return (
    <Routes>
        <Route path='/' Component={Homepage}></Route>
        <Route path="/degerlendirmeler" Component={Degerlendirmeler}></Route>
        <Route path="/profilim" Component={Profile}></Route>
        <Route path="/profilimi-duzenle/*" Component={ProfileEdit}></Route>
        <Route path="/giris" Component={Login}></Route>
        <Route path="/kayitOl" Component={Register}></Route>     
        <Route path="/istanbul-kodluyor" Component={IstanbulCoding}></Route>     
        <Route path="/takvim" Component={Calendar}></Route>     
          
    </Routes>
  )
}
