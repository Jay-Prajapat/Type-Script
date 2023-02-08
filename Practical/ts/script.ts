var memory: number[] = [];

var screen_ans : HTMLElement = document.querySelector(".current") as HTMLElement;
var ans :HTMLElement = document.querySelector(".previous") as HTMLElement;
var btn = document.querySelectorAll(".numbtn")!;
var opr = document.querySelectorAll(".operator")!;

for (let item of btn) {
  item.addEventListener("click", (e:{target}) => {
    let btnText = e.target.innerText;

    if (!(btnText == "." && screen_ans.innerHTML.includes("."))) {
      screen_ans.innerHTML += btnText;
    }
  });
}
for (let item of opr) {
  item.addEventListener("click", (e:{target}) => {
    let oprText = e.target.innerText;
    console.log(oprText);
    if (oprText == "x") {
      oprText = "*";
    }
    if (oprText == "÷") {
      oprText = "/";
    }
    if (oprText == "mod") {
      oprText = "%";
    }

    ans.innerHTML += screen_ans.innerHTML;
    const operators = ["+", "-", "*", "/", ".", "%"];
    let lastCharacter = ans.innerHTML[ans.innerHTML.length - 1];

    if (operators.includes(lastCharacter)) {
      ans.innerHTML = ans.innerHTML.slice(0, -1) + oprText;
    } else {
      ans.innerHTML += oprText;
    }

    screen_ans.innerHTML = "";
  });
}

function compute() {
  if (ans.innerHTML.includes("logxy")) {
    ans.innerHTML += screen_ans.innerHTML;
    let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf("l"));
    let num2 = ans.innerHTML.substring(
      ans.innerHTML.indexOf("y") + 1,
      ans.innerHTML.length + 1
    );
    let number = parseFloat(num1);
    let base = parseFloat(num2);
    ans.innerHTML = (Math.log10(number) / Math.log10(base)).toString();
    screen_ans.innerHTML = "";
  } else if (ans.innerHTML.includes("yroot")) {
    ans.innerHTML += screen_ans.innerHTML;
    let num1 = ans.innerHTML.substring(0, ans.innerHTML.indexOf("y"));
    let num2 = ans.innerHTML.substring(
      ans.innerHTML.indexOf("t") + 1,
      ans.innerHTML.length + 1
    );
    console.log(num1);
    console.log(num2);
    let x = parseFloat(num1);
    let y = parseFloat(num2);
    ans.innerHTML = Math.pow(x, 1 / y).toString();
    screen_ans.innerHTML = "";
  } else if (ans.innerHTML.includes("^")) {
    ans.innerHTML += screen_ans.innerHTML;
    let num1 = parseFloat(ans.innerHTML.substring(0, ans.innerHTML.indexOf("^")));
    let num2 = parseFloat(ans.innerHTML.substring(
      ans.innerHTML.indexOf("^") + 1,
      ans.innerHTML.length + 1
    ));
    ans.innerHTML = Math.pow(num1, num2).toString();
    screen_ans.innerHTML = "";
  } else {
    ans.innerHTML += screen_ans.innerHTML;
    ans.innerHTML = eval(ans.innerHTML);
    screen_ans.innerHTML = "";
  }
}

function deleteChar() {
  console.log("delete");
  screen_ans.innerHTML = screen_ans.innerHTML.toString().slice(0, -1);
}

function clearAll() {
  screen_ans.innerHTML = "";
  ans.innerHTML = "";
}

function negate() {
  screen_ans.innerHTML = (parseFloat(screen_ans.innerHTML) * -1).toString();
}

function pow() {
  ans.innerHTML += screen_ans.innerHTML + "^";
  screen_ans.innerHTML = "";
}

function sqrt() {
  screen_ans.innerHTML = Math.sqrt(parseFloat(screen_ans.innerHTML)).toString();
}

