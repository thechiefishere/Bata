export const getItemIndex = (item, cartItems) => {
  let itemIndex = -1;
  cartItems.forEach((stuff, index) => {
    if (stuff.product === item.product && item.size === stuff.size)
      itemIndex = index;
  });
  return itemIndex;
};
