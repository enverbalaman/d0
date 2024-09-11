import React from 'react'
import MapComponent from './mapComponent'

const ContactInfo = () => {
    return (
        <div className="contact-area pages-style pt-100 pb-75">
            <div className="container">
                <div className='mb-4'>
                <MapComponent />

                </div>
                <div className="row justify-content-center" data-cues="fadeIn">
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-map-pin-line"></i>
                            </div>
                            <h3>Adres:</h3>
                            <p>İşçi Blokları, Muhsin Yazıcıoğlu Cd., 06530 Çankaya/Ankara</p>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-phone-line"></i>
                            </div>
                            <h3>İletişim Bilgileri:</h3>
                            <ul className="list-unstyled ps-0 mb-0">

                                <li>
                                    <a className="text-decoration-none" href="tel:+905317929045">+90 531 792 90 45</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="single-contact-card text-center">
                            <div className="icon">
                                <i className="ri-mail-open-line"></i>
                            </div>
                            <h3>Email:</h3>
                            <ul className="list-unstyled ps-0 mb-0">
                                <li>
                                    <a className="text-decoration-none" href="mailto:info@defendzero.com">info@defendzero.com</a>
                                </li>

                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo