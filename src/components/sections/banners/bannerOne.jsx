import React, { useState } from 'react'
import { motion } from "framer-motion"
import world from "../../../assets/images/hero/world.png"
import shap_2 from "../../../assets/images/shape/shape-2.png"
import { slideUp } from '../../../utlits/slideUp'
import ModalVideo from 'react-modal-video';
import "react-modal-video/scss/modal-video.scss";
import { Link } from 'react-router-dom'

const BannerOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <section className="banner-area">
            <div className="container-fluid">
                <motion.div className="row align-items-center"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="banner-content">
                            <div className="title">
                                <h1>Siber Güvenliğinizi <strong>Güvence</strong> Altına Alıyoruz!</h1>
                                <p>DefendZero olarak, verilerinizi korumak ve dijital dünyada güvenliğinizi sağlamak için en gelişmiş siber güvenlik çözümleri sunuyoruz. Güvenliğinizi, uzman ekibimizle 7/24 izleyerek, tehditlere karşı her zaman bir adım önde olmanızı sağlıyoruz.</p>
                                <p>Verilerinizi koruyun. Riskleri en aza indirin. Güvende kalın!</p>
                            </div>
                            {/* <div className="banner-button d-flex align-items-center">
                                <Link className="demo text-decoration-none" to="/contact">Request A Demo</Link>
                                <div className="play-btn d-flex align-items-center">
                                    <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube icon " >
                                        <i className="ri-play-mini-fill"></i>
                                    </div>
                                    <div onClick={() => setOpen(true)} className="text-decoration-none popup-youtube text-white ">
                                        Watch Intro Video
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="banner-image">
                            <img src={world} alt="banner-image" />
                        </div>
                    </div>
                </motion.div>
            </div>
            <div className="shape">
                <div className="shape-2">
                    <img src={shap_2} alt="shape" />
                </div>
            </div>
            <ModalVideo
                channel="youtube"
                youtube={{ mute: 0, autoplay: 0 }}
                isOpen={isOpen}
                videoId="0O2aH4XLbto"
                onClose={() => setOpen(false)}
            />
        </section>
    )
}

export default BannerOne