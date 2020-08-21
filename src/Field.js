import React from 'react';
import './Field.css'
import {Card, CardGroup} from "react-bootstrap";

function Field(props) {
    const items = props.items;
    const listItems = items?.map((item, index) => {
        return <div key={index} style={{display: "inline-block", margin: "20px"}}>
            <CardGroup style={{width: "400px"}}>
                <Card className="text-center">
                    <Card.Body>
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Text style={{height: "253px"}}>
                            {item._text}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <Card.Img variant="top"  src={item.imageURL} style={{height: "248px"}}/>
                    </Card.Footer>
                </Card>
            </CardGroup>
        </div>
    })
    return listItems;
}

export default Field;