// Write your solution in this file!
var customerName = 'bob';
const leastFavoriteCustomer = 'brett';

function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
};
var bestCustomer;
function setBestCustomer(){
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = leastFavoriteCustomer.toLowerCase();
    return leastFavoriteCustomer;
}