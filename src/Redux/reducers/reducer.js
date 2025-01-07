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

const initialLoginState = false;
const initialCategoryState = [];
const initialCart = [];
const initlaTopDeals = [];
const initialTopSellers = [];
const initialBanners = [];
const initialCartRenderKey = 0;
const intialHeader = 'Home';

export const headerReducer = (state = intialHeader, action) => {
  switch (action.type) {
    case SET_HEADER:
      return action.data;
    default:
      return state;
  }
};

export const reducer = (state = initialLoginState, action) => {
  switch (action.type) {
    case IS_LOGGED_IN:
      return action.data;
    default:
      return state;
  }
};

export const categoryReducer = (state = initialCategoryState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return action.data;
    default:
      return state;
  }
};

export const topDealsReducer = (state = initlaTopDeals, action) => {
  switch (action.type) {
    case SET_TOP_DEALS:
      return action.data;
    default:
      return state;
  }
};

export const topSellerReducer = (state = initialTopSellers, action) => {
  switch (action.type) {
    case SET_TOP_SELLERS:
      return action.data;
    default:
      return state;
  }
};

export const bannerReducer = (state = initialBanners, action) => {
  switch (action.type) {
    case SET_BANNERS:
      return action.data;
    default:
      return state;
  }
};

export const cartReducer = (state = initialCart, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const existingItemIndex = state.findIndex(
        item => item._id === action.data._id,
      );
      if (existingItemIndex !== -1) {
        return state.map((item, index) =>
          index === existingItemIndex
            ? {
                ...item,
                quantity: item.quantity + 1,
                totalOfferPrice:
                  item.totalOfferPrice + action.data.pricing.offerPrice,
                totalPrice: item.totalPrice + action.data.pricing.price,
              }
            : item,
        );
      }
      return [
        ...state,
        {
          ...action.data,
          quantity: 1,
          totalOfferPrice: action.data.pricing.offerPrice,
          totalPrice: action.data.pricing.price,
        },
      ];
    }
    case REMOVE_FROM_CART: {
      return state.filter(item => item._id !== action.data._id);
    }
    case INCREASE_QUANTITY: {
      return state.map(item =>
        item._id === action.data._id
          ? {
              ...item,
              quantity: item.quantity + 1,
              totalOfferPrice:
                item.totalOfferPrice + action.data.pricing.offerPrice,
              totalPrice: item.totalPrice + action.data.pricing.price,
            }
          : item,
      );
    }
    case DECREARSE_QUANTITY: {
      return state.map(item =>
        item._id === action.data._id
          ? {
              ...item,
              quantity: item.quantity - 1,
              totalOfferPrice:
                item.totalOfferPrice - action.data.pricing.offerPrice,
              totalPrice: item.totalPrice - action.data.pricing.price,
            }
          : item,
      );
    }
    case EMPTY_THE_CART: {
      return [];
    }
    default:
      return state;
  }
};

export const cartRenderKeyReducer = (state = initialCartRenderKey, action) => {
  switch (action.type) {
    case CART_RENDER_KEY:
      return state + 1;
    default:
      return state;
  }
};
