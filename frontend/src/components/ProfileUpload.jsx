import React, { useState, useRef } from 'react';

const ProfileNavbar = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('EX:Your Name'); // Initial user name
  const [userImage, setUserImage] = useState(
    'https://example.com/default-profile-image.png' // Initial user image URL
  );

  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setUserImage(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSave = () => {
    // Save user's name and image (you can implement this logic)
    setIsEditing(false);
  };

  const toggleEditing = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="flex items-center">
      <button className="px-4 py-2 text-sm font-black border-2 border-black bg-accent" onClick={toggleEditing}>
        PROFILE
      </button>
      <div className="ml-4 font-bold">
        {isEditing ? (
          <div>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <input
              type="file"
              accept=".png, .jpg, .jpeg"
              onChange={handleImageChange}
              ref={inputRef}
            />
            <button onClick={handleSave}>Save</button>
          </div>
        ) : (
          <div onClick={toggleEditing}>
            <p>{userName}</p>
            <img
              src={userImage}
              alt="Profile"
              width="50"
              height="50"
              onClick={() => inputRef.current.click()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfileNavbar;
