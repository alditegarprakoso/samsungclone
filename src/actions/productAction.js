export const GET_LIST_PRODUCTS = "GET_LIST_PRODUCTS";
export const GET_DETAIL_PRODUCTS = "GET_DETAIL_PRODUCTS";

export const getProducts = () => {
  return async (dispatch) => {
    // Loading
    dispatch({
      type: GET_LIST_PRODUCTS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    const GET_PRODUCTS = `
            query {
              brands(where: { name: "Samsung" }) {
                id
                name
                products {
                  id
                  name
                }
              }
            }
     `;

    await fetch("https://dev-scphonecmlcj.microgen.id/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_PRODUCTS }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_LIST_PRODUCTS,
          payload: {
            loading: false,
            data: data,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_LIST_PRODUCTS,
          payload: {
            loading: false,
            data: false,
            error: error,
          },
        });
      });
  };
};

export const getDetailProducts = (id) => {
  return async (dispatch) => {
    // Loading
    dispatch({
      type: GET_DETAIL_PRODUCTS,
      payload: {
        loading: true,
        data: false,
        error: false,
      },
    });

    const GET_PRODUCT = `
        query{
          products(where:{id:"${id}"}){
            id
            name    
          }
        }
     `;

    await fetch("https://dev-scphonecmlcj.microgen.id/graphql", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ query: GET_PRODUCT }),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: GET_DETAIL_PRODUCTS,
          payload: {
            loading: false,
            data: data,
            error: false,
          },
        });
      })
      .catch((error) => {
        dispatch({
          type: GET_DETAIL_PRODUCTS,
          payload: {
            loading: false,
            data: false,
            error: error,
          },
        });
      });
  };
};
