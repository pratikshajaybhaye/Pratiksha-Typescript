console.log("----------------Step 1-----------------");
var employee = {
    ID: 254866,
    fullName: 'Pratiksha Jaybhaye',
    role: "Technical Support Engineer",
    companyName: "Relliance"
};
var ID = employee.ID, fullName = employee.fullName, role = employee.role, companyName = employee.companyName;
for (var key in employee) {
    if (employee.hasOwnProperty.call(employee, key)) {
        var element = employee[key];
        console.log("Key => ".concat(key, ", Value =>").concat(element));
    }
}
console.log("----------------Step 2-----------------");
var vaccination = ["J&J", "Pfizer", "Sputnik"];
console.log("Original Array : ".concat(vaccination));
vaccination.push("Covaxin");
console.log("New Array : ".concat(vaccination));
console.log(" ");
console.log("Destructuring Array:");
for (var _i = 0, vaccination_1 = vaccination; _i < vaccination_1.length; _i++) {
    var element = vaccination_1[_i];
    console.log(element);
}
