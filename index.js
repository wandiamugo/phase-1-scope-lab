// Write your solution in this file!
var customerName = "bob";
  console.log(customerName);

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
}

function setBestCustomer(){
    bestCustomer= "not bob";
}

function overwriteBestCustomer(){
    bestCustomer= "maybe bob";
}

const leastFavoriteCustomer= "Assignment to constant variable.";
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer= "ann";
    return leastFavoriteCustomer;
}