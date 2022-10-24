import React from "react";

export interface SingleBoxDetails {
    title: string;
    image: string;
    link: string;
}

export interface SingleCardDetails {
    title: string;
    image: React.ReactNode;
    description: string;
}
export interface SingleDappCardDetails{
    title:string;
    image:string;
    description:string;
    link:string;
    category:string;
}
export interface DappCategory{
    category:string;
}

export interface HorizontalScrollBarInterface{
    handleClick:Function;
}
export interface SmallPriceCardDetails {
    title: string;
    description: string;
    image: string;
    lastPrice: number,
    openPrice: number

}