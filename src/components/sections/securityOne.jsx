import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from "framer-motion"
import { zoomIn } from '../../utlits/zoomIn'
import Title from '../common/title'
const Icon = ({ icon }) => {
    return (
        <div className="icon">
            <img src={icon} />
        </div>
    )
}

const SecurityOne = () => {
    const securityTypes = [
        {
            id: 1,
            icon: <Icon icon={p} />,
            security_name: "Penetrasyon Testi",
            label: "Bilgi sistemlerinin güvenliğini test etmek için yapılan kontrollü saldırılar."
        },
        {
            id: 2,
            icon: <Icon icon={a} />,
            security_name: "Adli Bilişim (Fraud Analizi)",
            label: "Siber suçların izini sürmek ve dijital deliller toplamak için yapılan analiz."
            
        },
        {
            id: 3,
            icon: <Icon icon={sis} />,
            security_name: "Siber İstihbarat Servisi",
            label: "Tehditlerin önceden tespiti için siber dünyadan bilgi toplama hizmeti."
            
        },
        {
            id: 4,
            icon: <Icon icon={d} />,
            security_name: "DDOS Servisi",
            label: "Dağıtık hizmet engelleme saldırılarına karşı koruma hizmeti."
            
        },
        {
            id: 5,
            icon: <Icon icon={z} />,
            security_name: "Zafiyet Analizi",
            label: "Bilgi sistemlerinde güvenlik açıklarını tespit etmeye yönelik analiz."
        },
        {
            id: 6,
            icon: <Icon icon={k} />,
            security_name: "Kaynak Kod Analizi",
            label: "Yazılımın güvenlik açıklarını ve hatalarını tespit etmek için kodun incelenmesi."
        },
        {
            id: 7,           
            icon: <Icon icon={sm} />,
            security_name: "Sosyal Mühendislik",
            label: "İnsan davranışlarını manipüle ederek bilgi sızdırma amaçlı yapılan saldırılar."
        },
        {
            id: 8,
            icon: <Icon icon={zararli}/>,
            security_name: "Zararlı Yazılım Analizi",
            label: "Sisteme zarar verebilecek kötü amaçlı yazılımların tespit ve analizi."
        },
        {
            id: 9,
            
            icon: <Icon icon={l} />,
            security_name: "Load Testi",
            label: "Sistemlerin yüksek trafik altında nasıl performans gösterdiğini ölçen test."
        },

    ];

    return (
        <section className="security-area style-2 pt-100 pb-75">
            <div className="container">
                <Title sectionName="Yeteneklerimiz" sectionTitle="Dijital Dünyanız İçin Kesintisiz Koruma " style={"style-2"} />
                <div className="row justify-content-center" data-cues="fadeIn" >
                    {
                        securityTypes.map(({ icon, id, label, security_name }) => {
                            return (
                                <motion.div className="col-lg-4 col-md-6" key={id}
                                    initial="offscreen"
                                    whileInView="onscreen"
                                    variants={zoomIn(id)}
                                    viewport={{ once: true, amount: 0.4 }}
                                >
                                    <div className="single-security-item d-flex align-items-center">
                                        {icon}
                                        <div className="content">
                                            <h3>
                                                <p className="text-decoration-none" >{security_name}</p>
                                            </h3>
                                            <p style={{ color: 'white' }}>{label}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })
                    }

                </div>
            </div>
            <div className="background-ellipse"></div>
        </section>
    )
}

export default SecurityOne




