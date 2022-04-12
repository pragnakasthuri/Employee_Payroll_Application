class EmployeePayrollData {
    // Property
    name;
    profile;
    gender;
    department;
    salary;
    startDate;
    notes;

    constructor(...params) {
        this.name = params[0];
        this.profile = params[1];
        this.gender = params[2];
        this.department = params[3];
        this.salary = params[4];
        this.startDate = params[5];
        this.notes = params[6];
    }

    get name() {
        return this._name;
    }

    get profile() {
        return this._profile;
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

    set name(name) {
        this._name = name;
    }

    set profile(profile) {
        this._profile = profile;
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

    toString() { 
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = this.startDate === undefined ? "undefined" :
                        new Date(this.startDate).toLocaleDateString("en-US", options);
        return " Name: " + this.name + "\n Profile_image: " + this.profile + "\n Gender: " + this.gender + "\n Department: " + this.department + "\n Salary: " + this.salary + "\n Start Date: " + empDate + "\n Notes: " + this.notes;
    }
}

//salary range
const salary = document.querySelector('#salary');
const salaryOutput = document.querySelector('.salary-output');
salaryOutput.textContent = salary.value;
salary.oninput = function() {
    salaryOutput.textContent = salary.value;
};

//validation for name
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

/**
 * Function to save the employee details
 */
function save() {
    try {
        let name = document.querySelector('#name').value;
        let namefinal='';
        if(name.charAt(0)===name.charAt(0).toLowerCase()){
         namefinal="incorrect";
        }else{
            namefinal = name;
        }

        let profile = document.querySelector('.profile').src;

        let gender = document.querySelector('input[name=gender]:checked').value;
        let deptList = new Array();
        let departments = document.querySelectorAll('input[name=department]');
        for (let i = 0; i < departments.length; i++) {
            if (departments[i].checked) {
                deptList.push(departments[i].value);
            }
        }
        const salary = document.querySelector('#salary');
        const output = document.querySelector('.salary-output');
        output.textContent = salary.value;
        salary.addEventListener('input', function () {
            output.textContent = salary.value;
        });

        let startDate = document.querySelector('#day').value +'-'+document.querySelector('#month').value + '-'+document.querySelector('#year').value;;
        console.log("startdate",startDate);
       
                   
        let notes = document.querySelector('#notes').value;
        let newEmployee = new EmployeePayrollData(namefinal, profile, gender, deptList, salary.value, startDate, notes);
        alert(newEmployee);
    } catch (error) {
        alert(error);
    }
}