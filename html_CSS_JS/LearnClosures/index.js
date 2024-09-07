


function outerFunction() {
  let name = "Babbar";

  function innerFunction() {
    console.log(name);
  }

  return innerFunction;
}
let inner = outerFunction();

inner();
