import React from 'react'

function Example({name, tool}) {
  return (
    <div>
      <h1>My name is {name}.</h1>
      <p>My favorite design language is {tool}.</p>
    </div>
  );

}

Example.defaultProps = {
  name: "Sarath",
  tool: "React"
}

export default Example;