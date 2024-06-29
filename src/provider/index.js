'use client'

import Header from "@/components/header"
import store from "@/redux/store"
import { Provider } from "react-redux"


export default function ReduxProvider({children, user}){
    return <Provider store={store}>
        <Header user={user} />
        {children}
        </Provider>
}