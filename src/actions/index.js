export const takeproduct = (product) => {
    alert("action -product-" + product.name)
    return {
       //function actioncreater 
        type: "Take_product",
        payload: product 
    }
  }