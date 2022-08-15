const Error = () => {
  alert("error");
};

let isLastValueIsNotDigit = false;

const appendToResultLine = tag => {
  const resultLine = document.getElementById("answer");
  resultLine.textContent += tag;
};

const appendOperator = (event) => {
  isLastValueIsNotDigit === true;

  const id = event.target.id
  let operatorTag;

  switch(id){
    case 'plus':
      operatorTag = '+'
      break

    case 'subtract':
      operatorTag = '-'
      break

    case "multiplication":
      operatorTag = '*'
      break
    
    case "divide":
      operatorTag = '/'
      break
  }

  appendToResultLine(operatorTag);
};

const appendDigit = (event) => {
  isLastValueIsNotDigit === false;
  

  appendToResultLine(event.target.id);
};

window.onload = function() {
  const digits = document.getElementsByClassName("digit");
  [...digits].forEach(digit =>
    digit.addEventListener("click", event => appendDigit(event)
    )
  );

  const operators = document.getElementsByClassName("operator");
  [...operators].forEach(operator =>
    operator.addEventListener("click", event => {
      isLastValueIsNotDigit ? Error() : appendOperator(event);
    })
  );

  document.getElementById("clear").addEventListener("click",() => (document.getElementById("answer").textContent = ""));

  const equalsOperator = document.getElementById("equals")
  equalsOperator.addEventListener("click", () => {
    if (!isLastValueIsNotDigit) {
      
      calcuate = document.getElementById("answer").textContent

      calcuate.forEach()
    }
    }
  );
};
