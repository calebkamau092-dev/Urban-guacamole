function Parent() {
  //primitive datatypes
  const str = "Hello world"; ///string
  const amount = 2000; //number
  const isOk = true; //boolean
  const notSet = null; //null
  const car = {
    model: "Renult truck",
    manufacture: "Renult",
    engine: {
      cc: 2500,
    },
  };

  const colors = ["blue", "green", "yellow"];


  return (
    <div>
      <h1> I am the parent component</h1>
      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
      <Child2 
      str={str} 
      amountInNumber={amount} 
      isOk={isOk} 
      notSet={notSet} 
      car={car}
      colors={colors}
      obj={{name: "", value: ""}}
      />
      <Child3 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
    </div>
  );
}

// display props using prop keyword
function Child1(props) {
  console.log(props);
  return (
    <div>
      <h1>I am the child component</h1>
      <ul>
        <li>
          Favourite string <b>{props.str}</b>
        </li>
        <li>
          Amount <b>{props.amountInNumber}</b>
        </li>
        <li>
          isOk <b>{props.isOk}</b>
        </li>
        <li>
          isOk <b>{String(props.isOk)}</b>{" "}
          {/*
            for booleans convert them to string before displaying
          */}
        </li>
        <li>
          Not set <b>{props.notSet}</b>
        </li>
      </ul>
    </div>
  );
}

function Child2(props) {
  const { str, amountInNumber, isOk, notSet } = props;
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

function Child3({ str, amountInNumber, isOk, notSet }) {
  return (
    <div>
      <h1>I am the child 2 component</h1>
      <ul>
        <li>
          Favourite string <b>{str}</b>
        </li>
        <li>
          Amount <b>{amountInNumber}</b>
        </li>
        <li>
          isOk <b>{isOk}</b>
        </li>
        <li>
          isOk <b>{String(isOk)}</b>{" "}
        </li>
        <li>
          Not set <b>{notSet}</b>
        </li>
      </ul>
    </div>
  );
}

export default Parent;