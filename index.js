// // Write your solution in this file!

// declare customerName to be bob in global scope
customerName = 'bob';

function upperCaseCustomerName() {
  // modifies the customerName variable
  customerName = customerName.toUpperCase();
}

function setBestCustomer() {
  // setBestCustomer
  bestCustomer = 'not bob';
}

function overwriteBestCustomer(newBestCustomer) {
  // overwrites the best customer
  bestCustomer = newBestCustomer;
}

const leastFavoriteCustomer = 'some initial value';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'new value';
}


