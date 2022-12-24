import { useEffect, useState } from "react";
import InputBox from "./task-class/InputBox";

const UEWD = () => {
  const [search, setSearch] = useState("");

  useEffect(() => {
    console.log("Mounting");
  }, []);

  useEffect(() => {
    console.log("Updating : ", search);
  }, [search]);

  return (
    <>
      <InputBox value={search} onChange={(name, value) => setSearch(value)} />
      <p>Search Key: {search}</p>
    </>
  );
};

export default UEWD;
