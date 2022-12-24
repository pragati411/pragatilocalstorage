import { useEffect } from "react";
import { useState } from "react";

export const XY = () => {
  const [pinCode, setPincode] = useState("");
  const [showPin, setListPin] = useState([]);

  useEffect(() => {
    const getData = setTimeout(() => {
      if (pinCode) {
        fetch(`https://api.postalpincode.in/pincode/${pinCode}`)
          .then((data) => data.json())
          .then((data) => {
            if (
              pinCode.length === 6 &&
              data[0].PostOffice[0].Name !== undefined &&
              data[0].PostOffice[0].Name !== null
            )
              setPincode(data[0].PostOffice[0].Name);
          });
      }
    }, 2000);
    return () => clearTimeout(getData);
  }, [pinCode]);
  return (
    <>
      <input onChange={(e) => setPincode(e.target.value)} />
      <h1>{pinCode}</h1>
    </>
  );
};
