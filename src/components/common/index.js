import { auth } from "@/auth";
import ReduxProvider from "@/provider";
import { Suspense } from "react";
import Loading from "@/app/loading";

async function CommonLayout({children}){
    const getSession = await auth();

    return <ReduxProvider user={getSession?.user}>
        <Suspense fallback={<Loading />}> {children}</Suspense>
        </ReduxProvider>
}

export default CommonLayout;