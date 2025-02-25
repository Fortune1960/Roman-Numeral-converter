function numberToRoman(num) {
    const romanNumerals = [
      { value: 1000, numeral: "M" },
      { value: 900, numeral: "CM" },
      { value: 500, numeral: "D" },
      { value: 400, numeral: "CD" },
      { value: 100, numeral: "C" },
      { value: 90, numeral: "XC" },
      { value: 50, numeral: "L" },
      { value: 40, numeral: "XL" },
      { value: 10, numeral: "X" },
      { value: 9, numeral: "IX" },
      { value: 5, numeral: "V" },
      { value: 4, numeral: "IV" },
      { value: 1, numeral: "I" },
    ];
    let result = "";
    for (const { value, numeral } of romanNumerals) {
      while (num >= value) {
        result += numeral;
        num -= value;
      }
    }
    return result;
  }
  function romanToNumber(roman) {
    const romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    };
    let i = 0;
    let num = 0;
    while (i < roman.length) {
      const twoChar = roman[i] + (roman[i + 1] || "");
      if (romanToNum[twoChar]) {
        num += romanToNum[twoChar];
        i += 2;
      } else {
        num += romanToNum[roman[i]];
        i++;
      }
    }
    return num;
  }
  function convertInput() {
    const input = document.getElementById("input").value.trim().toUpperCase();
    const validRoman = /^[MDCLXVI]+$/; 
    const resultDiv = document.getElementById("result");
  
    if (!input) {
      resultDiv.textContent = "Please enter a value.";
      return;
    }
  
    if (!isNaN(input)) {
      const num = parseInt(input, 10);
      if (num < 1 || num > 3999) {
        resultDiv.textContent = "Please enter a number between 1 and 3999.";
      } else {
        const roman = numberToRoman(num);
        resultDiv.textContent = `Number ${num} in Roman numerals is: ${roman}`;
      }
    } else if (validRoman.test(input)) {
      try {
        const number = romanToNumber(input);
        resultDiv.textContent = `Roman numeral ${input} equals: ${number}`;
      } catch {
        resultDiv.textContent = "Invalid Roman numeral.";
      }
    } else {
      resultDiv.textContent = "Please enter a valid number or Roman numeral.";
    }
  }