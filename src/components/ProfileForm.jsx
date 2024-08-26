import React from 'react';
import { useState } from 'react';


const ProfileForm = () => {
  const [email, setEmail] = useState('user.email');
  const [name, setName] = useState('');
  const [handle, setHandle] = useState('');
  const [bio, setBio] = useState('');


  const handleSubmit = (event) => {
    event.preventDefault();
   console.log(email, name, handle, bio);

  }
  return (
    <div className="flex flex-col items-center">
      <form className="flex flex-col items-left" onSubmit={handleSubmit}>
        <label className="text-white font-bold">Email:</label>
        <input
          className="bg-black rounded border border-gray-400 leading-normal py-2 px-3 focus:outline-none focus:bg-black"
          type="text"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="text-white font-bold">Name:</label>
        <input
          className="bg-black rounded border border-gray-400 leading-normal py-2 px-3 focus:outline-none focus:bg-black"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <label className="text-white font-bold">User Handle:</label>
        <input
          className="bg-black rounded border border-gray-400 leading-normal py-2 px-3 focus:outline-none focus:bg-black"
          type="text"
          value={handle}
            onChange={(event) => setHandle(event.target.value)}
            />
            <label className="text-white font-bold">Bio</label>
            <input
            className="bg-black rounded border border-gray-400 leading-normal py-2 px-3 focus:outline-none focus:bg-black"
            type="text"
            value={bio}
            onChange={(event) => setBio(event.target.value)}
            />
            <button className="btn_accent text-white px-4 py-2 rounded-lg">
                Update
                </button>
                </form>
                </div>
                
  )

}
export default ProfileForm;