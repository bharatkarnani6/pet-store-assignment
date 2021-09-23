import react from "react";
import './services.css';

export default function Services() {
    return (
        <>
            <div className="main-title mt-lg-5 mt-3">
                <h1 style={{ 'fontWeight': '700' }} className="text-center">Our Services</h1>
            </div>
            <div className='card-view mt-lg-5 mt-3'>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-12 col-sm-6 col-lg-4 ">
                            <div className="card">
                                <div className="card-front img-1"></div>
                                <div className="card-back">
                                    <h2>PET WALKING</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <div className="card-front img-2"></div>
                                <div className="card-back">
                                    <h2>PET CARE</h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-6 col-lg-4">
                            <div className="card">
                                <div className="card-front img-3"></div>
                                <div className="card-back">
                                    <h2>PET FOOD</h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}