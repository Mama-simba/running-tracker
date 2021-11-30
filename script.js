

// 1) Adding entries

let entries = [];
const entriesWrapper = document.querySelector("#entries"); //selects the ul

const goal = 40;
document.querySelector("#target").innerText = goal;

function addNewEntry(newEntry){
    const listItem = document.createElement("li"); //creates a <li></li>
    const listValue = document.createTextNode(newEntry.toFixed(1)); //creates a value
    listItem.appendChild(listValue); //adds the value in the list. Example: <li> 10 </li>

    entriesWrapper.appendChild(listItem) //adds a new list element with value at the end of the ul

    entriesWrapper.removeChild(entriesWrapper.firstElementChild); //removes the first li element so that we only get 7 <li>
}



function handleSubmit(event){
    event.preventDefault();
    const entry = Number(document.querySelector("#entry").value);
    
    if (!entry) return;  //avoids adding a value when clicking on enter accidentally
    document.querySelector("form").reset(); // clears the form
    entries.push(entry) //adds values to the empty array
    addNewEntry(entry)
    calcTotal()
    calcAverage()
    weeklyHigh()
    calcGoal()
}

const form = document.querySelector("form").addEventListener("submit", handleSubmit);



// 2) Calculate total & Averade distance

function reducer(total, currentValue) {  //sum the array´s values
  return total + currentValue
}

function calcTotal() {   // calculates the total and updates the DOM results (Total)
  const totalValue = entries.reduce(reducer).toFixed(1);
  document.getElementById('total').innerText = totalValue
  document.getElementById('progressTotal').innerText = totalValue
}

function calcAverage(){ 
    const average = (entries.reduce(reducer) / entries.length).toFixed(1);
    document.getElementById('average'). innerText = average;
}


// 3) Highest weekly value

function weeklyHigh(){
    const high = Math.max(...entries)  // "..." concatenate the array´s values & gets the highest value
    document.getElementById('high').innerText = high;
}



// 4) Calculate goal (progress Circle)

function calcGoal() {
  const totalValue = entries.reduce(reducer).toFixed(1) // access totalValue from above
  const completedPercent = totalValue / (goal/100)
  const progressCircle = document.querySelector('#progressCircle')
  if (completedPercent > 100) completedPercent === 100
  progressCircle.style.background = `conic-gradient(
    #34BE82 ${completedPercent}%, #383737 ${completedPercent}% 100%`
}
