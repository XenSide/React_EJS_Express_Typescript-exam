import React from "react";

export const Navbar = () => {
    return (
        <div className="flex flex-row h-14 p-3 px-10 caret-transparent bg-zinc-950">
            <div className="my-auto flex flex-row w-full place-content-between font-semibold text-white ">
                <p>OmniXen</p>
                <a href="">
                    <h1>Logout</h1>
                </a>
            </div>
        </div>
    );
};
