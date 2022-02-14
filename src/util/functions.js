export const getItemIndex = (item, cartItems) => {
  let itemIndex = -1;
  cartItems.forEach((stuff, index) => {
    if (stuff.product === item.product && item.size === stuff.size)
      itemIndex = index;
  });
  return itemIndex;
};

export const getNumberOfItemsInCart = (cartItems) => {
  const numOfItems = cartItems.reduce((currTotal, item) => {
    return (currTotal += item.quantity);
  }, 0);
  return numOfItems;
};

export const getSubTotal = (cartItems) => {
  const subTotal = cartItems.reduce((currTotal, item) => {
    const itemPrice = parseInt(item.product.price.replace(",", ""));
    return (currTotal += itemPrice * item.quantity);
  }, 0);
  return subTotal;
};

export const getTotalTax = (cartItems) => {
  const totalVAT = cartItems.reduce((currTotal, item) => {
    const taxedPrice = parseInt(item.product.price.replace(",", "")) * 0.075;
    return (currTotal += taxedPrice * item.quantity);
  }, 0);
  return totalVAT;
};

export const getSumTotal = (cartItems) => {
  const sum = getSubTotal(cartItems) + getTotalTax(cartItems);
  return sum;
};

export const isItemInCart = (item, cartItems) => {
  const isPresent = cartItems.some((val) => val.id === item.id);
  if (isPresent) return true;
  return false;
};
