import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import SliderData from "./CustomData/SliderData";
import ReviewData from "./CustomData/ReviewData";
import globImg from "../assets/images/globImg.png"
import workImg1 from "../assets/images/workImg1.png"
import workImg2 from "../assets/images/workImg2.png"
import workImg3 from "../assets/images/workImg3.png"
import clientPic from "../assets/images/clientPic.png"

const Home = () => {
    const options = {
        responsiveClass: true,
        nav: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: false,
        loop: true
    };
    return (
        <>
            <div className="banner_sec">
                <div className="banner"></div>
            </div>
            <div className="container-medium">
                <div className="glob_sec sec">
                    <div className="glob_left">
                        <div className="heading">
                            <h1>Another one of the best web fonts to</h1>
                            <p>Another one of the best web fonts to choose from is Montserrat. Montserrat is a geometric sans-serif font that easily can be incorporated nearly anywhere in your site. This font scales well, as it can be easily read regardless if it’s large or small. The millennial demographic tends to gravitate toward this bold and youthful font.</p>
                        </div>
                    </div>
                    <div className="glob_right">
                        <img src={globImg} alt="" />
                    </div>
                </div>
            </div>
            <div className="parallax_sec">
                <div className="parallax"></div>

                <div className="parallax_content">
                    <div className="container_medium">
                        <div className="parallax_content_inner">
                            <p>Lorem ipsum dolor sit amet, consectetur</p>
                        </div>
                    </div>
                </div>

                <div className="parallax"></div>
            </div>
            <div className="slider_sec sec">
                <div className="slider_inner">
                    <div className="container-medium">
                        <OwlCarousel className="owl-theme" {...options} >
                            {SliderData.map((val) => {
                                return (
                                    <div className="item" key={val.id} >
                                        <div className="slider_top">
                                            <div className="slider_top_img_wrap">
                                                <img src={val.smallImg} alt="slider top image" />
                                            </div>
                                        </div>
                                        <div className="slider_bottom">
                                            <div className="slider_btm_left">
                                                <div className="slider_img_wrap">
                                                    <img src={val.imgsrc} alt="slide image" />
                                                </div>
                                            </div>
                                            <div className="slider_btm_right">
                                                <div className="slider-content">
                                                    <h4>{val.title}</h4>
                                                    <p>{val.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
            <div className="how_we_work_sec sec">
                <div className="container-medium">
                    <div className="work_item reverse">
                        <div className="item_left">
                            <div className="item_img_wrap">
                                <img src={workImg1} alt="" />
                            </div>
                        </div>
                        <div className="item_right">
                            <h4>Another one of the best web fonts to</h4>
                            <p>Another one of the best web fonts to Another one of the best web fonts to</p>
                        </div>
                    </div>
                    <div className="work_item">
                        <div className="item_left">
                            <div className="item_img_wrap">
                                <img src={workImg2} alt="" />
                            </div>
                        </div>
                        <div className="item_right">
                            <h4>Another one of the best web fonts to</h4>
                            <p>Another one of the best web fonts to Another one of the best web fonts to</p>
                        </div>
                    </div>
                    <div className="work_item work_top">
                        <div className="item_left">
                            <div className="item_img_wrap">
                                <img src={workImg3} alt="" />
                            </div>
                        </div>
                        <div className="item_right">
                            <h4>Another one of the best web fonts to</h4>
                            <p>Another one of the best web fonts to Another one of the best web fonts to</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="virtual_tour_sec">
                <div className="container-medium">
                    <div className="tour_wraper">
                        <p>Still Confused, take a virtual tour.</p>
                        <button>START TOUR</button>
                    </div>
                </div>
            </div>
            <div className="client_review_sec sec">
                <div className="container-medium">
                    <div className="client_review_inner">
                        {ReviewData.map((val) => {
                            return (
                                <div className="client_review_item" key={val.id}>
                                    <div className="client_review">
                                        <p><i className="icon-quote"></i>{val.review}</p>
                                    </div>
                                    <div className="client_name">
                                        <div className="client_img">
                                            <img src={val.imgsrc} alt="" />
                                        </div>
                                        <p><span>Review by</span> {val.name}</p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home;