function factorial() {
  let i, num, f;
  f = 1;
  num = screen_ans.innerHTML;
  for (i = 1; i <= num; i++) {
    f *= i;
  }
  i = i - 1;
  screen_ans.innerHTML = f;
}

function tenRestToX() {
  screen_ans.innerHTML = Math.pow(10, parseFloat(screen_ans.innerHTML)).toString();
}

function log() {
  screen_ans.innerHTML = Math.log10( parseFloat(screen_ans.innerHTML)).toString();
}

function naturalLOG() {
  screen_ans.innerHTML = (Math.log10(parseFloat(screen_ans.innerHTML)) * 2.303).toString();
}

function square() {
  screen_ans.innerHTML = Math.pow(parseFloat(screen_ans.innerHTML), 2).toString();
}

function divideByOne() {
  screen_ans.innerHTML = (1 / parseFloat(screen_ans.innerHTML)).toString();
}

function absolute() {
  ans.innerHTML = (parseFloat(ans.innerHTML) < 0 ? -1 * parseFloat(ans.innerHTML)  : ans.innerHTML).toString();
}

function exponential() {
  screen_ans.innerHTML = (parseFloat(screen_ans.innerHTML) * Math.pow(10,parseFloat(screen_ans.innerHTML))).toString();
}

function pi() {
  screen_ans.innerHTML = Math.PI.toString();
}

function EulersNumber() {
  screen_ans.innerHTML = Math.exp(1).toString();
}

function cube() {
  screen_ans.innerHTML = Math.pow(parseFloat(screen_ans.innerHTML) , 3).toString();
}

function cubeRoot() {
  screen_ans.innerHTML = Math.cbrt(parseFloat(screen_ans.innerHTML)).toString();
}

function twoRx() {
  screen_ans.innerHTML = Math.pow(2, parseFloat(screen_ans.innerHTML)).toString();
}

function yTHroot() {
  ans.innerHTML += screen_ans.innerHTML + "yroot";
  screen_ans.innerHTML = "";
}

function logxy() {
  ans.innerHTML = screen_ans.innerHTML + "logxy";
  screen_ans.innerHTML = "";
}

function eRestToX() {
  screen_ans.innerHTML = Math.exp(parseFloat(screen_ans.innerHTML)).toString();
}

function sin() {
  screen_ans.innerHTML = Math.sin((parseFloat(screen_ans.innerHTML) * Math.PI) / 180).toString();
}

function cos() {
  screen_ans.innerHTML = Math.cos((parseFloat(screen_ans.innerHTML) * Math.PI) / 180).toString();
}

function tan() {
  screen_ans.innerHTML = Math.tan((parseFloat(screen_ans.innerHTML) * Math.PI) / 180).toString();
}

function sec() {
  screen_ans.innerHTML = (1 / Math.cos((parseFloat(screen_ans.innerHTML) * Math.PI) / 180)).toString();
}

function csc() {
  screen_ans.innerHTML = (1 / Math.sin((parseFloat(screen_ans.innerHTML) * Math.PI) / 180)).toString();
}

function cot() {
  screen_ans.innerHTML = (1 / Math.tan((parseFloat(screen_ans.innerHTML) * Math.PI) / 180)).toString();
}

function floor() {
  screen_ans.innerHTML = Math.floor(parseFloat(screen_ans.innerHTML)).toString();
}

function ceil() {
  screen_ans.innerHTML = Math.ceil(parseFloat(screen_ans.innerHTML)).toString();
}

function random() {
  screen_ans.innerHTML = Math.random().toString();
}

function fe() {
  let length = screen_ans.innerHTML.length;
  screen_ans.innerHTML =
    parseFloat(screen_ans.innerHTML) / Math.pow(10, length - 1) +
    ".e+" +
    `${length - 1}`;
  console.log();
}

