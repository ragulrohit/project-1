import Child from "./Child";

function Parent() {
  return (
    <div>
      <h1>Parent Component</h1>

      <Child name="Naveen" role="Frontend Developer" />
      <Child name="Kumar" role="React Learner" />
    </div>
  );
}

export default Parent;