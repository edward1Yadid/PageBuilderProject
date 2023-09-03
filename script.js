/////////////////////////////////////////////////////The area for defining HTML objects.///////////////////////////////////////////////////

const widthOfelemnt = document.getElementById("widthOfelemnt");
const heightOfelemnt = document.getElementById("heightOfelemnt");
const textOnTheElement = document.getElementById("textOnTheElement");
const colorFont = document.getElementById("colorFont");
const colorBackground = document.getElementById("colorBackground");
const fontSize = document.getElementById("fontSize");
const typeOfTheFont = document.getElementById("typeOfTheFont");
const borderRadius = document.getElementById("borderRadius");
const BtnAdd = document.getElementById("BtnAdd");
const Btnremove = document.getElementById("Btnremove");
const PageBuilder = document.getElementById("PageBuilder");

/////////////////////////////////////////////////////"Element creation"//////////////////////////////////////////////////
let count = 1;

//regex for check the inputs value
const regexLetter = /^[A-Za-z-]+$/;

BtnAdd.addEventListener("click", addElement);
function addElement() {
  PageBuilder.innerHTML = "";
  sessionStorage.clear();
  const typeOfelemnt = document.getElementById("typeOfelemnt").value;

  let newElement = document.createElement(`${typeOfelemnt}`);

  newElement.classList.add(`${typeOfelemnt}-${count}`);

  //width
  if (regexLetter.test(widthOfelemnt.value)) {
    newElement.style.width = "max-content";
  } else if (widthOfelemnt.value.includes("px")) {
    newElement.style.width = widthOfelemnt.value.slice(0, 2) + "px";
  } else if (widthOfelemnt.value.includes("vw")) {
    newElement.style.width =
      String(Math.min(Number(widthOfelemnt.value.slice(0, 2)), Number("20"))) +
      "vw";
  }

  //height
  if (regexLetter.test(heightOfelemnt.value)) {
    newElement.style.height = "max-content";
  } else if (heightOfelemnt.value.includes("px")) {
    newElement.style.height = heightOfelemnt.value.slice(0, 2) + "px";
  } else if (heightOfelemnt.value.includes("vh")) {
    newElement.style.height =
      String(Math.min(Number(heightOfelemnt.value.slice(0, 2)), Number("20"))) +
      "vh";
  }

  ///contect on the element
  newElement.innerText = `${textOnTheElement.value}-${typeOfelemnt}-${count}`;

  ///type of fonts
  const fontFamilies = [
    "Arial",
    "Helvetica",
    "Times New Roman",
    "Georgia",
    "Courier New",
    "Verdana",
    "Impact",
    "Comic Sans MS",
  ];

  if (fontFamilies.includes(typeOfTheFont.value)) {
    newElement.style.fontFamily = typeOfTheFont.value;
  } else {
    // alert("I don't have this font - please choose a different one.");
  }
  //font-Size
  if (regexLetter.test(fontSize.value)) {
    newElement.style.fontSize = fontSize.value;
  } else if (fontSize.value.includes("px")) {
    newElement.style.fontSize = fontSize.value.slice(0, 2) + "px";
  } else if (fontSize.value.includes("%")) {
    newElement.style.fontSize = fontSize.value.slice(0, 2) + "%";
  } else if (fontSize.value.includes("em")) {
    newElement.style.fontSize =
      String(Math.min(Number(fontSize.value.slice(0, 2)), Number("10"))) + "em";
  }

  //border Radius

  if (borderRadius.value.includes("px")) {
    newElement.style.borderRadius = borderRadius.value.slice(0, 2) + "px";
  } else if (borderRadius.value.includes("%")) {
    newElement.style.borderRadius = borderRadius.value.slice(0, 2) + "%";
  }

  /////////////////////////////////////////////////////adding color//////////////////////////////////////////////////////////////////////

  //Background colors for everything.

  newElement.style.color = colorFont.value;
  newElement.style.backgroundColor = colorBackground.value;

  //////Completion of element creation
  PageBuilder.appendChild(newElement);

  sessionStorage.setItem(`${typeOfelemnt}-${count}`, newElement.outerHTML);
  count++;
}

addElement();

