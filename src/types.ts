export type TUser ={
    id: string,
    email: string,  
    password: string,

}

export type Tproduct ={
    id: string 
    name: string
    price: number

}

export type TPurchase = {
    id: string 
    buyerId: string
    productId: string 
    quantity: number
    totalPrice: number

}