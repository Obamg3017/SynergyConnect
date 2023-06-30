import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import AuthForm from "../features/auth/AuthForm";
import Home from "../features/home/Home";
import AdminView from "../features/admin/AdminView";
import { me } from "./store";
import { selectUser } from "../features/auth/authSlice";
import EditUser from "../features/admin/EditUser";
import UserView from "../features/userView/userView";
import ContactUs from "../features/ContactUs/ContactUs"

/**
 * COMPONENT
 */

const AppRoutes = () => {
  const isLoggedIn = useSelector((state) => !!state.auth.me.id);
  const user = useSelector(selectUser);
  const isAdmin = user.me.isAdmin;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(me());
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        isAdmin ? (
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route to="/home" element={<Home />} />
            <Route path="/admin" element={<AdminView />} />
            <Route path="/admin/:id" element={<EditUser />} />
            <Route to="/chat" element={<Home />} />
            <Route path="/profile" element={<UserView />} />
            <Route path="/profile/:id" element={<UserView />} />
            <Routes path="/ContactUs" element={<ContactUs />} />
          </Routes>
        ) : (
          <Routes>
          <Route path="/*" element={<Home />} />
            <Route to="/home" element={<Home />} />
            <Route to="/chat" element={<Home />} />
            <Route path="/profile" element={<UserView />} />
            <Route path="/profile/:id" element={<UserView />} />
            <Route path="/ContactUs" element={<ContactUs />} />
          </Routes>
        )
      ) : (
        <Routes>
          <Route
            path="/*"
            element={<AuthForm name="login" displayName="Login" />}
          />
           <Route path="/ContactUs" element={<ContactUs />} 
           />
          <Route
            path="/login"
            element={<AuthForm name="login" displayName="Login" />}
          />
          <Route
            path="/signup"
            element={<AuthForm name="signup" displayName="Sign Up" />}
          />
        </Routes>
      )}
    </div>
  );
};

export default AppRoutes;
