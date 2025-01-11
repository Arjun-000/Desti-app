import React from 'react'
import { Button, Card, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Header from '../components/Header'


const Home = () => {
  return (
    <>
    <Header />
      <div style={{paddingTop:"90px"}} className='container-fluid'>
           <Carousel>
        <Carousel.Item>
          <img src="https://www.justahotels.com/wp-content/uploads/2023/07/Manali-Travel-Guide.jpg" className='w-100 d-block' style={{ objectFit: 'cover', height: '85vh' }} alt="" />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://plus.unsplash.com/premium_photo-1697729431684-8db67d321c10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-100 d-block' style={{ objectFit: 'cover', height: '85vh' }}  alt="" />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="https://plus.unsplash.com/premium_photo-1661962392861-c3cb1cf6dd82?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='w-100 d-block' style={{ objectFit: 'cover', height: '85vh' }}  alt="" />
          <Carousel.Caption>
            
            
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      </div>
      <div className='text-center justify-content-center container-fluid' style={{paddingTop:"150px" ,paddingBottom:"150px"}}>
        <h3>Explore places you’ve only dreamed of, from serene landscapes to bustling cities. <br /> Every destination has a story waiting to be discovered. <br /> Begin your adventure today.</h3>
        <Link to={'/Destination'}><Button variant='success' className='mt-2'>Get Started</Button></Link>
      </div>
      
        
        <div className="row mx-3 mt-4">
          <h2 className='mb-3'>Popular Destinations</h2>
            <div className="col-md-4">
            
                <Card style={{ width: '28rem' }}>
          
          <Card.Body>
          <Link to={'/view'} style={{textDecoration:'none'}}> <img src="https://www.justahotels.com/wp-content/uploads/2023/07/Manali-Travel-Guide.jpg" alt="No image" width={'100%'} height={'280px'}/>  </Link>
            <Card.Title className='text-center fs-3 mt-1'>Manali</Card.Title>
            
          </Card.Body>
        </Card>
           
            </div>
          
            <div className="col-md-4">
            
            <Card style={{ width: '28rem' }}>
      
      <Card.Body>
      <Link to={'/view'} style={{textDecoration:'none'}}> <img src="https://assets.cntraveller.in/photos/621489890fb9c3937ea2ebcb/3:2/w_1620,h_1080,c_limit/jaipur%20lead.jpg" alt="No image" width={'100%'} height={'280px'}/>  </Link>
        <Card.Title className='text-center fs-3 mt-1'>Jaipur</Card.Title>

        
        
      </Card.Body>
    </Card>
       
        </div>

        <div className="col-md-4">
            
                <Card style={{ width: '28rem' }}>
          
          <Card.Body>
          <Link to={'/view'} style={{textDecoration:'none'}}> <img src="https://thisremotecorner.com/wp-content/uploads/2024/01/Limestone-karsts-and-longtail-boats-on-famous-Phra-Nang-Beach-in-Krabi-province-Thailand.jpg" alt="No image" width={'100%'} height={'280px'} />  </Link>
            <Card.Title  className='text-center fs-3 mt-1'>Thailand</Card.Title>

            
            
          </Card.Body>
        </Card>
           
            </div>
        
    </div>
    
    </>
  )
}

export default Home