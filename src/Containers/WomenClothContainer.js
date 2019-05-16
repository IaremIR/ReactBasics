import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import './../StyleForms.css';

export class WomenClothContainer extends Component {
    constructor() {
        super()
        this.state = {
            isLoaded: false,
            products: []
        }
    }
    componentDidMount() {
        fetch('./productData.json')
            .then(res => res.json())
            .then(JSON => {
                this.setState({
                    isLoaded: true,
                    products: JSON
                });
            });
    }

    render() {
        const { products, isLoaded } = this.state;
        if (!isLoaded) {
            return <div>Loading...</div>
        } else {
            let prod = products.map((product) => {
                return (
                    <React.Fragment key = {product.id}>
                            <tbody>
                                <tr>
                                    <td key = {product.productTitle}>{product.productTitle}</td>
                                    <td key = {product.style}>{product.style}</td>
                                    <td key = {product.price}>{product.price}</td>
                                </tr>
                             </tbody>
                    </React.Fragment>
                )
            });

            return (
                <Table striped bordered condensed hover className='table'> 
                    <thead>
                    <tr>
                     <th key>Title</th>
                     <th>Style</th>
                     <th>Price</th>
                    </tr>
                    </thead>
                    {prod}
                </Table>
            );
        }
    }
}