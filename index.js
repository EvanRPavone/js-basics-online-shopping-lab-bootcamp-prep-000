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
  if (cart.length === 0) {
    console.log("Your shopping cart is empty.")
  }
  var newarray = [];
    for (var i = 0; i < cart.length; i++) {
      var keys = Object.keys(cart[i])[0]
      newarray.push(keys + " at $" + cart[i][keys])

    }
    var mystring = "In your cart, you have "
    if (newarray.length === 1) {
      mystring +=newarray + "."
    } else if (newarray.length === 2) {
      mystring += (newarray[0] + " and " + newarray[1] + ".")
    } else if (newarray.length > 2) {
      var lastelement = newarray.pop()
      var other_item = newarray.join(", ")
      mystring += (other_item + ", and " + lastelement + ".")
    }
    console.log(mystring)
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
