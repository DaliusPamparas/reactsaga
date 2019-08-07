export default function (state=null, action){
    switch (action.type){
        case "Take_product":
        return action.payload;
        break;
        default:
         return state;
    }
}