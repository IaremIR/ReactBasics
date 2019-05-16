import React, { Component } from 'react';
import { Button } from '../Shared/Button';
import { Table } from 'react-bootstrap';

export class MenClothContainer extends Component {
    render() {
        const style = {
            color : 'blue'
        }
        var i;
        var category = {
            clothItem: ['pants', 't-shirts', 'socks'],
            color: ['black', 'red', 'white']
        };
        return (
            <>
                <div className='container'>ManCloth
            <Button style={style} text='Submit' />
                </div>

                <Table key={i} striped bordered condensed hover>

                    <tbody>
                        <tr>
                            {category.color.map((color) => <td key={color}>{color}</td>)}
                        </tr>
                        <tr>
                            {category.clothItem.map((clothItem) => <td key={clothItem}>{clothItem}</td>)}
                        </tr>
                    </tbody>
                </Table>
            </>
        );
    }
}