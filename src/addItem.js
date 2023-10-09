import { useEffect } from "react";
import { useDispatch, useSelector, useStore } from "react-redux"
import { cartActions, getCart } from "./Store/cartslice";

export const Item = ()=>{
    const dispatch = useDispatch();
    const totalItems = useSelector(state=>state.cart.totalItems);
    useEffect(()=>{
        dispatch(getCart)
    },[dispatch])
   
    console.log(totalItems);
    return(
        <>
            {totalItems}
        </>
    )
}