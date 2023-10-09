import { Provider } from "react-redux"
import { store } from "./Store/store"
import { Item } from "./addItem"

export const App = () =>{
    return (
        <Provider store = {store}>
           <Item/>
        </Provider>
    )
}