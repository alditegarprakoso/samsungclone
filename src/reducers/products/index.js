import { GET_LIST_PRODUCTS } from "../../actions/productAction";

const initialState = {
  getListProductsResult: false,
  getListProductsLoading: false,
  getListProductsError: false,
};

const products = (state = initialState, action) => {
  switch (action.type) {
    case GET_LIST_PRODUCTS:
      return {
        ...state,
        getListProductsResult: action.payload.data.data,
        getListProductsLoading: action.payload.loading,
        getListProductsError: action.payload.error,
      };
    default:
      return state;
  }
};

export default products;
