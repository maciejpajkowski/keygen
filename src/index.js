const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const abcde = ["A", "B", "C", "D", "E"];
const fghij = ["F", "G", "H", "I", "J"];
const klmno = ["K", "L", "M", "N", "O"];
const pqrst = ["P", "Q", "R", "S", "T"];
const uvwxyz = ["U", "V", "W", "X", "Y", "Z"];

const generateStandardKey = () => {
  // standard key looks like this: AAAAA-BBBBB-CCCCC (17 characters)
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

  document.getElementById("keyslot").innerHTML = key;
};

const button = document.getElementById("app--generate-key");
button.addEventListener("click", generateStandardKey);
