import React, { useEffect, useState } from 'react';
import { useStoreContext } from '../../utils/GlobalState';
import {
    UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { useParams } from 'react-router-dom';
import { Dropdown, DropdownButton, ButtonGroup, Container } from 'react-bootstrap'
import './style.css'

export default function CategoryMenu() {

    const [state, dispatch] = useStoreContext();

    const { category } = useParams();
    const decodedCategory = category.replace("%20", " ")

    const { categories } = state;

    const [categoryName, updateCategoryName] = useState('All');

    useEffect(() => {
            updateCategoryName(decodedCategory);
    }, [])

    const handleClick = (id) => {
        dispatch({
            type: UPDATE_CURRENT_CATEGORY,
            currentCategory: id,
        });
        updateCategoryName((categories.find((category)=> category._id === id)).Name);
    };

    return (
<Container className='buttongroup-container'>
        <DropdownButton as={ButtonGroup} title={`Category: ${categoryName}`} className='category-dropdown mx-auto mt-4' variant="light" >
                {categories ? (
                    <div>
                        {categories.map((category) => (
                            <Dropdown.Item key={category._id}
                                onClick={(e) => {
                                    e.preventDefault()
                                    handleClick(category._id)
                                }}>{category.Name}
                            </Dropdown.Item>
                        ))}
                    </div>
                ) : (
                    <div>
                        <Dropdown.Item href="#" key='None'>'Categories loading...'</Dropdown.Item>
                    </div>
                )}
        </DropdownButton>
        </Container>
    )
}
