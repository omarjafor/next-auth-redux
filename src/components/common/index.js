import Header from "../header";

const { default: ReduxProvider } = require("@/provider");

async function CommonLayout({children}){
    return <ReduxProvider>
        <Header />
        {children}
        </ReduxProvider>
}

export default CommonLayout;