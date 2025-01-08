import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const WishList = () => {
  return (
    <div style={{paddingTop:'100px'}} className='container-fluid'>
        <h1>Wishlist</h1>
        <div className="row container mt-4">
            <div className="col-md-4">
            
                <Card style={{ width: '28rem' }}>
          
          <Card.Body>
         <Link to={'/view'} style={{textDecoration:'none'}}> <img src="https://www.justahotels.com/wp-content/uploads/2023/07/Manali-Travel-Guide.jpg" alt="No image" width={'100%'} />  </Link>
                     <Card.Title>Manali</Card.Title>
         
            <div className='d-flex justify-content-between'>
                <button className='text-danger border-0 bg-transparent btn'><i class="fa-solid fa-trash"></i></button>
                <Button>Visited</Button>
                
            </div>
          </Card.Body>
        </Card>
           
            </div>
        </div>
    </div>
  )
}

export default WishList