import React, { useEffect } from 'react'
import { QUERY_ALL_PRODUCTS } from '../../utils/queries';
import {
    UPDATE_CURRENT_CATEGORY,
    UPDATE_PRODUCTS,
    UPDATE_SELECTED_PRODUCT
} from '../../utils/actions';
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { idbPromise } from '../../utils/helpers';
import { useStoreContext } from '../../utils/GlobalState';

import { Card, Row , Col } from 'react-bootstrap';

import './style.css'


function AllProducts() {
    const [state, dispatch] = useStoreContext();
    const { products , currentCategory, categories } = state;
    const { category } = useParams();
    const decodedCategory = category.replace("%20", " ")
    const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
    const selectedCategory = categories.find((thisCategory) => thisCategory.Name === decodedCategory);

    function filterProducts() {
        if (state && !currentCategory) {
            return state.products;
        }
        return state.products.filter(
            (product) => product.categories.find((category) => category._id === currentCategory)
        );
    }

    useEffect(() => {
        if (data) {
            dispatch({
                type: UPDATE_PRODUCTS,
                products: data.products,
            });
            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
            });
            if (selectedCategory) {
                dispatch({
                    type: UPDATE_CURRENT_CATEGORY,
                    currentCategory: selectedCategory._id
                })
            }
        } else if (!loading) {
            idbPromise('products', 'get').then((product) => {
                dispatch({
                    type: UPDATE_PRODUCTS,
                    products: products,
                });
            });
        } 
    }, [data, loading, dispatch, selectedCategory]);

    function goToProduct(productId) {
        dispatch({
            type: UPDATE_SELECTED_PRODUCT,
            selectedProduct: productId,
        })
        window.location.assign("/product/" + productId)
    }
    

    return (
        // <Container className='card-container'>
            // {/* loop through each product and generate a card */}
            <Row xs={1} s={2} md={3} lg={4} className='g-4'>
                {loading || !selectedCategory ? (
                    <div>Loading...</div>
                ) : data ? (
                    filterProducts().map((product) => (
                        <Col><Card className="single-card"  key={product._id}
                            onClick={() => {
                                goToProduct(product._id)
                            }} >
                            <Card.Img variant="top" src={product.image[0].img} style={{ paddingTop: '10px' }} />
                            <Card.Body>
                                <Card.Title className="product-name">{product.name}</Card.Title>
                                <Card.Text className="price">{product.price}</Card.Text>
                            </Card.Body>
                        </Card></Col>
                    ))
                ) : (<div></div>)}
            </Row>
        // </Container>
    )
}

export default AllProducts;
