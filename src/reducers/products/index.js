import {
  GET_LIST_PRODUCTS,
  GET_DETAIL_PRODUCTS,
} from "../../actions/productAction";

const initialState = {
  getListProductsResult: false,
  getListProductsLoading: false,
  getListProductsError: false,
  getDetailProductResult: false,
  getDetailProductLoading: false,
  getDetailProductError: false,
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
    case GET_DETAIL_PRODUCTS:
      return {
        ...state,
        getDetailProductResult: action.payload.data.data,
        getDetailProductLoading: action.payload.loading,
        getDetailProductError: action.payload.error,
      };
    default:
      return state;
  }
};

export default products;
