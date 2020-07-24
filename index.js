var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var itemObj = {itemName: `${item}`, itemPrice: Math.floor(Math.random()*100)}
  cart.push(itemObj);
  return itemObj.itemName + " has been added to your cart."
}

function viewCart() {
  var cartEverything = 'In your cart, you have';
  var cartItems = [];
  var cartPrices = [];
  if (cart.length === 0) {
    console.log( 'Your shopping cart is empty.');
  } else {
    let i = 0;
    while (cart.length > i) {
      cartItems.push(Object.keys(cart[i]));
      cartPrices.push(' at $' + cart[i][Object.keys(cart[i])]);
      cartEverything += ( ' ' + cartItems[i] + cartPrices[i] );

      if ((2 < cart.length) && ((i) != (cart.length - 1))) {
        cartEverything += ',';

        if ((1 < cart.length) && ((i + 1) === (cart.length - 1))) {
        cartEverything += (' and');
        }

      } else if ((1 < cart.length) && ((i + 1) === (cart.length - 1))) {
        cartEverything += (' and');

      }
    console.log(i++);
    }
  }
  console.log( cartEverything + '.');
}

function total() {
  total = 0;
  for(var i = 0; i < cart.length; i++) {
    total += cart[i].itemPrice;
  }
  return total;
}

function removeFromCart(item) {
  for (var i = 0; i < cart.length; i++){
    if (item === cart[i].itemName) {
      cart.splice(i, 1); //removes 1 item at index i
      return cart;
    }
  }

  if (item != cart[item]) {
    return "That item is not in your cart."
  }
}

function placeOrder(cardNumber) {
  if (typeof(cardNumber) === "undefined"){
    return "Sorry, we don't have a credit card on file for you."
  } else {
    cart = [];
    return `Your total cost is $${total}, which will be charged to the card ${cardNumber}.`
  }
}
