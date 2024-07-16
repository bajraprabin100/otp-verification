import React from "react";

import "./App.css";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {ThemeProvider, CssBaseline} from "@mui/material";

import {routeTree} from "./routeTree";
import theme from "./styles/theme";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {AuthProvider, useAuth} from "@/app/core";
import {ToastContainer} from "react-toastify";

// Create a new router instance
const queryClient = new QueryClient();
export const router = createRouter({
    routeTree,
    context: {
        queryClient,
        auth: undefined,
    },
});

// Register the router instance for type safety
declare module "@tanstack/react-router" {
    interface Register {
        router: typeof router;
    }
}

function InnerApp() {
    const auth = useAuth()
    return <RouterProvider router={router} context={{auth}}/>
}

function App() {
    return (
        <>
            <ThemeProvider theme={theme}>
                <CssBaseline/>
                <QueryClientProvider client={queryClient}>
                    <AuthProvider>
                        <React.Suspense fallback="...Loading">
                            <InnerApp/>
                            <ReactQueryDevtools initialIsOpen={false}/>
                        </React.Suspense>
                    </AuthProvider>
                </QueryClientProvider>
            </ThemeProvider>
            <ToastContainer/>
        </>

    );
}

export default App;
