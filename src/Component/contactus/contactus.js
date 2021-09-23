import react from "react";
import './contactus.css'
export default function ContactUs() {
    return (
        <>
            <div className='container-fluid'>
                <div className='contact-image'>
                    <div className='banner-content'>
                        <h4 className="banner-title">
                            <span>Subscribe Us</span>
                        </h4>
                        <h2 className="banner-heading">
                            <span>
                                Receive our latest updates about our products and promotions.</span>
                        </h2>
                        <div className="block-content ">
                            <form className="row g-3" >
                                <div className="col-auto">
                                    <label for="exampleFormControlInput1" className="visually-hidden">Email</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
                                </div>
                                <div className="col-auto">
                                    <button type="submit" className="btn btn-dark mb-3">SUBMIT</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}