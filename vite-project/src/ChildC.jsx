import ChildD from "./ChildD";

const ChildC = ({ name }) => {
  return (
    <>
      <p>ChildC Component</p>
      <ChildD name={name} />
    </>
  );
};

export default ChildC;
