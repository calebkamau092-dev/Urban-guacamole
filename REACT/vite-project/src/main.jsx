import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

//starts with a capital letter because it is a component and is a function
function MyComponent() {
  return null; //valid jsx
}
function MyComponent2() {
  return <div><h1>Coding is cool</h1></div>;
}
function MyComponent3() { //Reactfragment
  return (
    <div>
      <h1>Coding is cool</h1>
      <div>React is awesome</div>
    </div>
  );
}

function ParentComponent() {
  return (
    <div>
      <h1>This is the parent component</h1>
      <MyComponent /> {/* self closing tag */}
      <MyComponent></MyComponent> {/* open and self closing tags */}
      <MyComponent2 />
      <MyComponent3 />
    </div>
  );
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1>My first react app</h1>
    <ParentComponent />
  </StrictMode>,
)
