

// 1) Adding entries

let entries = [];
const entriesWrapper = document.querySelector("#entries"); //selects the ul

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


// 3) Weekly high
