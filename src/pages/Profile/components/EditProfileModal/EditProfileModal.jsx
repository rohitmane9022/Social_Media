import "./EditProfileModal.css";
import { RxCross2 } from "react-icons/rx";


import React from "react";
import { useLoggedInUser } from "../../../../contexts/LoggedInUserProvider";
import { useEffect, useState } from "react";
import { useAuth } from "../../../../contexts/AuthProvider";

export const EditProfileModal = ({ setIsEditProfile, className }) => {
  const { loggedInUserState, editUser } = useLoggedInUser();

  const { auth } = useAuth();
  const [formValues, setFormValues] = useState({
    bio: loggedInUserState?.bio,
    website: loggedInUserState?.website,
    avatarURL: loggedInUserState?.avatarURL,
  });

  useEffect(() => {
    setFormValues({
      bio: loggedInUserState?.bio,
      website: loggedInUserState?.website,
      avatarURL: loggedInUserState?.avatarURL,
    });
  }, [loggedInUserState]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        editUser(formValues, auth.token);
        setIsEditProfile(false);
      }}
      className={className}
    >
      <div className="edit-profile-modal-body">
        <div className="edit-modal-header-container">
          <span>
            <RxCross2
              className="close-icon"
              onClick={() => {
                setIsEditProfile(false);
              }}
            />
          </span>
          <span className="edit-page-heading">Edit Profile</span>
          <span>
            <input className="edit-profile-btn" type="submit" value="Save" />
          </span>
        </div>

        <div className="edit-profile-img-container">
          <img src={formValues?.avatarURL} alt={loggedInUserState?.firstName} />
          
        </div>
        <div className="username-container">
          <p>
            {loggedInUserState.firstName} {loggedInUserState.lastName}
          </p>
          <span>@{loggedInUserState.username}</span>
        </div>
        <div className="bio-container">
          <label htmlFor="bio">Bio:</label>
          <textarea
            onChange={(e) => {
              setFormValues({ ...formValues, bio: e.target.value });
            }}
            id="bio"
            value={formValues?.bio}
          />
        </div>
        <div className="user-website-container">
          <label htmlFor="user-website">Website:</label>
          <textarea
            onChange={(e) => {
              setFormValues({ ...formValues, website: e.target.value });
            }}
            id="user-website"
            value={formValues?.website}
          />
        </div>
      </div>
    </form>
  );
};
