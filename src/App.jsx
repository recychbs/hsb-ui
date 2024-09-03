// import './App.css'
// import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import Register1 from './screen/Register1'
// import Login from './screen/Login'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Success from './screen/Success';
// import Header from './component/Header';
// import Bottom from './component/Bottom';
// import Footer from './component/Footer';
// import Demo from "../src/screen/Demo"
// import Forgotpassword from './screen/Forgotpassword';
// import Headerdealer from './component/Headerdealer';
// import Bottomdealer from './component/Bottomdealer';
// import Applicationstatus from './Dealer/Applicationstatus';
// import Dealerdetails from './Dealer/Dealerdetails';
// import Todayscrap from './Dealer/Todayscrap';
// import Homedealer from './Dealer/Homedealer';
// import Homeuser from './User/Homeuser';
// import LocationDisplay from './component/LocationDisplay';
// import UpdateScrap from './Dealer/AdminUpdateScrap'
// import InsertScrap from './Dealer/AdminInsertScrap'
// import { useEffect } from 'react';
// import axios from 'axios';
// import React from 'react';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//         <Route path='/' element={<Login/>}/>
//         <Route path='/Register' element={<Register1/>}/>
//         <Route path='/Success' element={<Success/>}/>
//         <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
//           <Route path='/Applicationstatus' element={<Applicationstatus/>}/>         
//           <Route path='/Homedealer' element={<Homedealer/>}/>
//           <Route path='/Todayscrap' element={<Todayscrap/>}/>
//           <Route path='/DealerDetails' element={<Dealerdetails/>}/>
//           <Route path='/UpdateScrap' element={<UpdateScrap/>}/>
//           <Route path='/InsertScrap' element={<InsertScrap/>}/>
//             <Route path='/Homeuser' element={<Homeuser/>}/>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

// export default App

