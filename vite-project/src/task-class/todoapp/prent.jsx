import { useState } from "react";
import ChildA from "../../childa";

const FormPractice = () => {
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

  return (
    <>
      <div>
        <input name="name" value={profile.name} onChange={handleInputChange} />
        <p>Name: {profile.name}</p>
      </div>
      <ChildA name={profile.name} />
      <div>
        <input name="city" value={profile.city} onChange={handleInputChange} />
        <p>City: {profile.city}</p>
      </div>
    </>
  );
};

export default FormPractice;
