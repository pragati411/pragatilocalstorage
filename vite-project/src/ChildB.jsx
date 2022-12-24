import ChildC from "./ChildC";

const ChildB = (props) => {
  return (
    <>
      <p>ChildB Component</p>

      <ChildC {...props} props={props} />
    </>
  );
};

export default ChildB;