function memoryAdd() {
  if (memory.length == 0) {
    if (screen_ans.innerHTML != "") {
      memory.push(parseFloat(screen_ans.innerHTML));
    } else if (ans.innerHTML != "") {
      memory.push(parseFloat(ans.innerHTML));
    } else memory.push(0);
  } else {
    if (screen_ans.innerHTML != "") {
      memory[memory.length - 1] =
        parseFloat(screen_ans.innerHTML) + (memory[memory.length - 1]);
    } else if (ans.innerHTML != "") {
      memory[memory.length - 1] =
        (memory[memory.length - 1]) + parseFloat(ans.innerHTML);
    } else return;
  }
  screen_ans.innerHTML = "";
  console.log(memory);
}

function memoryMinus() {
  if (memory.length == 0) {
    if (screen_ans.innerHTML != "") {
      memory.push(parseFloat(screen_ans.innerHTML) * -1);
    } else if (ans.innerHTML != "") {
      memory.push((parseFloat(ans.innerHTML) * -1));
    } else memory.push(0);
  } else {
    if (screen_ans.innerHTML != "") {
      memory[memory.length - 1] =
        (memory[memory.length - 1]) - parseFloat(screen_ans.innerHTML);
    } else if (ans.innerHTML != "") {
      memory[memory.length - 1] =
        (memory[memory.length - 1]) - parseFloat(ans.innerHTML);
    } else return;
  }
  screen_ans.innerHTML = "";
  console.log(memory);
}

function memoryStore() {
  memory.push(parseFloat(screen_ans.innerHTML));
  console.log(memory);
  screen_ans.innerHTML = "";
}

function memoryRead() {
  screen_ans.innerHTML = (memory[memory.length - 1]).toString();
}

function memoryClear() {
  memory = [];
  console.log(memory);
}

let flag = true;
function changeFunction() {
  if (flag) {
    (<HTMLElement>document.getElementById("second")).setAttribute("style","background-color:rgb(20, 176, 228);");
    (<HTMLElement>document.getElementById("square")).innerHTML = `<button id="cube" onclick="cube()">x<sup>3</sup></button>`;
    (<HTMLElement>document.getElementById("sqrt")).innerHTML = `<button  onclick="cubeRoot()"><sup>3</sup><i class='fas fa-square-root-alt'></i></button> `;
    (<HTMLElement>document.getElementById("xPowy")).innerHTML = ` 
        <button class="yThRoot" onclick="yTHroot()"><sup>y</sup><i class='fas fa-square-root-alt'
        style="font-weight: 0px;"></i></button> `;
    (<HTMLElement>document.getElementById("tenPowX")).innerHTML = `<button onclick="twoRx()">2<sup>x</sup></button>`;
    (<HTMLElement>document.getElementById("log")).innerHTML = `<button class="operator" onclick="logxy()" data-operation>log<sub>y</sub>x</button>`;
    (<HTMLElement>document.getElementById("ln")).innerHTML = `<button onclick="eRestToX()" data-operation>e<sup>x</sup></button>`;
    flag = false;
  } else {
    (<HTMLElement>document.getElementById("second")).setAttribute("style","background-color: rgb(238, 238, 238)");
    (<HTMLElement>document.getElementById("square")).innerHTML = `<button id="square" onclick="square()">x<sup>2</sup></button>`;
    (<HTMLElement>document.getElementById("sqrt")).innerHTML = `<button id="sqrt" data-operation onclick="sqrt()"><i class="fa-solid fa-square-root-variable"></i></button>`;
    (<HTMLElement>document.getElementById("xPowy")).innerHTML = `<button id="xPowy" onclick="pow()">x<sup>y</sup></button> `;
    (<HTMLElement>document.getElementById("tenPowX")).innerHTML = `<button id="tenPowX" onclick="tenRestToX()">10<sup>x</sup></button>`;
    (<HTMLElement>document.getElementById("log")).innerHTML = `<button id="log" onclick="log()">log</button>`;
    (<HTMLElement>document.getElementById("ln")).innerHTML = `<button id="ln" onclick="naturalLOG()">ln</button>`;
    flag = true;
  }
}
