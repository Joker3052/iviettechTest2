'use client'
import Link from "next/link";
import { Border } from "react-bootstrap-icons";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export default function Home() {
  return (
    <>
    <div className="my-4 m-[0px] px-[0px] align-center container">
      <img className="w-full h-auto" src="/images/img_1.png" alt="" />
    </div>
    <div className="container">
    <div className="m-4">
    <h2 className="text-center font-bold leading-[48px]">Discover NEW Arrivals</h2>
    <p className="text-center font-normal">Recently added shirts!</p>
    </div>
    <div className="mx-5">
    <Row xs={1} md={4} className="g-4 mt-4">
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png"/>
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>

    <Row xs={1} md={4} className="g-4">
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    <Card style={{border:0}}>
      <Card.Img variant="top" src="/images/card1.png" />
      <Card.Body>
        <Card.Title className="text-center">Plain White Shirt</Card.Title>
        <Card.Text style={{color:'blue'}} className="text-center">
          $123
        </Card.Text>
      </Card.Body>
    </Card>
    </Row>
    </div>
    </div>
    </>
  )
}
