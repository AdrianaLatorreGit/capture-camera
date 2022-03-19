const button = document.getElementById("button");
const p = document.getElementById("text");
const div = document.getElementById("container");

const redGreenBlue = () => {
  const red = Math.round(Math.random() * 256);
  const green = Math.round(Math.random() * 256);
  const blue = Math.round(Math.random() * 256);
  div.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

  p.innerText = `rgb(${red}, ${green}, ${blue})`;
};

button.addEventListener("click", redGreenBlue);
