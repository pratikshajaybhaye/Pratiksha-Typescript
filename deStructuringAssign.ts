
console.log(`----------------Step 1-----------------`);

var employee ={
    ID: 254866 ,
    fullName: 'Pratiksha Jaybhaye',
    role: "Technical Support Engineer",
    companyName: "Relliance"
}

var {ID,fullName,role,companyName} = employee

for (const key in employee) {
    if (employee.hasOwnProperty.call(employee, key)) {
        const element = employee[key];
        console.log(`Key => ${key}, Value =>${element}`);  
    
    }
}

console.log(`----------------Step 2-----------------`);

var vaccination = ["J&J", "Pfizer", "Sputnik"]
console.log(`Original Array : ${vaccination}`);

vaccination.push("Covaxin")
console.log(`New Array : ${vaccination}`);

console.log(` `);

console.log("Destructuring Array:");

for (const element of vaccination) {
    console.log(element);
    
}


