const closeBtn = document.querySelector(".privacy-close");
const privacyNote = document.querySelector(".privacy-note");
const dob = document.querySelector("#date-of-birth");
const luckyNo = document.querySelector("#lucky-number");
const checkBtn = document.querySelector("#check-btn");
const errorMsg = document.querySelector("#error-message");
const outputDiv = document.querySelector(".output");

closeBtn.addEventListener("click", () => {
  privacyNote.style.display = "none";
});


const setErrorMsg = (msg)=>{
    errorMsg.innerText = msg;
}

const resetErrorMsg = ()=>{
    errorMsg.innerText = "";
}

const checkValidInput = (date,number)=>{
    if(date && number){

        if(number > 0){
            return true;
        }
        else {
            setErrorMsg("lucky number is not valid");
        }
    }
    else {
        setErrorMsg("Please enter date and lucky number");
    }
}
const getSum = (dateStr)=>{
    let sum = 0;
    for (let i = 0; i < dateStr.length; i++) {
        sum += Number(dateStr[i]);
      }
      console.log(sum);
      return sum
      
}
const checkLucky = (sum,number) =>{
    return sum % number === 0;
}

const setOutput = (isLucky)=>{
    if(isLucky){
        outputDiv.innerHTML = " <img src='images/lucky.svg'/><p>Your Birthday is Lucky !!! </p>";
    }
    else{
        outputDiv.innerHTML = " <img src='images/unlucky.svg'/><p>Your Birthday is Unlucky !!! </p>";
    }
}

checkBtn.addEventListener("click", () => {
  const date = dob.value;
  const number = Number(luckyNo.value);
  if(checkValidInput(date,number))
   {
    resetErrorMsg();
    console.log(date);
    const combinedDateString = date.replaceAll("-", "");
    let sum = getSum(combinedDateString);
    let isLucky = checkLucky(sum, number);
    setOutput(isLucky);
  }
});