//////////////////////////////////////////////////////////////////Programming the help area./////////////////////////////////////////////
const dropDownArray = [
  {
    //width
    header: "The types of width's you can order at Element",
    example1: "20px= '20px-max-99'",
    example2: "any letter='max-content'",
    example3: "20vw='20vw-max-99'",
  },
  {
    //height
    header: "The types of height's you can order at Element",
    example1: "20px= '20px-max-99'",
    example2: "any letter='max-content'",
    example3: "20vh='20vh-max-99'",
  },
  {
    //textExtra
    header: "Examples of content you can post on Element",
    example1: "you can write a poem song",
    example2: "you can write to-do list",
    example3: "you can just spread your thoughts",
  },
  // font types
  {
    header: "The available font types",
    example1: "Arial",
    example2: "Helvetica",
    example3: "Times New Roman",
  },
  {
    // font zise
    header: "font-size property",
    example1: "larger",
    example2: "smaller",
    example3: "medium",
  },
];
const dropDownContainer = document.getElementById("dropDownContainer");
function showDropDown() {
  let elementExamples = "";
  dropDownArray.forEach((element) => {
    elementExamples += `

            <div class="navbar">
            <div><h3 class="header">${element.header}</h3></div>
            <div>
           <a href="#" id="hamburger"><img class="imageBar" src="./images/bar.PNG" alt="images"></a>
           
                <a class="show" href="#">${element.example1}</a>
                <a class="show" href="#">${element.example2}</a>
                <a class="show" href="#">${element.example3}</a>
          
            </div>

            </div>
`;
  });

  dropDownContainer.innerHTML = elementExamples;
  dropDownContainer.innerHTML += `   <button id="closeHelpBtn">close Windows</button>`;
}
showDropDown();

const openHelpBtn = document.getElementById("openWindowsButton");
openHelpBtn.addEventListener("click", openWindows);
function openWindows() {
  dropDownContainer.classList.remove("closeWindows");
}

const closeHelpBtn = document.getElementById("closeHelpBtn");
closeHelpBtn.addEventListener("click", closeWindows);

function closeWindows() {
  dropDownContainer.classList.add("closeWindows");
}

////////////////////////////////////////////////////////Launching help windows//////////////////////////////////////////////////////////////////
const hamburger = document.querySelectorAll("#hamburger");
hamburger.forEach((element) => {
  element.addEventListener("mouseover", openDropDown);
});

const show = document.querySelectorAll(".show");
function openDropDown() {
  show.forEach((elemet) => {
    elemet.style.display = "block";
  });

  document.querySelectorAll(".header").forEach((element) => {
    element.style.display = "none";
  });
}
hamburger.forEach((element) => {
  element.addEventListener("mouseleave", closeDropDown);
});

function closeDropDown() {
  const show = document.querySelectorAll(".show");

  show.forEach((elemet) => {
    elemet.style.display = "none";
    closeHelpBtn.style.display = "block";
  });
  document.querySelectorAll(".header").forEach((element) => {
    element.style.display = "block";
  });
}
const BtnRestore = document.getElementById("BtnSave");

//////////////////////////////////////////////////////////////////////////restore the data/////////////////////////////////////////////////////

BtnRestore.addEventListener("click", restorefromsessionUser);
const typeOfelemnt = document.getElementById("typeOfelemnt").value;

const innherPagebuilder = sessionStorage.getItem(
  `${typeOfelemnt}-${count - 1}`
);
const element = innherPagebuilder;
function restorefromsessionUser() {
  PageBuilder.innerHTML = "";
  PageBuilder.innerHTML = element;
}
//////////////////////////////////////////////////////////////////////////remove the data/////////////////////////////////////////////////////
Btnremove.addEventListener("click", removeElemnets);

function removeElemnets() {
  PageBuilder.childNodes.forEach((element) => {
    element.remove();

    PageBuilder.style.backgroundColor = "transparent";
    document.querySelectorAll("input").forEach((element) => {
      element.value = "";
    });
  });
  sessionStorage.clear();
  count = 1;
  textOnTheElement.value = "";
}

//////////////////////////////////////////////////////////////scanner animation //////////////////////////////////////////////////////////////

const div = document.createElement("div");
div.classList.add("box");
div.style.display = "inline-block";
div.style.backgroundColor = "rgb(85, 85, 175)";
div.style.width = "60%";
div.style.height = "3px";
div.style.marginRight = "68px";

document.querySelectorAll("input").forEach((input) => {
  if (input.value == "") {
    BtnAdd.Disabled = true;
    PageBuilder.innerHTML = "";
  }
});

document.getElementById("scan").addEventListener("click", () => {
  const p = document.createElement("p");
  p.classList.add("scannerUpdate");

  let counter = 0;
  const animationScanner = setInterval(() => {
    p.innerText =
      "....We are scanning your drawing and uploading it to sessionStorage. This process may take a few seconds";

    document.body.appendChild(p);

    document.body.appendChild(div);
    counter += 10;
    div.style.marginTop = counter + "px";
    if (div.style.marginTop == "930px") {
      p.innerText = "The scanning and uploading process has finished";
      clearInterval(animationScanner);
      document.body.removeChild(div);
      openHelpBtn.style.display = "block";

      setTimeout(() => {
        document.body.removeChild(p);
        PageBuilder.innerHTML = "";
      }, 4000);
    }
  }, 100);
});
const p = document.createElement("p");
