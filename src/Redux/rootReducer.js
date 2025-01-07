import {combineReducers} from 'redux';
import {
  reducer,
  categoryReducer,
  cartReducer,
  topDealsReducer,
  topSellerReducer,
  bannerReducer,
  cartRenderKeyReducer,
  headerReducer,
} from './reducers/reducer.js';
import {userReducer} from './reducers/userReducer.js';
import {itemReducer} from './reducers/itemReducer.js';

export default combineReducers({
  auth: reducer,
  category: categoryReducer,
  cart: cartReducer,
  topDeals: topDealsReducer,
  topSellers: topSellerReducer,
  banners: bannerReducer,
  cartRenderKey: cartRenderKeyReducer,
  user: userReducer,
  header: headerReducer,
  items: itemReducer,
});
