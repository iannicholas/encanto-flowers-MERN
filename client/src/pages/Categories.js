import React from "react";
import AllProducts from '../components/Products'
import CategoryMenu  from "../components/CategoryMenu";
import { Container } from "react-bootstrap";

const Categories = () => {
    return (
        <Container>
            <CategoryMenu />
            <AllProducts />
        </Container>
    )
}

export default Categories;