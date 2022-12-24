import { useState } from "react";

const RegisterUser = () => {
  const [profile, setProfile] = useState({
    name: "pragati",
    city: "satna",
    state: "MP",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setProfile((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  return (
    <>
      <div>
        <p>Name: {profile.name}</p>
        <input name="name" value={profile.name} onChange={handleInputChange} />
      </div>
      <div>
        <p>City: {profile.city}</p>
        <input name="city" value={profile.city} onChange={handleInputChange} />
      </div>
      <div>
        <p>State: {profile.state}</p>
        <input
          name="state"
          value={profile.state}
          onChange={handleInputChange}
        />
      </div>
    </>
  );
};

export default RegisterUser;
