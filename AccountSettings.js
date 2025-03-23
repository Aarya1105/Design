import React from "react";
import "../styles.css";

const AccountSettings = () => {
  return (
    <div className="account-settings-container">
      <h2>Account Settings</h2>
      <div className="profile-card">
        <img
          src="https://cdn.pixabay.com/photo/2021/03/03/08/56/woman-6064819_1280.jpg"
          alt="User Avatar"
          className="profile-avatar"
        />
        <div className="profile-info">
          <h3>Marry Doe</h3>
          <p>Marry@Gmail.Com</p>
        </div>
      </div>
      <p className="profile-description">
        Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
        Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquam Erat,
        Sed Diam
      </p>
    </div>
  );
};

export default AccountSettings;
