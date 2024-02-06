import React from "react";
import { FaShoppingCart, FaUser } from "react-icons/fa";
const Header = () => {
    return (
        <>
            <div className="flex items-center justify-between px-[5%] w-screen text-white bg-zinc-800 h-16">
                <div>
                    <p className="text-xl font-semibold font-mono">MyCart</p>
                </div>
                <div className="flex gap-[1rem]">
                    <div className="flex items-center gap-4">
                        <FaShoppingCart />
                        <p>Cart</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <FaUser />
                        <p>Sign in</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
