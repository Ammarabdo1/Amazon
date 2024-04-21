import React, { useRef, useState } from 'react';

//!bootStrap
import {Container , Row, Col} from 'react-bootstrap'

//!Swiper
import { Swiper, SwiperSlide } from 'swiper/react'


import 'swiper/css';

const Header = () => {
  return (
    <div className='header'>

        <Swiper className="mySwiper">
            <SwiperSlide><img src="images\headerSwiper\1.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images\headerSwiper\2.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images\headerSwiper\3.jpg" alt="" /></SwiperSlide>
            <SwiperSlide><img src="images\headerSwiper\4.jpg" alt="" /></SwiperSlide>

        </Swiper>

        <Container fluid className="cardsP1">
            <Row>
                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Gaming accessories</h5>
                        <div className="position">
                            <div>
                                <img src="images\headercards\card1\card1Headset_.jpg" alt="" className="position_topleft" />
                                <img src="images\headercards\card1\card1Keyboard.jpg" alt="" className="position_topright" />
                                <img src="images\headercards\card1\card1Mouse.jpg" alt="" className="position_bottomleft" />
                                <img src="images\headercards\card1\cardChair.jpg" alt="" className="position_bottomright" />
                            </div>                            
                        </div>
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Electronics</h5>
                        <img src="images\headercards\card2.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Health & Personal Care</h5>
                        <img src="images\headercards\card3.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>AmazonBasics</h5>
                        <img src="images\headercards\card4.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>


                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Deal of the Day</h5>
                        <img src="images\headercards\card5.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Find your ideal TV</h5>
                        <img src="images\headercards\card6.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Comfy styles for her</h5>
                        <div className="position7">
                            <div>
                                <img src="images\headercards\card7\1.jpg" alt="" className="position_topleft" />
                                <img src="images\headercards\card7\2.jpg" alt="" className="position_topright" />
                                <img src="images\headercards\card7\3.jpg" alt="" className="position_bottomleft" />
                                <img src="images\headercards\card7\4.jpg" alt="" className="position_bottomright" />                                
                            </div>
                        </div>

                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Shop activity trackers and smartwatches</h5>
                        <img src="images\headercards\card8.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>
            </Row>

            <div className="swiper_p1">
                
                <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
                    <SwiperSlide><img src="images/1.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/2.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/3.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/4.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/5.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/6.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/7.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/9.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/10.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/11.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/12.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/13.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/14.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/15.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/16.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/17.jpg" alt="" /></SwiperSlide>

                 </Swiper>

            </div>  
            <div className="swiper_p1">
                
                <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
                    <SwiperSlide><img src="images/18.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/19.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/33.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/21.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/39.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/23.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/24.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/25.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/26.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/27.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/28.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/29.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/30.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/31.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/32.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/20.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/34.jpg" alt="" /></SwiperSlide>

                 </Swiper>

            </div>  

            <Row className='mt-5'>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Electronics</h5>
                        <img src="images\headercards\card9.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Electronics</h5>
                        <img src="images\headercards\card10.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>Health & Personal Care</h5>
                        <img src="images\headercards\card11.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

                <Col lg={3} sm={12}>
                    <div className="card">
                        <h5>AmazonBasics</h5>
                        <img src="images\headercards\card12.jpg" alt="" className='singleImg' />
                        <a href="#!">Shop Now</a>
                    </div>
                </Col>

            </Row>

            <div className="swiper_p1">
                
                <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
                    <SwiperSlide><img src="images/35.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/10.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/36.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/11.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/37.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/12.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/29.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/13.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/38.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/14.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/39.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/15.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/40.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/16.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/41.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/17.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/42.jpg" alt="" /></SwiperSlide>

                 </Swiper>

            </div>  
            <div className="swiper_p1">
                
                <Swiper slidesPerView={7} spaceBetween={30} className="mySwiper">
                    <SwiperSlide><img src="images/34.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/43.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/20.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/44.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/30.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/45.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/24.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/46.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/26.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/47.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/28.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/48.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/30.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/42.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/32.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/8.jpg" alt="" /></SwiperSlide>
                    <SwiperSlide><img src="images/34.jpg" alt="" /></SwiperSlide>

                 </Swiper>

            </div>  

        </Container>



    </div>
  )
}

export default Header