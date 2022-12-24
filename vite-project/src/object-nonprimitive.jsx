import { useState } from "react";

const FormD = () => {
  const [profile, setProfile] = useState({
    name: "",
    city: "",
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
  console.log("rendering");

  return (
    <>
      <div>
        <input name="name" value={profile.name} onChange={handleInputChange} />
        <p>Name: {profile.name}</p>
      </div>
      <div>
        <input name="city" value={profile.city} onChange={handleInputChange} />
        <p>City: {profile.city}</p>
      </div>
    </>
  );
};

export default FormD;
