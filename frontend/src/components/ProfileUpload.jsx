import React, { useState } from 'react';

const ProfileUpload = () => {
  const [imagePreview, setImagePreview] = useState(
    'https://imgs.search.brave.com/KXXub0Ya9VhGCG-HZMEZQWrv89IHNao1y6w3ZD6JKCk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cmQuY29tL3dwLWNv/bnRlbnQvdXBsb2Fk/cy8yMDIxLzA0L0dl/dHR5SW1hZ2VzLTkz/NjE3NjU0Ni5qcGc'
  );

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImagePreview(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative ml-24">
      <div className="avatar-upload">
        <div className="avatar-edit relative">
          <input
            type="file"
            id="imageUpload"
            accept=".png, .jpg, .jpeg"
            onChange={handleImageChange}
            className="hidden"
          />
          <label htmlFor="imageUpload" className="cursor-pointer">
            <div className="w-12 h-12 bg-white border border-transparent rounded-full shadow-md hover:bg-gray-100 hover:border-gray-300 flex items-center justify-center">
              {/* Edit Profile */}
              <i className="fa fa-camera text-gray-700"></i>
            </div>
          </label>
        </div>
        <div className="avatar-preview w-16 h-16 rounded-full border-4 border-gray-200">
          <div
            id="imagePreview"
            style={{ backgroundImage: `url(${imagePreview})` }}
            className="w-full h-full rounded-full bg-cover bg-no-repeat bg-center"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProfileUpload;
