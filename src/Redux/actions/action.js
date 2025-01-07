import {
  IS_LOGGED_IN,
  SET_CATEGORIES,
  ADD_TO_CART,
  SET_TOP_DEALS,
  SET_TOP_SELLERS,
  SET_BANNERS,
  REMOVE_FROM_CART,
  CART_RENDER_KEY,
  INCREASE_QUANTITY,
  DECREARSE_QUANTITY,
  EMPTY_THE_CART,
  SET_HEADER,
} from '../constants';

export function toggleLogin(item) {
  return {
    type: IS_LOGGED_IN,
    data: item,
  };
}

export function setCategories(item) {
  return {
    type: SET_CATEGORIES,
    data: item,
  };
}

export function setTopDeals(item) {
  return {
    type: SET_TOP_DEALS,
    data: item,
  };
}

export function setTopSellers(item) {
  return {
    type: SET_TOP_SELLERS,
    data: item,
  };
}

export function setBanners(item) {
  return {
    type: SET_BANNERS,
    data: item,
  };
}

export function addToCart(item) {
  return {
    type: ADD_TO_CART,
    data: item,
  };
}

export function removeFromCart(item) {
  return {
    type: REMOVE_FROM_CART,
    data: item,
  };
}

export function increaseQuantity(item) {
  return {
    type: INCREASE_QUANTITY,
    data: item,
  };
}

export function emptyTheCart(item) {
  return {
    type: EMPTY_THE_CART,
    data: item,
  };
}

export function decreaseQuantity(item) {
  return {
    type: DECREARSE_QUANTITY,
    data: item,
  };
}

export function updateCartRenderKey(item) {
  return {
    type: CART_RENDER_KEY,
    data: item,
  };
}

export function setHeader(item) {
  return {
    type: SET_HEADER,
    data: item,
  };
}
