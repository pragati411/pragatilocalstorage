import ChildB from "./ChildB";

const ChildA = (props) => {
  return (
    <>
      <p>ChildA Component</p>
      <ChildB name={props.name} />
    </>
  );
};

export default ChildA;
