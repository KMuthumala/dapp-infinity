import React from "react";

export interface SingleBoxDetails {
    title:string;
    image:string;
    link:string;
}

export interface SingleCardDetails {
    title:string;
    image:React.ReactNode;
    description:string;
}
