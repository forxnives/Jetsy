export const addItemFunction = (cartItems, itemToAdd) => {
    
    const existingItem = cartItems.find(item =>
        item.id === itemToAdd.id
    )

    if (existingItem) {

        return cartItems.map(item => 
            item.id === itemToAdd.id
                ? {...item, cartquantity: item.cartquantity + 1 }
                : item 

        )

    }else {

        return [...cartItems, { ...itemToAdd, cartquantity: 1 }]
    
    }

}

export const clearItemFunction = (cartItems, itemToRemove) => {
    return cartItems.filter(item => item.id !== itemToRemove.id)


}


export const removeItemFunction = (cartItems, itemToDecrement) => {

    if (itemToDecrement.cartquantity > 1){
        return cartItems.map(item => {

            if (item.id === itemToDecrement.id){
                item.cartquantity--;
            }
            return item;
        })

    } else {
        return cartItems.filter(item => item.id !== itemToDecrement.id)

    }
}

//FROM YIHUA...I LIKE THE ABOVE BETTER THOUGH AS IT ITERATES THROUGH THE ARRAY LESS


// export const removeItemFunction = (cartItems, itemToDecrement) => {

//     const existingItem = cartItems.find(item=>
//         item.id === itemToDecrement.id
//         );

//     if (existingItem.cartquantity == 1) {
//         return cartItems.filter(item=> item.id !==itemToDecrement.id);
//     }

//     return cartItems.map(item=>
//         item.id === itemToDecrement.id
//         ? {...item, cartquantity:item.cartquantity-1}
//         : (item)

//         )
// }