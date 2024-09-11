import React from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom'
import logo from "../../assets/images/d0.png"
import Subscribe from './subscribe'
import { slideUp } from '../../utlits/slideUp'
const Footer = () => {
  const footerLink = [
    {
      id: 1,
      name: "Bağlantılar",
      links: [
        {
          id: 1,
          link: "/about",
          label: "Hakkımızda"
        },
        {
          id: 2,
          link: "/services",
          label: "Hizmetler"
        },
        {
          id: 3,
          link: "/testimonial",
          label: "Referanslar"
        },
        {
          id: 4,
          link: "/blog-details",
          label: "Blog"
        },

      ]
    },
    {
      id: 2,
      name: "Resourses",
      links: [
        {
          id: 1,
          link: "/faq",
          label: "Sıkça Sorulan Sorular"
        },
        {
          id: 2,
          link: "/privacy-policy",
          label: "Privacy Policy"
        },
        {
          id: 3,
          link: "/terms-conditions",
          label: "Terms & Conditions"
        },
        {
          id: 4,
          link: "/contact",
          label: "contact Us"
        },

      ]
    },
  ]
  return (
    <footer>
      {/* <Subscribe /> */}
      {/* -------- footer info */}
      <div className="footer-area">
        <div className="container">
          <motion.div className="footer-info-area"
            initial="offscreen"
            whileInView="onscreen"
            variants={slideUp(1)}
            viewport={{ once: true, amount: 0.2 }}
          >
            <div className="row">
              <div className="col-lg-4">
                <div className="single-footer-info ms-0">
                  <Link className="text-decoration-none logo" to="/">
                    <img style={{ width: '100px' }} src={logo} alt="logo" />
                  </Link>
                  <p>DefendZero, yıllardır siber güvenlik alanında birçok farklı sektörde kapsamlı hizmetler sunmuştur. Finans, sağlık,
                    eğitim ve daha birçok sektörde kurumların güvenliğini sağlayarak onları olası tehditlere karşı koruma altına aldık.
                  </p>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="row justify-content-center">
                  <div className="col-lg-4 col-sm-6 col-md-4">
                    <div className="single-footer-info">
                      <h3>İletişim</h3>
                      <ul className="list-unstyled ps-0 mb-0">
                        <li>
                          <strong>Adres : </strong> İşçi Blokları, Muhsin Yazıcıoğlu Cd., 06530 Çankaya/Ankara
                        </li>
                        <li>
                          <strong>Email:</strong>
                          <a className="text-decoration-none" href="mailto:info@defendzero.com">info@defendzero.com</a>
                        </li>
                        <li>
                          <strong>Telefon:</strong>
                          <a className="text-decoration-none" href="tel:55472543526">+90-531-792-9045</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  {
                    footerLink.map(({ id, links, name }) => {
                      return (
                        <div key={id} className="col-lg-4 col-sm-6 col-md-4">
                          <div className="single-footer-info">
                            <h3>{name}</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                              {
                                links.map(({ id, label, link }) => {
                                  return (
                                    <li key={id}>
                                      <Link className="text-decoration-none" to={link}>{label}</Link>
                                    </li>
                                  )
                                })
                              }
                            </ul>
                          </div>
                        </div>
                      )
                    })
                  }

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      {/* ---------- copy right area */}
      <div className="copyright-area">
        <div className="container">
          
          <div className="copyright-content text-center" data-cue="slideInUp">
            <p>Copyright @ 2024 <strong>DefendZero</strong>, All Rights Reserved</p>
          </div>
          <div className="single-contact-info">
            <div className="contact-social">
              <ul className="list-unstyled ps-0 mb-0 list">
                <li className="d-inline-block">
                  <a className="text-decoration-none" target="_blank" href="https://www.facebook.com/">
                    <i className="ri-facebook-circle-line"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a className="text-decoration-none" target="_blank" href="https://twitter.com/">
                    <i className="ri-twitter-x-line"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a className="text-decoration-none" target="_blank" href="https://www.instagram.com/">
                    <i className="ri-instagram-line"></i>
                  </a>
                </li>
                <li className="d-inline-block">
                  <a className="text-decoration-none" target="_blank" href="https://www.pinterest.com/">
                    <i className="ri-pinterest-line"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer