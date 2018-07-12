const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const abcde = ["A", "B", "C", "D", "E"];
const fghij = ["F", "G", "H", "I", "J"];
const klmno = ["K", "L", "M", "N", "O"];
const pqrst = ["P", "Q", "R", "S", "T"];
const uvwxyz = ["U", "V", "W", "X", "Y", "Z"];
const standardArr = [
  ...numbers,
  ...abcde,
  ...numbers,
  ...fghij,
  ...numbers,
  ...klmno,
  ...numbers,
  ...pqrst,
  ...numbers,
  ...uvwxyz,
  ...numbers
];

const button = document.getElementById("app--generate-key");
const inputs = document.getElementsByTagName("input");
const generatedKey = document.getElementById("keyslot");

const generateStandardKey = () => {
  // standard key: AAAAA-BBBBB-CCCCC (17 characters)

  let key = [];

  for (let i = 0; i < 17; i++) {
    if (i === 5 || i === 11) {
      key = [...key, "-"];
    } else {
      let rndNum = Math.floor(Math.random() * standardArr.length);
      let char = standardArr[rndNum];
      key = [...key, char];
      key = key.join("");
    }
  }
  generatedKey.innerHTML = key;
  generatedKey.style.color = "black";
};

const generate4Key = () => {
  // 4 key: AAAAA-BBBBB-CCCCC-DDDDD (23 characters)

  let key = [];

  for (let i = 0; i < 23; i++) {
    if (i === 5 || i === 11 || i === 17) {
      key = [...key, "-"];
    } else {
      let rndNum = Math.floor(Math.random() * standardArr.length);
      let char = standardArr[rndNum];
      key = [...key, char];
      key = key.join("");
    }
  }
  generatedKey.innerHTML = key;
  generatedKey.style.color = "black";
};

const generate5Key = () => {
  // 5 key: AAAAA-BBBBB-CCCCC-DDDDD-EEEEE (29 characters)

  let key = [];

  for (let i = 0; i < 29; i++) {
    if (i === 5 || i === 11 || i === 17 || i === 23) {
      key = [...key, "-"];
    } else {
      let rndNum = Math.floor(Math.random() * standardArr.length);
      let char = standardArr[rndNum];
      key = [...key, char];
      key = key.join("");
    }
  }
  generatedKey.innerHTML = key;
  generatedKey.style.color = "black";
};

const controller = () => {
  if (inputs[0].checked === true) {
    generateStandardKey();
  } else if (inputs[1].checked === true) {
    generate4Key();
  } else if (inputs[2].checked === true) {
    generate5Key();
  }
};

button.addEventListener("click", controller);
