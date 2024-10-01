// button element
const changeColorBtn = document.getElementById('change-color-btn');


function changeBackgroundColor() {
  
  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  document.body.style.backgroundColor = randomColor;
}


changeColorBtn.addEventListener('click', changeBackgroundColor);