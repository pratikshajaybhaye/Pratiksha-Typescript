// optional parameters
function AddNum(num1, num2) {
    if (typeof num2 !== 'undefined') {
        return num1 + num2;
    }
}
AddNum(1);
//Default Parameter
function display(id, name, role) {
    if (role === void 0) { role = "Guest user"; }
    console.log("ID", id);
    console.log("Name", name);
    console.log("Role", role);
}
display(1, "Codemind", "IT Dept");
function addnum(a, b) {
    if (typeof b !== 'undefined') {
        return a + b;
    }
}
console.log(addnum(5));
