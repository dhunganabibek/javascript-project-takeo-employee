//object to keep track of all the employee information
let allEmployeeDetails = [];

//variable to track the number of rows
let numberOfRow = 1;

//remove Employee Button
const removeEmployeeButton = document.getElementById("removeEmployeeButton");
removeEmployeeButton.addEventListener("click",removeLastRow);
removeEmployeeButton.style.visibility = "hidden";

//entire form of the Employee
const entireInputForm = document.getElementById("entireInputForm");

//function to add Row of the Employee
function addRow() {
   numberOfRow = numberOfRow + 1;

  //hiding the remove button if number of row is 1.
  if (numberOfRow <= 1) {
    removeEmployeeButton.style.visibility = "hidden";
  } else {
    removeEmployeeButton.style.visibility = "visible";
  }

  //appending the new row of the Employee
  entireInputForm.insertAdjacentHTML(
    "beforeend",
    `<div class="row ">
    <div class="col ">
        <div class="input-group mb-3 ">
            <input type="text" class="form-control" placeholder="Designation" id="designation">
        </div>
    </div>
    <div class="col ">
        <div class="input-group mb-3 ">
            <input type="text" class="form-control" placeholder="Employee Name" id="employeeName">
        </div>
    </div>
    <div class="col ">
        <div class="input-group mb-3 ">
            <input type="text" class="form-control" placeholder="Employee ID" id="employeeId">
        </div>
    </div>
    <div class="col ">
        <div class="input-group mb-3 ">
            <input type="text" class="form-control" placeholder="Previous Company" id="previousCompany">
        </div>
    </div>
</div>
</div>`
  );
}

//function to remove last employee row.
function removeLastRow() {
    numberOfRow = numberOfRow - 1;
    //hiding the remove button if number of row is 1.
    if (numberOfRow <= 1) {
        removeEmployeeButton.style.visibility = "hidden";
    } else {
        removeEmployeeButton.style.visibility = "visible";
    }
    let allRows = document.querySelectorAll('.row');
    let length = allRows.length;
    allRows[length - 1].remove()
  
  }

//selecting the add Employee Row
const addEmployeeButton = document.getElementById("addEmployeeButton");
addEmployeeButton.addEventListener("click", addRow);

//function to be executed when submit button is clicked
function submitButtonClick(){
    
    
        

    //finding length of number of row present in the
    let length = document.querySelectorAll('#designation').length
    console.log(length);
    
    //looping over all the elements in the Array
    for(let i = 0; i < length; i++){
        //getting value of all required field  int the variable 
        let designation = document.querySelectorAll('#designation')[i].value;
        let employeeName = document.querySelectorAll('#employeeName')[i].value;
        let employeeId = document.querySelectorAll('#employeeId')[i].value;
        let previousCompany = document.querySelectorAll('#previousCompany')[i].value;

        //creating the object
        let employeeObject = {
            designation,
            employeeName,
            employeeId,
            previousCompany
        }

        // adding the object to the array
        allEmployeeDetails.unshift(employeeObject); 

        //hiding the entire homepage
        document.getElementById('homepage').style.display = 'none';

        //showing the table now.
        const tableContent = `<table class="table table-bordered table-primary">
        <thead class="table-dark">
          <tr>
            <th scope="col">Designation</th>
            <th scope="col">Employee Name</th>
            <th scope="col">Employee ID</th>
            <th scope="col">Previous Company</th>
          </tr>
        </thead>
        <tbody>
          <tr id="tableRow">    
          </tr>
        </tbody>
      </table>`;
        document.getElementById('table').innerHTML = tableContent;
    }

    

    //printing the result
    for(const element of allEmployeeDetails){
        document.getElementById('tableRow').insertAdjacentHTML("afterend", `<tr>
        <th scope="row">${element.designation}</th>
        <td>${element.employeeName}</td>
        <td>${element.employeeId}</td>
        <td>${element.previousCompany}</td>
      </tr>`)
    }
    //getting all the input from the form
    
}


//selecting Submit Button and adding the event listener
const submitButton = document.getElementById("submitButton");
submitButton.addEventListener("click",submitButtonClick);