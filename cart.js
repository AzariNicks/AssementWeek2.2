///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/
const cl = any => console.log(any)


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]


//CODE HERE
const summedPrice = cart.reduce((acc, ord) => {
    return acc + ord.price
}, 0) 
cl(summedPrice)
//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
 const calcFinalPrice = (cartTotal, couponValue, tax) => {
        let FinalPrice = cartTotal * (tax + 1) - couponValue 
  return FinalPrice 

 }
cl(calcFinalPrice(50, 10, .01))
//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
    Becuz its on a website, there gonna need an email and a username at the very least then maybe a credit card and since we need its 
    delervery a dress would be nice maybe a nearest shop as well 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE
const CartForRestarant = [
    {
        username: 'JustinEatsEggs', /* Need a user to sign in*/
        email: 'justinhateseggs@gmail.com', /* something to send in with confrimation*/ 
        HasCredit: true, /* need a credit card to figure out where its gonna come from*/
        HasDebit: false, /* if you have a debit card we will use the transaction differently*/
        HomeAddress: '190 hybro lane' /*So we can delvery stuff to him*/
    }, 
    {
        username: 'DAvid', 
        email: 'CrazyDavid@gmail.com',
        HasCredit: false,
        HasDebit: false,
        HomeAddress: ''  /* hes homeless but that doesnt mean we cant delever*/
    }, 
    {
        username: 'MotherInc', 
        email: 'YourMom@gmail.com',
        HasCredit: false,
        HasDebit: true,
        HomeAddress: '200 love Ave'
    }, 
]

// finished 