import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register1 from './screen/Register1';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './screen/Login';
import Forgotpassword from './screen/Forgotpassword';
import Success from './screen/Success';
import Notification from './screen/Notification';
import Homedealer from './Dealer/Homedealer';
import Todayscrap from './Dealer/Todayscrap';
import Dealerdetails from './Dealer/Dealerdetails';
import Scrapdetail from './Dealer/Scrapdetail';
import Completeorder from './Dealer/Completeorder';
import Completeorderdetail from './Dealer/Completeorderdetails';
import Analytic from './Dealer/Analytics';
import Feedback from './Dealer/Feedback';
import Applicationstatus from './Dealer/Applicationstatus';
import Dealerlogopage from './Dealer/Dealerlogopage';
import Dealeraccount from './Dealer/Drawer/Dealeraccount';
import Dealercustomer from './Dealer/Drawer/Dealercustomer';
import Dealerhelp from './Dealer/Drawer/Dealerhelp';
import Dealerorder from './Dealer/Drawer/Dealerorder';
import Dealerpayment from './Dealer/Drawer/Dealerpayment';
import Dealerorderview from './Dealer/Drawer/Dealerorderview';
import Homeuser from './User/Homeuser';
import Scrapselect from './User/Scrapselect';
import Bookdealer from './User/Bookdealer';
import Successful from './User/Successful';
import Userlogopage from './User/Userlogopage';
import Aboutus from './User/FooterScreen/Aboutus';
import Becomedealer from './User/FooterScreen/Becomedealer';
import BookingProtection from './User/FooterScreen/BookingProtection';
import Career from './User/FooterScreen/Career';
import Fulfillment from './User/FooterScreen/Fullfillment';
import Sellon from './User/FooterScreen/sellon';
import Useraccount from './User/Drawer/Useraccount';
import Usercustomer from './User/Drawer/Usercustomer';
import Userfaq from './User/Drawer/Userfaq';
import Userhelp from './User/Drawer/Userhelp';
import Yourbooking from './User/Drawer/Yourbooking';
import UpdateScrap from './Dealer/AdminUpdateScrap';
import InsertScrap from './Dealer/AdminInsertScrap';
import LoginDemo from './screen/LoginDemo';
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
        {/* <Route path='/' element={<Demo/>}/> */}
        {/* <Route path='/' element={<Trail/>}/> */}
        <Route path='/Login' element={<LoginDemo/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='/Register1' element={<Register1/>}/>
        <Route path='/Success' element={<Success/>}/>
        <Route path='/Forgotpassword' element={<Forgotpassword/>}/>
        <Route path='/Notification' element={<Notification/>}/>

         {/* ----------------------///DEALER////---------------------------- */}
       
          {/* <Route path='/' element={<Homedealer/>}/> */}
          <Route path='/Homedealer' element={<Homedealer/>}/>
          <Route path='/Todayscrap' element={<Todayscrap/>}/>
          <Route path='/Dealerdetails' element={<Dealerdetails/>}/>
          <Route path='/Scrapdetail' element={<Scrapdetail/>}/>
          <Route path='/Completeorder' element={<Completeorder/>}/>
          <Route path='/Completeorderdetail' element={<Completeorderdetail/>}/>
          <Route path='/Analytic' element={<Analytic/>}/>
          <Route path='/Feedback' element={<Feedback/>}/>
          <Route path='/Applicationstatus' element={<Applicationstatus/>}/>
          <Route path='/Dealerlogopage' element={<Dealerlogopage/>}/>  

          {/* ----------drawer dealer------ */}
          <Route path='/Dealeraccount' element={<Dealeraccount/>}/>
          <Route path='/Dealercustomer' element={<Dealercustomer/>}/>
          <Route path='/Dealerhelp' element={<Dealerhelp/>}/>
          <Route path='/Dealerorder' element={<Dealerorder/>}/>
          <Route path='/Dealerpayment' element={<Dealerpayment/>}/>
          <Route path='/Dealerorderview' element={<Dealerorderview/>}/>
          
          <Route path='/UpdateScrap' element={<UpdateScrap/>}/>
          <Route path='/InsertScrap' element={<InsertScrap/>}/>

          {/* ----------------------///USER////---------------------------- */}
          <Route path='/' element={<Homeuser/>}/>
          <Route path='/Homeuser' element={<Homeuser/>}/>
          <Route path='/Scrapselect' element={<Scrapselect/>}/>
          <Route path='/Bookdealer' element={<Bookdealer/>}/>
          <Route path='/Successful' element={<Successful/>}/>
          <Route path='/Userlogopage' element={<Userlogopage/>}/>  

          {/* --------footer----- */}
          <Route path='/Aboutus' element={<Aboutus/>}/>
          <Route path='/Becomedealer' element={<Becomedealer/>}/>
          <Route path='/BookingProtection' element={<BookingProtection/>}/>
          <Route path='/Career' element={<Career/>}/>
          <Route path='/Fulfillment' element={<Fulfillment/>}/>
          <Route path='/Sellon' element={<Sellon/>}/>  
_
          {/* ----------drawer user------ */}
          <Route path='/Useraccount' element={<Useraccount/>}/>
          <Route path='/Usercustomer' element={<Usercustomer/>}/>
          <Route path='/Userfaq' element={<Userfaq/>}/>
          <Route path='/Userhelp' element={<Userhelp/>}/>
          <Route path='/Yourbooking' element={<Yourbooking/>}/> 


          {/* ----------------------///COMPONENT////---------------------------- */}
          {/* <Route path='/' element={<Bottomdealer/>}/> */}
          {/* <Route path='/' element={<Headerdealer/>}/> */}
          {/* <Route path='/' element={<Header/>}/> */}
          {/* <Route path='/' element={<Bottom/>}/> */}
          {/* <Route path='/' element={<Footer/>}/> */}
          {/* <Route path='/' element={<LocationDisplay/>}/> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
