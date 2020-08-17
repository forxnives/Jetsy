export const addItemToCart = (cartItems, itemToAdd) => {
    
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