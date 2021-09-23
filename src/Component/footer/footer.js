import react from "react";
import './footer.css'

export default function Footer() {
    return (
        <>
            <div className='footer-main'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col pt-lg-5 pt-3">
                            <div className='title'>
                                <span>About Pet Store</span>
                            </div>
                            <div className='sub-heading pt-lg-3 pt-2'>
                                <p>Our dreams are alike in terms of adorning our four-legged family. To take it further, we envision an approach that's paw-some in its own ways. Happiness, comfort & support, these are our royalties, our pillars on which we stand to be there for our pet's every need. We feel paw-sitive to be able to build a society for our pets and create the world a better place for them.</p>
                            </div>
                        </div>
                        <div className="col pt-lg-5 pt-3">
                            <div className='title d-flex justify-content-center'>
                                <span>Support</span>
                            </div>
                            <ul className="list-unstyled pt-lg-3 pt-2 ">
                                <li className="d-flex justify-content-center">FAQ</li>
                                <li className="d-flex justify-content-center">Contact Us</li>
                                <li className="d-flex justify-content-center">Return & Refund Policy</li>
                                <li className="d-flex justify-content-center">Shipping Information</li>
                                <li className="d-flex justify-content-center">Payment Options</li>
                            </ul>
                        </div>
                        <div className="col pt-lg-5 pt-3">
                            <div className='title d-flex justify-content-center'>
                                <span>Social Links</span>
                            </div>
                            <div className="list-unstyled pt-lg-3 pt-2" >
                                <ul style={{ 'cursor': 'pointer' }} className="hstack gap-3 list-unstyled d-flex justify-content-center">
                                    <li><i className="fa fa-facebook-square fa-2x " aria-hidden="true"></i></li>
                                    <li><i className="fa fa-instagram fa-2x" aria-hidden="true"></i></li>
                                    <li> <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-pinterest-square fa-2x" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-youtube-square fa-2x" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div className="developer-name d-flex justify-content-center">
                <p>Designed and Developed By Bharat Karnani</p>
            </div>
        </>
    );
}