export const addToCart = (product) => {
   
    return {
       //function actioncreater 
        type: "addToCart",
        payload: product
    }
  }
