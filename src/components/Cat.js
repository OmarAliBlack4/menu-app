import {  Col, Row } from "react-bootstrap";

function Cat({foodFillter , allCategory}){

    const onFilter = (cat) =>{
        foodFillter(cat)
    }
    return(
        <Row>
            <Col>
            <div className="divButtons">
            {allCategory.map((el , index)=>{
                return(
                    <button key={index} onClick={()=> onFilter(el)} className="catBtn">{el}</button>
                )
            })}
                </div>
            </Col>
        </Row>
    )
}
export default Cat;