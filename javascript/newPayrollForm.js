class EmployeePayrollData {

    // getters method
    get id() {
        return this._id;
    }

    get name() {
        return this._name;
    }

    get profilePic() {
        return this._profilePic;;
    }


    get gender() {
        return this._gender;
    }

    get department() {
        return this._department;
    }
    
    get salary() {
        return this._salary;
    }
    
    get startDate() {
        return this._startDate;
    }
    
    get notes() {
        return this._notes;
    }

    // setters method
    set id(id) {
        this._id = id;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z][a-z A-Z]{2,}$');
        if(name.match(nameRegex))
            this._name = name;
        else 
            throw "Name is incorrect";
    }

    set department(department) {
        this._department = department;
    }

    set salary(salary) {
        this._salary = salary;
    }

    set gender(gender) {
        this._gender = gender;
    }

    set startDate(startDate) {
            this._startDate = startDate;
    }

    set notes(notes) {
          this._notes = notes;
    }

    // method
    toString() { 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this._startDate ? "undefined" : new Date(this.startDate).toLocaleDateString("en-US", options);
        return "Name: " + this._name + "\n Profile Pic: " + this._profilePic  + "\n Gender: " + this._gender 
                + "\n Department: " + this._department + "\n Salary: " + this._salary + "\n Start Date: " 
                + empDate + "\n Notes: " + this._notes;
    }
}
//adding eventlistener to name
window.addEventListener('DOMContentLoaded', (event) => {
    const nameField = document.querySelector('#name');
    const nameError = document.querySelector('.text-error');
    nameField.addEventListener('input', function () {
        if (nameField.value.length === 0) {
            nameError.textContent = "";
        } else {
            let nameRegex = RegExp('[A-Z]{1}[a-z]{2,}');
            if (nameRegex.test(nameField.value)) {
                nameError.textContent = "";
            } else {
                nameError.textContent = "Name is incorrect";
            }
        }
    });

    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    });
}); 

/**
 * Function to save the employee details
 */ 
 const save = () => {
    try {
        let empPayrollData = createEmployeePayroll();
        console.log(empPayrollData);
    } catch (e) {
        return;
    }
}

function createAndUpdateStorage(employeePayrollData) {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
    if (employeePayrollList != undefined) {
        employeePayrollList.push(employeePayrollData);
    } else {
        employeePayrollList = [employeePayrollData];
    }
    alert(employeePayrollList.toString());
    localStorage.setItem("EmployeePayrollList", JSON.stringify(employeePayrollList));
}

//creating employee payroll object on save
const createEmployeePayroll = () => {
    let employeePayrollData = new EmployeePayrollData();
    try {
        employeePayrollData.name = getInputValueById('#name');
    } catch (e) {
        throw e;
    }
    employeePayrollData.profilePic = getSelectedValues('.profile').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop();
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.notes = getInputValueById('#notes');

    let date =  getInputValueById('#month') + " " + getInputValueById('#day') + " " + getInputValueById('#year');
    employeePayrollData.startDate = new Date(Date.parse(date));
    alert(employeePayrollData.toString());
    return employeePayrollData;
}

const getSelectedValues = (propertyValue) => {
    let allItems = document.querySelectorAll(propertyValue);
    let setItems = [];
    allItems.forEach(item => {
        if (item.checked) setItems.push(item.value);
    });
    return setItems;
}

const getInputValueById = (id) => {
    let output = document.querySelector(id).value;
    return output;
}

const getInputElementValue = (id) => {
    let output = document.getElementById(id).value;
    return output;
}

    const salary = document.querySelector('#salary');
    const salaryOutput = document.querySelector('.salary-output');
    salaryOutput.textContent = salary.value;
    salary.addEventListener('input', function () {
        salaryOutput.textContent = salary.value;
    });
