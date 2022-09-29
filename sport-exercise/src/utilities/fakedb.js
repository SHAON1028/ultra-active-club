// use local storage to manage cart data



const getStoredCart = ()=>{
    let exerciseCart = {};

    //get the shopping cart from local storage
    const storedCart = localStorage.getItem('breakTime');
    if(storedCart){
        exerciseCart = JSON.parse(storedCart);
 
    }
    return exerciseCart
}




export {

    getStoredCart
}