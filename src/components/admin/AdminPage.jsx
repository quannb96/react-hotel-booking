import React from "react";
import { Link } from "react-router-dom";
import "./adminPage.scss";
export const AdminPage = () => {
  return (
    <div className="admin-page">
      <h1>AdminPage</h1>
      <Link to={"/"}>
        <h3>Comeback Home Page</h3>
      </Link>
    </div>
  );
};
