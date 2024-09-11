import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'

import { zoomIn } from '../../../utlits/zoomIn'
import Title from '../../common/title'
import { servicesDataOne } from '../../../utlits/fackData/servicesDataOne'
import ServiceIconSeven from '../../../assets/icons/serviceIconSeven'


const ServicesOne = () => {
    return (
        <div className="services-area style-2 pb-75">
            <div className="container">
                <Title sectionName={"Hizmetlerimiz"} sectionTitle={"Kapsamlı Siber Güvenlik Hizmetlerimiz"} style={"style-2"} />
                <div className="row" >
                    {
                        servicesDataOne.map(({ id, link, service_details, service_name, src }) => {
                            return (
                                <motion.div key={id} className="col-lg-4 col-sm-6"
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-services-info">
                                        <div className="icon">
                                            <img style={{ width: '50%' }} src={src} />
                                        </div>
                                        <h3>
                                            <Link className="text-decoration-none" href={link}>{service_name}</Link>
                                        </h3>
                                        <p>{service_details}</p>

                                    </div>
                                </motion.div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default ServicesOne