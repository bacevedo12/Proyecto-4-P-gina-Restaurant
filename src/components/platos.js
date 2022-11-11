import Card from 'react-bootstrap/Card';
import React from "react";

const Platos = ({items}) =>{
    return (
      <div className="container row">
        {items.map((items)=>{       
        const {title, img, desc, price} = items;
        return (
            <Card className="m-3" style={{ width: '18rem' }}>
              <Card.Img variant="top" src={img} alt={title}  />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {desc}
                  ${price}
                </Card.Text>
              </Card.Body>
            </Card>
        );
      })}
    </div>
    );
};

export default Platos