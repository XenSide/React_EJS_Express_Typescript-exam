import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { ProductCard } from "./components/ProductCard";

function App() {
    interface Product {
        id: number;
        stock: number;
        name: string;
        price: string;
        description: string;
        imgpath: string;
        smallimgpath: string;
        sku: string;
    }

    const [products, setProducts] = useState([{} as Product]);

    useEffect(() => {
        fetch("http://localhost:3000/api/products")
            .then((response) => response.json())
            .then((data) => setProducts(data));
    }, []);

    const MappedProducts = products.map((product, index) => (
        <ProductCard {...product} order={index} id={index} />
    ));

    return (
        <div className="App">
            <Navbar />
            <div className="grid lg:grid-cols-4 min-[480px]:grid-cols-2 sm:grid-cols-2 p-5 mt-5 place-content-between gap-8 order-first h-auto w-screen-small bg-white">
                {MappedProducts}
            </div>
        </div>
    );
}

export default App;
