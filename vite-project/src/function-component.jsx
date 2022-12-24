import { useState } from "react";

const FunctionComponent = () => {
  const [userName, setUserName] = useState("pragati");
  const [userCity, setUserCity] = useState("");
  const [userState, setUserState] = useState("");

  return (
    <div>
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <div>
        <input
          type="text"
          value={userCity}
          onChange={(e) => setUserCity(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          value={userState}
          onChange={(e) => setUserState(e.target.value)}
        />
      </div>
      <p>Name: {userName}</p>
      <p>City: {userCity}</p>
      <p>State: {userState}</p>
    </div>
  );
};

export default FunctionComponent;
