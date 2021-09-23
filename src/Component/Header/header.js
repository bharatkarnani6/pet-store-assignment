import react from "react";
import './header.css'

export default function Headers() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <img src="https://cdn.shopify.com/s/files/1/0531/2475/9744/files/logo.svg?v=1625484606" alt="" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav mainmenu ">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">PRODUCTS</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">CONTACT US</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="#">BLOG</a>
                            </li>
                        </ul>
                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav cartmenu">
                            <li style={{ 'cursor': 'pointer' }} className="nav-item">
                                <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                            </li>
                            <li style={{ 'cursor': 'pointer' }} className="nav-item">
                                <i class="fa fa-shopping-cart fa-2x" aria-hidden="true"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}