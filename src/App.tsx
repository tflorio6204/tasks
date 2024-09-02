import React from "react";
import myImage from './Assets/IMG_4268.png'
import "./App.css";
import { Button, Col, Container, Row } from "react-bootstrap";

function App(): React.JSX.Element {
    return (
        <div>
            <h3 className = "title"> Tommys Website</h3>
        <div className="App">
            <header className="App-header">
                Thomas Florio:
                UD CISC275 with React Hooks and TypeScript
            </header>
            <p>
                Hello World
                Edit <code>src/App.tsx</code> and save. This page will
                automatically reload.
            </p>
        <Container>
            <Row>
                <Col>
                <div style={{ backgroundColor: 'red', height: '200px', width: '500px'}}>
                    <b>I like: </b>
                    <ul>
                         <li> Weather </li>
                         <li> Video Games </li>
                         <li> Long Walks </li>
                         <li> Ice Cream </li>
                    </ul>
                    <Button className = "button" onClick={ () => { console.log("Hello World!") } }>Log Hello World!</Button>
                </div>
                </Col>
                <Col>
                    <div style={{ backgroundColor: 'red', height: '200px', width: '500px' }}>
                    <b>Clouds!</b>
                    <img src= {myImage} alt = "thunderstorm" style = {{ margin: '30px', height: '150px', width: '250px'}}></img>
                    </div>
                </Col>
            </Row>
        </Container>
        </div>
        </div>
    );
}

export default App;
