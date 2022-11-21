import Card from 'react-bootstrap/Card';
import React from "react";
import './platos.css';



const Platos = ({items}) =>{
    return (
      <div className="row justify-content-center">
        {items.map((items, key)=>{       
        const {title, img, desc, price} = items;
        
        return (
            <Card key={key} className="col-xs-12 col-lg-3 m-3  bg-dark" style={{ width: '18rem' }} >
              <Card.Img className='img_menu' variant="top" src={img} alt={title}  />
              <Card.Body>
                <Card.Title className='titulo'><h3>{title}</h3></Card.Title>
                <Card.Text className='desc'>
                  {desc} <br/>
                  {price}
                </Card.Text>
              </Card.Body>
            </Card>
        );
      })}
    </div>
    );
};

export default Platos