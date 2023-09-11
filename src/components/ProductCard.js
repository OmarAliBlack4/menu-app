import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ProductCard({foodData}) {
    return (
        <Row>
            {foodData.length >= 1 ? foodData.map((el)=>{
                return(
                    <Col key={el.id} sm="12" className='mb-3'>
                    <Card className='flex-row body-color'>
                        <Card.Img className='imageCard'  src={el.imgUrl} />
                        <Card.Body>
                            <Card.Title className='d-f-btt'>
                                <div className='descCard'>{el.title} </div>
                                <div className='titlePrice'>{el.price}</div>
                            </Card.Title>
                        <Card.Text className='py-2 titleCard'>
                        {el.description}
                        </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                )
            }) : <h3>No Food Found , Search like this ' Breackfast or Lunch or Dinner or Snack '</h3>}
        </Row>
    );
}

export default ProductCard;