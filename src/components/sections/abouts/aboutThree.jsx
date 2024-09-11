import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import about_1 from "../../../assets/images/about/about1.png"
import about_2 from "../../../assets/images/about/about3.png"
import about_3 from "../../../assets/images/about/about33.png"
import { slideUp } from '../../../utlits/slideUp'
import AboutIconOne from '../../../assets/icons/aboutIconOne'
import AboutIconTwo from '../../../assets/icons/aboutIconTwo'
import AboutIconThree from '../../../assets/icons/aboutIconThree'
import AboutIconFour from '../../../assets/icons/aboutIconFour'
const AboutThree = () => {
    const infoList = [
        {
            id: 1,
            title: "Uzman Kadro",
            details: "Alanında uzman ve deneyimli siber güvenlik uzmanlarımız, en gelişmiş saldırı tekniklerini ve savunma çözümlerini kullanır.",
            icon: <AboutIconOne />
        },
        {
            id: 2,
            title: "Kapsamlı Hizmetler",
            details: "Geniş kapsamlı hizmet portföyümüz ile siber güvenlik alanında her türlü ihtiyacınızı karşılıyoruz.",
            icon: <AboutIconTwo />
        },
        {
            id: 3,
            title: "Güvenilirlik",
            details: "Müşterilerimizin güvenliği ve gizliliği bizim için önceliktir. Verilerinizi en üst seviyede koruma altına alıyoruz.",
            icon: <AboutIconThree />
        },
        

    ]
    return (
        <div className="about-area pb-75">
            <div className="container">
                <div className="about-title-area">
                    <motion.div className="row align-items-center"
                        initial="offscreen"
                        whileInView="onscreen"
                        variants={slideUp(1)}
                        viewport={{ once: true, amount: 0.4 }}
                    >
                        <div className="col-lg-6">
                            <div className="about-title">
                                {/* <span className="d-block">Hakkımızda</span> */}
                                <h2>Siber Güvenlikte Güvenceniz</h2>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about-title mt-4">
                                <p>Güvenliğinizi en üst seviyeye taşımak için Red Team, Blue Team, sızma testi, kaynak kod analizi ve siber güvenlik danışmanlığı gibi geniş kapsamlı hizmetler sağlıyoruz. Amacımız, müşterilerimizin dijital varlıklarını siber tehditlere karşı koruma altına almak ve sistemlerini her türlü siber saldırıya karşı dayanıklı hale getirmektir.</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
                <motion.div className="row"
                    initial="offscreen"
                    whileInView="onscreen"
                    variants={slideUp(1)}
                    viewport={{ once: true, amount: 0.4 }}
                >
                    <div className="col-lg-6">
                        <div className="about-image">
                            <div className="image-1">
                                <img src={about_1} alt="about-image" />
                            </div>
                            <div className="image-2">
                                <img src={about_2} alt="about-image" />
                            </div>
                            <div className="image-3">
                                <img src={about_3} alt="about-image" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="about-content">
                            {
                                infoList.map(({ details, icon, id, title }) => {
                                    return (
                                        <div key={id} className="content-card d-flex align-items-center">
                                            <div className="icon">
                                                {icon}
                                            </div>
                                            <div className="content">
                                                <h3>{title}</h3>
                                                <p>{details}</p>
                                            </div>
                                        </div>
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default AboutThree