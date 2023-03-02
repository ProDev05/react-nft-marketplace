import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Page } from "./types";
import ScrollToTop from "./ScrollToTop";
import Footer from "shared/Footer/Footer";

export const pages: Page[] = [];

const MyRoutes = () => {
    return (
        <BrowserRouter 
            basename={process.env.NODE_ENV === "production" ? "ciscryp" : "ciscrypt"}
        >
            <span>asdfasdf</span>
            <ScrollToTop />
            <Routes>
                {pages.map(({ component, path }) => {
                    const Component = component;
                    return <Route key={path} element={<Component />} path={path} />;
                })}
            </Routes>
            <Footer />
        </BrowserRouter>
    );
};

export default MyRoutes;