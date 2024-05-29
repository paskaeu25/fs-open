const Hello = (props) => {
  console.log(props);
  return (
    <>
      <p>
        Hello {props.name}, your age is {props.age} years old
      </p>
    </>
  );
};

const Footer = () => {
  return (
    <>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </>
  );
};

const App = () => {
  const friends = [
    { name: 'John', age: 32 },
    { name: 'Pete', age: 30 },
  ];

  return (
    <>
      <p>{friends[0].name}</p>
      <p>{friends[1].name}</p>
    </>
  );
};

export default App;
