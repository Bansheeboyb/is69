const is69 = require('./index');

const test = async () => {
  const test1 = await is69(69);
  console.log(test1);

  const test2 = await is69("69");
  console.log(test2);

  const test3 = await is69(690);
  console.log(test3);

  const test4 = await is69("NICE");
  console.log(test4);

  const test5 = await is69("1969");
  console.log(test5);

  const test6 = await is69("peanits");
  console.log(test6);
}

test();
