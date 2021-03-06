import React,{useEffect} from 'react'
import Sidebar from '../Sidebar/Sidebar'
import NavbarMenu from '../NavbarMenu/NavbarMenu'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { Link, Navigate,useParams } from 'react-router-dom'
import useLocalStorage from 'use-local-storage'
import CookieConsent from "react-cookie-consent";
import "./Dashboard.css";
import { useState } from 'react'
import axios from 'axios';
const Dashboard = () => {
    //fetch Id
    
    const id=localStorage.getItem('id')

    let logedin=true;
    const [jdlock, setjdlock]=useState([])
    useEffect(()=>{
        const fetchPost= async ()=>{
         const res = await axios.get(`http://162.240.67.205:5000/api/viewjd`);
     
         setjdlock(res.data.length);
             
        }
        fetchPost();
         },[]);
    
   
console.log(id)
    useEffect(() => {
      const fetchPosts = async () =>{
        const res = await axios.get(`http://162.240.67.205:5000/api/usersbyId/${id}`);
        
      }
      fetchPosts();
    },[id]);
  
   
    const [theme] = useLocalStorage('theme' ? 'dark' : 'light')
    let gettoken=localStorage.getItem('token')
    if(gettoken==null){
        logedin=false;
    }
    
  return (
    <div className='dashboard'  data-theme={theme}>
      {logedin? <></>: <Navigate to="/"/>}
               <CookieConsent
  location="bottom"
  buttonText="I accepted"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  
</CookieConsent>
      <Sidebar />
      <NavbarMenu />
      <Container className='right-report-container'>
            <div>
            <Link to="/Dashbaord/id"><Button variant="secondary" className='mt-3 mx-3'>Today</Button></Link>
            <Link to="/Dashbaord/thisweek"><Button variant="outline-secondary" className='mt-3 mx-3'>This Week</Button></Link>
            <Link to="/Dashbaord/thismonth"><Button variant="outline-secondary" className='mt-3 mx-3'>This Month</Button></Link>
            <Link to="/Dashbaord/lastmonth"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Month</Button></Link>
            <Link to="/Dashbaord/lastquarter"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Quarter</Button></Link>
            <Link to="/Dashbaord/lastyear"><Button variant="outline-secondary" className='mt-3 mx-3'>Last Year</Button></Link>
            </div>
            <Row className='mt-3'>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of mobile numbers/emails viewed /downloaded (if used our portal)</Card.Title>
                            <br></br>
                            <h2>100</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JDs locked</Card.Title>
                            <br></br>
                            <h2>{jdlock}</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JDs at interview stage</Card.Title>
                            <br></br>
                            <h2>133</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of successful closures</Card.Title>
                            <br></br>
                            <h2>50</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JDs at offer stage</Card.Title>
                            <br></br>
                            <h2>40</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JD delivered/submitted but feedback pending from client</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of pending delivery submissions by user after locking the JDs</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>No. of JD rework</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>My user rating</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} data-theme={theme}>
                    <Card data-theme={theme}>
                        <Card.Body>
                            <Card.Title>My total payouts/incentives</Card.Title>
                            <br></br>
                            <h2>0</h2>
                        </Card.Body>
                    </Card>
                </Col> 
            </Row>
        </Container>
        <CookieConsent
  location="bottom"
  buttonText="Sure man!!"
  cookieName="myAwesomeCookieName2"
  style={{ background: "#2B373B" }}
  buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
  expires={150}
>
  This website uses cookies to enhance the user experience.{" "}
  <span style={{ fontSize: "10px" }}>This bit of text is smaller :O</span>
</CookieConsent>
   
    </div>
  )
}

export default Dashboard