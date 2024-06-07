import React from 'react'
function Book() {
  return (
    <>
     {/* <!-- first part start --> */}
    <div className="container-fluid back">
        <div className="row">
            <div className="col-md-7 mt-5 mb-5">
                <center className="mt-5">
                    <img src="image/5.webp" alt="" className="ca" />
                </center>
            </div>
            <div className="col-md-5 mt-5 mb-5">
                <center className="mt-5">
                    <h1 className="mt-5">BOOK NOW</h1>
                    <button className="mt-3 btn btn-warning shadow-lg text-light ca">BOOK NOW !</button>
                </center>
            </div>
        </div>
    </div>
    {/* <!-- first part end --> */}

    {/* <!-- second part start --> */}
    <div className="container mt-5">
        <h1 className="text-center alg">Special <span className='alg1'>Holiday Packages</span></h1>

        <div className="row mt-5">
            <div className="col-md-3">
                {/* <!--first col start--> */}
                <div className="card ca">
                    <center>
                        <img src="image/7.webp" alt="" className="w-100" />
                        <h5 className="mt-3">Mumbai Packages</h5>
                        <b className='alg2'><del className='alg3'>₹30,500 &nbsp;</del>
                            ₹28,999</b><br/>
                        <button className="btn btn-dark shadow-lg mt-2 mb-4 but">Book Now</button>
                    </center>
                </div>
            </div>
            <div className="col-md-3 c"> 
            {/* <!--secondcol start--> */}
                <div className="card ca">
                    <center>
                        <img src="image/8.webp" alt="" className="w-100" />
                        <h5 className="mt-3">Hyderabad Packages</h5>
                        <b className='alg2'><del className='alg3'>₹35,000 &nbsp;</del>
                            ₹32,999</b><br/>
                        <button className="btn btn-dark shadow-lg mt-2 mb-4 but">Book Now</button>
                    </center>
                </div>
            </div>
            <div className="col-md-3 c">
                {/* <!--third col start--> */}
                <div className="card ca">
                    <center>
                        <img src="image/9.jpg" alt="" className="w-100" style={{height:'194'}} />
                        <h5 className="mt-3">Goa Packages</h5>
                        <b className='alg2'><del className='alg3'>₹29,500 &nbsp;</del>
                            ₹27,999</b><br/>
                        <button className="btn btn-dark shadow-lg mt-2 mb-4 but">Book Now</button>
                    </center>
                </div>
            </div>
            <div className="col-md-3 c">
                {/* <!--fourth col start--> */}
                <div className="card ca">
                    <center>
                        <img src="image/10.avif" alt="" className="w-100" style={{height: '194'}} />
                        <h5 className="mt-3">Lucknow Packages</h5>
                        <b className='alg2'><del className='alg3'>₹40,000 &nbsp;</del>
                            ₹37,999</b><br/>
                        <button className="btn btn-dark shadow-lg mt-2 mb-4 but">Book Now</button>
                    </center>
                </div>
            </div>
        </div>
    </div>
    {/* <!-- second part end --> */}

    {/* <!-- third part start --> */}
    <div className="container mt-5 heading">
        <h1 className='alg4'>
        <span>B</span>
        <span>O</span>
        <span>O</span>
        <span>K</span>&nbsp;&nbsp;
        <span>N</span>
        <span>O</span>
        <span>W</span>
    </h1>
        <h4 className="text-center mt-3">For More Information Please Enter Your Details After that We will Contact You As
            Soon As Possible.</h4>
        <div className="row">
            <div className="col-md-6 mt-5">
                {/* <!--first col start--> */}
                <div className="card">
                    <div className="card-body">
                        <form>
                            {/* <!--form start--> */}
                            <div className="form-group">
                                {/* <!--first div--> */}
                                <label>Name:</label>
                                <input type="text" placeholder="Your Name" className="form-control mt-2" required/>
                            </div>
                            <div className="form-group mt-2">
                                {/* <!--second div--> */}
                                <label>Rooms:</label>
                                <input type="number" placeholder="Number of Rooms" className="form-control mt-2" required/>
                            </div>
                            <div className="form-group mt-2">
                                {/* <!--third div--> */}
                                <label>Check IN:</label>
                                <input type="date" placeholder="Date of Check In" className="form-control mt-2" required/>
                            </div>
                            <div className="form-group mt-2">
                                {/* <!--fourth div--> */}
                                <label>Check Out:</label>
                                <input type="date" placeholder="Date of Check Out" className="form-control mt-2" required/>
                            </div>
                            <div className="form-group mt-2">
                                {/* <!--fourth div--> */}
                                <label>Aadhar:</label>
                                <input type="number" placeholder="Aadhar number" className="form-control mt-2" required/>
                            </div>
                            <center>
                                <button className="btn btn-dark shadow-lg mt-4 butt">Book Now</button>
                            </center>
                        </form>
                        {/* <!--form end--> */}
                    </div>
                </div>
            </div>
            <div className="col-md-6">
                {/* <!--second col start--> */}
                <img src="image/11.jpg" alt="" className="w-100"/>
            </div>
        </div>
    </div>
    {/* <!-- third part end --> */}
    </>
  )
}

export default Book