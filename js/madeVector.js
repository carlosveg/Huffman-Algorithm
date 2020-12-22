var getArray = document.getElementById("btn-input-array");

getArray.addEventListener("click", () => {
  let currentArray = document.getElementById("input-array").value;

  currentArray = JSON.parse(`[${currentArray}]`);

  console.log("====================================");
  console.log(currentArray);
  console.log(typeof currentArray);
  console.log(typeof currentArray[1]);
  console.log("====================================");

  return currentArray;
});
