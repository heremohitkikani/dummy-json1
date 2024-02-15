
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './App.css';

function Header() {
    return (
        <>
            <div className='header'>

                <Container className=' d-flex justify-content-between'>
                    <a href=''><Link to="/"> HOME</Link></a>
                    <a href=''><Link to="/Posts"> POSTS</Link></a>
                    <a href=''><Link to="/Comments"> COMMENTS</Link></a>
                    <a href=''><Link to="/Albums"> ALBUMS</Link></a>
                    <a href=''><Link to="/Photos"> PHOTOS</Link></a>
                    <a href=''><Link to="/Todo"> TODO</Link></a>
                    <a href=''> <Link to="/User"> USER</Link></a>
                </Container>
            </div>


        </>
    )
}
export default Header;