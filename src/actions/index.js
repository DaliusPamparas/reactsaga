export const addToCart = (product) => {
    alert("action -product-" + product.name)
    return {
       //function actioncreater 
        type: "addToCart",
        payload: product 
    }
  }