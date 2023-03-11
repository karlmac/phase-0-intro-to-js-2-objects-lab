// Write your solution in this file!

const employee = {
    name: "Mark K",
    streetAddress: "123 E Venier Blvd, Low Rapids, PK, 47015"
}


function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newEmp = {...obj
        , [key]: value
    }
    //newEmp[key].value = value;

    return newEmp;
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}

function deleteFromEmployeeByKey(obj, key) {
    const newEmp = {...obj}
    delete newEmp[key];
    
    return newEmp;
}

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    
    return obj;
}