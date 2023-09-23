/////////////////////////////////////////////////////The area for defining HTML objects./////////////////////////
const widthOfelemnt = document.getElementById("widthOfelemnt");
const heightOfelemnt = document.getElementById("heightOfelemnt");
const textOnTheElement = document.getElementById("textOnTheElement");
const typeOfTheFont = document.getElementById("typeOfTheFont");
const borderRadius = document.getElementById("borderRadius");
const colorFont = document.getElementById("colorFont");
const colorBackground = document.getElementById("colorBackground");
const fontSize = document.getElementById("fontSize");
const fontSelector = document.getElementById("fontSelector");
const PageBuilder = document.querySelector("#PageBuilderContainer");
const BtnAdd = document.getElementById("BtnAdd");
const loadBtn = document.getElementById("Btnrestore");
const inputsElements = document.getElementById("inputsElements");
const typeOfelemnt = document.getElementById("typeOfelemnt");
const Btnremove = document.getElementById("Btnremove");

//selection of properties
const Selectwidth = document.querySelector(".width");
const Selectheight = document.querySelector(".height");
const selectfontSize = document.querySelector(".fontsizeSelect");
const SelectborderRadius = document.querySelector(".borderRadius");
let count = 1;

/////////////////////////////////////////////////////add data to screen.////////////////////////////////

BtnAdd.addEventListener("click", (event) => {
  let newElement = document.createElement(`${typeOfelemnt.value}`);

  newElement.classList.add(`${typeOfelemnt.value}-${count}`);
  //width
  if (Selectwidth.value == "%") {
    newElement.style.width =
      String(Math.min(Number(widthOfelemnt.value), Number("50"))) +
      Selectwidth.value;
  } else if (Selectwidth.value == "px") {
    newElement.style.width =
      String(Math.min(Number(widthOfelemnt.value), Number("200"))) +
      Selectwidth.value;
  } else if (Selectwidth.value == "em") {
    newElement.style.width =
      String(Math.min(Number(widthOfelemnt.value), Number("200"))) +
      Selectwidth.value;
  } else if (Selectwidth.value == "rem") {
    newElement.style.width =
      String(Math.min(Number(widthOfelemnt.value), Number("200"))) +
      Selectwidth.value;
  }

  //height
  if (Selectheight.value == "%") {
    newElement.style.height =
      String(Math.min(Number(heightOfelemnt.value), Number("50"))) +
      Selectheight.value;
  } else if (Selectheight.value == "px") {
    newElement.style.height =
      String(Math.min(Number(heightOfelemnt.value), Number("200"))) +
      Selectheight.value;
  } else if (Selectheight.value == "em") {
    newElement.style.height =
      String(Math.min(Number(heightOfelemnt.value), Number("200"))) +
      Selectheight.value;
  } else if (Selectheight.value == "rem") {
    newElement.style.height =
      String(Math.min(Number(heightOfelemnt.value), Number("200"))) +
      Selectheight.value;
  }

  ///fonst-size

  if (selectfontSize.value == "px") {
    newElement.style.fontSize =
      String(Math.min(Number(fontSize.value), Number("200"))) +
      selectfontSize.value;
  } else if (selectfontSize.value == "pt") {
    newElement.style.fontSize =
      String(Math.min(Number(fontSize.value), Number("200"))) +
      selectfontSize.value;
  } else if (selectfontSize.value == "em") {
    newElement.style.fontSize =
      String(Math.min(Number(fontSize.value), Number("50"))) +
      selectfontSize.value;
  } else if (selectfontSize.value == "rem") {
    newElement.style.fontSize =
      String(Math.min(Number(fontSize.value), Number("50"))) +
      selectfontSize.value;
  }

  if (SelectborderRadius.value == "%") {
    newElement.style.borderRadius =
      String(Math.min(Number(borderRadius.value), Number("50"))) +
      SelectborderRadius.value;
  } else if (SelectborderRadius.value == "px") {
    newElement.style.borderRadius =
      String(Math.min(Number(borderRadius.value), Number("200"))) +
      SelectborderRadius.value;
  }
  newElement.style.fontFamily = fontSelector.value;
  newElement.innerText = textOnTheElement.value;
  newElement.style.color = colorFont.value;
  newElement.style.backgroundColor = colorBackground.value;

  console.log(newElement);
  event.preventDefault();
  PageBuilder.appendChild(newElement);
  count++;
});

const regexLetter = /^[A-Za-z-]+$/;
///////////////////////////////////////Update data to localStorage  /////////////////////////////////////////////////////////

const div = document.createElement("div");
div.id = "update";

div.style.backgroundColor = "rgb(85, 85, 175)";
div.style.width = "79%";
div.style.height = "3px";
div.style.marginRight = "68px";
div.style.top = "10px";
div.style.left = "1px";

document.querySelectorAll("input").forEach((input) => {
  if (input.value == "") {
    BtnAdd.Disabled = true;
    PageBuilder.innerHTML = "";
  }
});
const scannerUpdate = document.querySelector(".scannerUpdate");
document.getElementById("BtnAddlocal").addEventListener("click", () => {
  let counter = 0;
  const animationScanner = setInterval(() => {
    scannerUpdate.innerHTML =
      "....We are scanning your drawing and uploading it to localStorage. This process may take a few seconds";
    div.style.display = "block";
    document.body.appendChild(div);
    counter += 10;
    div.style.marginTop = counter + "px";
    if (div.style.marginTop == "930px") {
      scannerUpdate.innerHTML =
        "The scanning and uploading process has finished";
      clearInterval(animationScanner);
      document.body.removeChild(div);

      setTimeout(() => {
        PageBuilder.innerHTML = "";
        scannerUpdate.innerHTML = "welcome to PageBuilderProject ";
      }, 4000);
    }
  }, 100);

  //////////////////////////////////////////////////////////restore the data/////////////////////////////////////////////////////

  localStorage.setItem("elements", PageBuilder.outerHTML);

  loadBtn.addEventListener("click", () => {
    if (localStorage.getItem("elements") !== "") {
      const items = localStorage.getItem("elements");
      PageBuilder.outerHTML = items;
    } else {
      alert("storage is empty");
    }
  });
});
///////////////////////////////////////////////////////remove the data/////////////////////////////////////////////////////
Btnremove.addEventListener("click", () => {
  PageBuilder.innerHTML = "";
  localStorage.clear();
  count = 1;
  textOnTheElement.value = "";

  document.querySelectorAll("input").forEach((element) => {
    element.value = "";
  });
});
