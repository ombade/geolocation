import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='dark'>
      <MDBContainer className='p-4'>




        <section className='mb-4'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt distinctio earum repellat quaerat
            voluptatibus placeat nam, commodi optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className='' >
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Contact links</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href="mailto:ombade364@example.com" className='text-white'>
                    Mail us
                  </a>
                </li>
                <li>
                <a href="tel:+919022157947" className='text-white'>Call us </a>
                </li>
                <li>
                  <a href='https://www.google.com/maps/place/Sanjivani+College+of+Engineering,+Kopargaon/@19.9008818,74.4921207,17z/data=!3m1!4b1!4m6!3m5!1s0x3bdc4474a245d261:0x806a6b9889186a80!8m2!3d19.9008768!4d74.4946956!16s%2Fm%2F051_qf0?entry=ttu' className='text-white'>
                    locate Us
                  </a>
                </li>
               
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Code Bases</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='https://github.com/ombade/geolocation' className='text-white'>
                    FrantEnd Code
                  </a>
                </li>
                <li>
                  <a href='https://github.com/ombade/geolocation_backend' className='text-white'>
                    backend code
                  </a>
                </li>
                <li>
                  <a href='https://drive.google.com/drive/folders/1S-C4K5hkq4Bdaf57kkUcORmxEZApJFbe?usp=sharing' className='text-white'>
                   Project Documents
                  </a>
                </li>

              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Important links </h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <a href='#!' className='text-white'>
                    Admin Access 
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    Dashboard Acess
                  </a>
                </li>
                <li>
                  <a href='#!' className='text-white'>
                    dash access
                  </a>
                </li>
             
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              

              
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2023 Copyright:
        <a className='text-white' href=''>
          GELOCATION
        </a>
      </div>
    </MDBFooter>
  );
}