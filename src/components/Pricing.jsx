import React from "react";
import GridContainer from "./ui/GridContainer";

export function Pricing() {
    const featuresBasic = ["1 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresMedium = ["2 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    const featuresPro = ["4 Static Websites", "SSL Certificate", "Custom Domain", "Unmetered Traffic"];
    return (
        <>
            <section className="min-h-screen">
                <div className="flex w-full justify-center bg-gray-100 py-20 text-center">
                    <h1 className="text-5xl md:text-5xl font-bold">Simple and Fair prices</h1>
                </div>
                <div className="container mx-auto px-4 py-10">
                    <GridContainer cols={3}>
                      
                    </GridContainer>
                </div>
            </section>
        </>
    )
}