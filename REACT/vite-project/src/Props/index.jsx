function Parent() {
  //primitive datatypes
  const str = "Hello world"; ///string
  const amount = 2000; //number
  const isOk = true; //boolean
  const notSet = null; //null

  return (
    <div>
      <h1> I am the parent component</h1>
      <Child1 str={str} amountInNumber={amount} isOk={isOk} notSet={notSet} />
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

export default Parent;