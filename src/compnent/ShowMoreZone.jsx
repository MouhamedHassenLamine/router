import React, { useState } from 'react'
import './css/SMZ.css'
import Button from 'react-bootstrap/Button';
import StarsRating from 'react-star-rate';
export default function ShowMoreZone(props) {
  const [showtrailer, setShowtrailer] = useState(false)
  return (
    <><div className='smzparent' style={{ backgroundImage: props.td.smzbanner }}>
      <div className='bannerandratep'>
        <img className='smzimg' src={`${props.td.banner}`.slice(4, -1)} alt='post' />
        <StarsRating classNamePrefix='starsmz' disabled defaultValue={props.td.rate} value={props.td.rate} count={props.td.rate}></StarsRating>
      </div>
      <p className='descrip'>{props.td.description}Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus, tempora culpa magni officia sit dolor nobis obcaecati doloremque nemo recusandae possimus sapiente!</p>
      {showtrailer &&
        <div className='iframeparent'><button onClick={() => setShowtrailer(false)} className='smzexit'>&#x2715;</button><iframe width="560" height="315" src= {props.td.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe></div>
      }

      <div className='smzbutton'>
        <Button onClick={() => setShowtrailer(true)} variant="outline-success">Trailer</Button>{' '}
        <Button variant="outline-danger">Watch here</Button>{' '}
      </div>
    </div><div class="custom-shape-divider-bottom-1684028779">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z" class="shape-fill"></path>
        </svg>
      </div></>
  )
}
