const buttons = document.getElementsByClassName("button");
const screen1 = document.getElementById("screen-1");
const screen2 = document.getElementById("screen-2");

let final = "";
let operator = "";
let primary = "";
let secondary = "";

const updateDocument = () => {
  let s = "";

  if (primary) {
    s += `${primary} `;
  }

  switch (operator) {
    case "%":
      s += `%`;
      break;
    case "/":
      s += `÷`;
      break;
    case "*":
      s += `x`;
      break;
    case "-":
      s += `–`;
      break;
    case "+":
      s += `+`;
      break;
    default:
      break;
  }

  if (s && secondary) {
    s += ` ${secondary}`;
  } else {
    s += `${secondary}`;
  }

  if (final) {
    screen1.innerText = s;
    screen2.innerText = `${final.toString()}`;
  } else {
    screen1.innerText = "";
    screen2.innerText = s;
  }
};

for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];

  button.addEventListener("click", () => {
    const id = button.getAttribute("id");

    onClick(id);
  });
}

const ac = () => {
  final = "";
  operator = "";
  primary = "";
  secondary = "";
};

const ifFinal = () => {
  if (final) {
    ac();
  }
};

const back = () => {
  if (final) {
    final = "";
  }

  if (secondary) {
    secondary = secondary.slice(0, -1);
  } else if (operator) {
    operator = "";
  } else if (primary) {
    primary = primary.slice(0, -1);
  }

  updateDocument();
};

const onClick = (id) => {
  switch (id) {
    case "zero":
      ifFinal();
      if (secondary && secondary == "0") {
      } else {
        secondary += "0";
      }
      break;
    case "one":
      ifFinal();
      secondary += "1";
      break;
    case "two":
      ifFinal();
      secondary += "2";
      break;
    case "three":
      ifFinal();
      secondary += "3";
      break;
    case "four":
      ifFinal();
      secondary += "4";
      break;
    case "five":
      ifFinal();
      secondary += "5";
      break;
    case "six":
      ifFinal();
      secondary += "6";
      break;
    case "seven":
      ifFinal();
      secondary += "7";
      break;
    case "eight":
      ifFinal();
      secondary += "8";
      break;
    case "nine":
      ifFinal();
      secondary += "9";
      break;
    case "dot":
      ifFinal();
      if (!secondary) {
      } else if (!secondary.endsWith(".")) {
        secondary += ".";
      }
      break;
    case "ac":
      ac();
      break;
    case "mod":
      calculate(true);
      operator = "%";
      break;
    case "divide":
      calculate(true);
      operator = "/";
      break;
    case "multiply":
      calculate(true);
      operator = "*";
      break;
    case "minus":
      calculate(true);
      operator = "-";
      break;
    case "plus":
      calculate(true);
      operator = "+";
      break;
    case "equal":
      calculate();
      return;
    case "back":
      back();
      break;
    default:
      break;
  }

  if (operator) {
    if (!secondary && !primary) {
      operator = "";
    } else if (!primary) {
      primary = secondary;
      secondary = "";
    }
  }

  updateDocument();
};

const calculate = (op) => {
  if (!primary || !operator || !secondary) {
    return;
  }

  switch (operator) {
    case "%":
      final = Number(primary) % Number(secondary);
      break;
    case "/":
      final = Number(primary) / Number(secondary);
      break;
    case "*":
      final = Number(primary) * Number(secondary);
      break;
    case "-":
      final = Number(primary) - Number(secondary);
      break;
    case "+":
      final = Number(primary) + Number(secondary);
      break;
    default:
      break;
  }

  if (op) {
    primary = final;
    final = "";
    secondary = "";
    return;
  }

  updateDocument();
};
