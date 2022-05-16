const container = document.querySelector("#container");
let page = 1;
console.log("3called");
let timerId;
const throttleFunction = (func, delay) => {
  if (timerId) {
    return;
  }
  timerId = setTimeout(function () {
    func();
    timerId = undefined;
  }, delay);
  console.log("13called");
};

const fetchData = async () => {
  console.log("called");
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/comments?_page=${page++}&_limit=25`
  );
  const data = await response.json();
  console.log(data);

  data.map((value) => {
    return card(value);
  });
};

// const fetchData = async () => {
//   console.log("16called");
//   const data = [
//     "1",
//     "2",
//     "3",
//     "4",
//     "5",
//     "6",
//     "7",
//     "8",
//     "9",
//     "10",
//     "11",
//     "12",
//     "13",
//     "14",
//     "15",
//     "16",
//     "17",
//     "18",
//     "19",
//     "20",
//   ];

//   data.map((value) => {
//     // console.log("24called");
//     return card(value);
//   });
// };

const card = (value) => {
  // console.log("29called");
  const div1 = document.createElement("div");
  div1.classList.add("conta_div");
  div1.innerHTML = `<h1>Comment :- ${value.name}</h1>\n<h2>Email :- ${value.email}</h2>\n<h4>Message :- ${value.body}</h3>`;
  container.append(div1);
};
fetchData();

window.addEventListener("scroll", () => {
  const obj = document.documentElement;
  console.log("41", obj);
  const { scrollHeight, scrollTop, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight) {
    throttleFunction(fetchData, 500);
  }
});
