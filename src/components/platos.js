import Card from 'react-bootstrap/Card';

const platos = () =>{
    return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>Pescado a lo Pobre</Card.Title>
        <Card.Text>
          Pescado con papas fritas, huevo y cebolla caramelizada
        </Card.Text>
      </Card.Body>
    </Card>
    )
}

export default platos