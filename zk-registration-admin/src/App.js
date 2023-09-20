import "./App.css";
import React, { useContext , useState } from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import AdminHome from "./component/AdminHome/AdminHome";
import Header from "./component/Header/Header";

import { AuthContext } from "./contexts/AuthContext";
import Dashboard from "./component/Dashboard/Dashboard";
import { MdOutlineSpeed ,MdSchool ,MdVerified ,MdOutlinePendingActions ,MdPeopleAlt ,MdDoneAll ,MdCardGiftcard,MdArrowCircleRight} from "react-icons/md";

import { NavLink } from "react-router-dom";
import User from "./component/Dashboard/User";
import RegisteredStudents from "./component/RegisteredStudent";
import VerifiedStudent from "./component/VerifiedStudent";
import NotVerified from "./component/NonVerified";
import University from "./component/University";
import Approve from "./component/Approve/Approve";
import Claim from "./component/Claim";


function App() {
  const { isAuthenticated } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const menuItem = [
    {
      path: "/dashboard",
      name: "Registered Users",
      icon: <MdPeopleAlt />,
    },
    {
      path: "/user",
      name: "Verified Users",
      icon: <MdVerified />,
    },
    {
      path: "/NonVerified",
      name: "Non-Verified Users",
      icon: <MdOutlinePendingActions />,
    },
    {
      path: "/approve",
      name: "Approve",
      icon: <MdDoneAll />,
    },
    {
      path: "/claim",
      name: "Claim",
      icon: <MdCardGiftcard />,
    },
  ];

  return (
    <Router>
      {!isAuthenticated ? (
        <Routes>
          <Route
            path="/*"
            element={
              isAuthenticated ? (
                <Navigate to="/admin" />
              ) : (
                <Navigate to="/admin" />
              )
            }
          />
          <Route path="/admin" element={<AdminHome />} />
        </Routes>
      ) : (
        <>
          {/* <Header /> */}
          <div className="d-flex" style={{height: '100vh'}}>
            <div
              style={
                isOpen
                  ? { width: "245px", minWidth: "245px" }
                  : { width: "54px", minWidth: "54px", background: "#0d48a1" }
              }
              className='SideBar'
            >
              <div onClick={()=> setIsOpen(!isOpen)} style={{height:"50px"}}> <MdArrowCircleRight/></div>
              <div>
                {menuItem.map((item, index) => (
                  <NavLink
                    to={item.path}
                    key={index}
                    className={({ isActive }) =>
                      isActive ? "link activeNav" : "link"
                    }
                  >
                    <div className="icon">{item.icon}</div>
                    <div
                      style={{ display: isOpen ? "block" : "none" }}
                      className="link_text"
                    >
                      {item.name}
                    </div>
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="Container">
              <div className="Wrapper">
                <Routes>
                  <Route
                    path="/admin"
                    element={
                      isAuthenticated ? (
                        <Navigate to="/dashboard" />
                      ) : (
                        <Navigate to="/admin" />
                      )
                    }
                  />
                  <Route
                    path="/dashboard"
                    element={
                      isAuthenticated ? <RegisteredStudents /> : <Navigate to="/admin" />
                    }
                  />
                  <Route
                    path="/user"
                    element={
                      isAuthenticated ? <VerifiedStudent /> : <Navigate to="/admin" />
                    }
                  />
                                    <Route
                    path="/NonVerified"
                    element={
                      isAuthenticated ? <NotVerified /> : <Navigate to="/admin" />
                    }
                  />
                     <Route
                    path="/University"
                    element={
                      isAuthenticated ? <University /> : <Navigate to="/admin" />
                    }
                  />
                  <Route
                    path="/approve"
                    element={
                      isAuthenticated ? <Approve /> : <Navigate to="/admin" />
                    }
                  />
                 <Route
                    path="/claim"
                    element={
                      isAuthenticated ? <Claim /> : <Navigate to="/admin" />
                    }
                  />
                </Routes>
              </div>
            </div>
          </div>
        </>
      )}
    </Router>
  );
}

export default App;
