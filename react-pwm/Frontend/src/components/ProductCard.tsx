import React, { useEffect, useState } from "react";

interface Props {
    id: number;
    stock: number;
    name: string;
    price: string;
    description: string;
    imgpath: string;
    smallimgpath: string;
    sku: string;
    order: number;
}

export const ProductCard = ({
    id,
    stock,
    name,
    price,
    description,
    imgpath,
    smallimgpath,
    sku,
    order,
}: Props) => {
    description
        ? (description = description.length > 400 ? description.substring(0, 222) + "..." : description)
        : description;
    name ? (name = name.length > 40 ? name.substring(0, 40) + "..." : name) : name;

    return (
        <div className={`flex flex-col border border-gray-700`}>
            <img src={smallimgpath} alt={name + " image/photo"} width={440} height={354} />
            <p className="px-3 py-2 font-semibold">{name}</p>
            <p className="px-3 py-2 font-ligth text-xs">{description}</p>
        </div>
    );
};
