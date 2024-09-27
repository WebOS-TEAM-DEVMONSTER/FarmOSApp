import {useState} from 'react';
import {BrowserRouter, Routes, Route, useNavigate} from 'react-router-dom';
import Connect from "./pages/connect";
import Add from "./pages/add";
import Main from "./pages/main";
import Remove from "./pages/remove";


import React from 'react';

function App() {
    // const [products, setProducts] = useState(data);
    // const [nextId, setNextId] = useState(7);
    // const navigate = useNavigate();
   
    // const handleCreate = (_title, _price, _content) => {
    //     const newProducts = [...products];
    //     newProducts.push({ id: nextId, title: _title, price: _price, content: _content });
    //     setProducts(newProducts);
    //     navigate(`/detail/${nextId}`);
    //     setNextId(nextId + 1);
    // };

    // const onUpdate = (_title, _price, _content, _id) => {
    //     const newProducts = [...products];
    //     const updatedProduct = {id:_id, name: products[_id].name , title:_title, price:_price, content:_content}
    //     for(let i = 0; i < newProducts.length;i++){
    //         if(newProducts[i].id === _id){
    //             newProducts[i] = updatedProduct;
    //             break;
    //         }
    //     }
    //     setProducts(newProducts);
    //     navigate(`/detail/${_id}`);
    // }

    // const onUpScore = (_id)=> {
    //     const newProducts = [...products];
    //     for(let i = 0; i < newProducts.length; i++) {
    //         if(newProducts[i].id === _id){
    //             newProducts[i].score += 1;
    //             break;
    //         }
    //     }
    //     setProducts(newProducts);
    // }

    return (
        <div>
            <Routes>
                <Route path="/add" element={<Add />} />
				<Route path="/connect" element={<Connect />} />
				<Route path="/main" element={<Main />} />
				<Route path="/remove" element={<Remove />} />
                
            </Routes>
        </div>
    );
}

function Root() {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
}

export default Root;
