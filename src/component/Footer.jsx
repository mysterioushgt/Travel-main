import React from 'react'

function Footer() {
  return (
    <>
    {/* <!--footer start--> */}
    <footer className="bg-dark w-100 mt-5">
        <div className="container">
            <div className="row">
                {/* <!--row start--> */}
                <div className="col-md-5 mt-5 mb-5">
                    {/* <!--first col start--> */}
                    <h5 className="a">Company Info</h5>
                    <p className="text-light mt-3 p">We're a team focusing on redefining the way the hospitality
                        industry
                        works by bringing in concept
                        based restaurants across India. We are truly committed to catering to the ever-changing
                        cosmopolitan taste of the customer and revolutioning the F & B industry!
                    </p>
                    <center>
                        <a href=""><img src="image/1.png" alt="" className="im mt-4"/></a>
                    </center>
                </div>
                {/* <!--first col end--> */}
                <div className="col-md-7 mt-5 mb-5">
                    {/* <!--second col start--> */}
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-4">
                                <center>
                                    <h5 className="a a1 mb-3">ABOUT</h5>
                                    <h5 className="da"><a className="b text-light" href="">Contact US</a></h5>
                                    <h5 className="da"><a className="b text-light" href="">About US</a></h5>
                                    <h5 className="da"><a className="b text-light" href="">Clear Trip</a></h5>
                                </center>
                            </div>
                            <div className="col-md-4">
                                <center>
                                    <h5 className="a a2 mb-3">HELP</h5>
                                    <h5 className="da"><a className="b text-light" href="">Payments</a></h5>
                                    <h5 className="da"><a className="b text-light" href="">Cancellation</a></h5>
                                    <h5 className="da"><a className="b text-light" href="">Policy</a></h5>
                                    <h5 className="da"><a className="b text-light" href="">FAQ</a></h5>
                                </center>
                            </div>
                            <div className="col-md-4">
                                <h5 className="a a3">SOCIAL</h5>
                                <center className="mt-4">
                                    <a href=""><i className="fa-brands fa-linkedin icon da"></i></a>&nbsp;&nbsp;
                                    <a href=""><i className="fa-brands fa-facebook icon da"></i></a>&nbsp;&nbsp;
                                    <a href=""><i className="fa-brands fa-instagram icon da"></i></a>&nbsp;&nbsp;
                                    <a href=""><i className="fa-brands fa-twitter icon da"></i></a>&nbsp;&nbsp;
                                </center>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!--second col end--> */}

                <hr className="text-light"/>
                <h5 className="text-light text-center">EMPLOYEE POLICIES |PRIVACY POLICY |TERMS AND CONDITIONS | BLOG |
                    APP</h5>
                <h5 className="text-light text-center mb-5">COPYRIGHT © 2021 PRIVATE LIMITED</h5>
            </div>
            {/* <!--row end--> */}
        </div>
    </footer>
    {/* <!--footer end--> */}
    </>
  )
}

export default Footer