import React from "react";
import { Button } from "react-bootstrap";

const Footer = () => {
  return (
    <>
    <div className="bg-dark text-white ">
      <div style={{height:'300px'}} className='mt-5 pt-3 container w-100 '>
        <div className='d-flex justify-content-between'>
          {/* intro */}
          <div style={{width:'400px'}}>
            <h5><i class="fa-solid fa-plane-departure me-2"></i>
            Desti</h5>
            <p>Designed and built with all the love in the world by Arjun R.</p>
            <p>Code licensed MIT, docs CC BY 3.0.</p>
            <p>Currently v5.3.3.</p>
          </div>
          {/* Links */}
          <div className='d-flex flex-column'>
            <h5>Links</h5>
            <a href="" className="text-white text-decoration-none mb-1">Home</a>
            <a href="" className="text-white text-decoration-none mb-1">Destination</a>
            <a href="" className="text-white text-decoration-none mb-1">Visited</a>
            <a href="" className="text-white text-decoration-none mb-1">Wishlist</a>
            
          </div>
  
          {/* guides */}
          <div className='d-flex flex-column'>
            <h5>Guides</h5>
            <a className="mb-1" href="https://react.dev/" style={{textDecoration:'none', color:'white'}} target='_blank'>React</a>
            <a className="mb-1" href="https://react-bootstrap.netlify.app/" style={{textDecoration:'none', color:'white'}} target='_blank'>React Bootstrap</a>
            <a className="mb-1" href="https://www.npmjs.com/package/react-router-dom" style={{textDecoration:'none', color:'white'}} target='_blank'>React Router</a>
          </div>
          
          {/* contact */}
          <div className='d-flex flex-column'>
            <h5>Contacts</h5>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email Here..'  className='form-control me-2'/>
              <Button variant="success"><i class="fa-solid fa-arrow-right"></i></Button>
            </div>
            <div className='d-flex justify-content-between mt-3'>
              <a href="https://en.wikipedia.org/wiki/Twitter" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-twitter"></i></a>
              <a href="https://www.instagram.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-instagram"></i></a>
              <a href="https://www.facebook.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-facebook"></i></a>
              <a href="https://www.linkedin.com/feed/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-linkedin"></i></a>
              <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-brands fa-github"></i></a>
              <a href="https://github.com/" style={{textDecoration:'none', color:'white'}} target='_blank'><i class="fa-solid fa-phone"></i></a>
            </div>
          </div>
        </div>
        <p className='text-center mt-3'>Copyright &copy; Arjun, Desti. Built with React.</p>
      </div>
    </div>
    </>
  );
};

export default Footer;
