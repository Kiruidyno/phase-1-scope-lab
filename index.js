// Write your solution in this file!

var customerName='bob';

function upperCaseCustomerName (){
    var upperCaseCustomerName=customerName.toUpperCase();
    customerName=upperCaseCustomerName;
} 
    

function setBestCustomer(){
    window.bestCustomer='not bob';
}
bestCustomer();




function overwriteBestCustomer(newCustomer){
    window.bestCustomer='maybe bob';
}
overwriteBestCustomer();

const leastFavoriteCustomer= 'Manu';
    function changeLeastFavoriteCustomer(){
        leastFavoriteCustomer='Kyalo'

    }
