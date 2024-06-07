import React from 'react'

function Service() {
  return (
    <>
     {/* <!-- banner start --> */}
    <div className="ban w-100">
        <center>
            <span>SERVICES</span>
        </center>
    </div>
    {/* <!-- banner end --> */}


    {/* <!-- first part start --> */}
    <div className="container mt-5 heading">
        <h1 className='alg4'>
            <span>S</span>
            <span>E</span>
            <span>R</span>
            <span>V</span>
            <span>I</span>
            <span>C</span>
            <span>E</span>
            <span>S</span>
        </h1>
    </div>
    {/* <!-- first part end --> */}


    {/* <!-- second part start --> */}
    <div className="container">
        <div className="row">
            <div className="col-md-6 c2">
                <center>
                    <i className="fas fa-hotel mt-5"></i>
                    <h1 className="mt-4">Affordable Rooms</h1>
                    <hr/>
                    <p>Room bookings across the world at economical prices whether you are traveling within India or
                        abroad and are looking for hotels, then we have got you covered.</p>
                </center>
            </div>
            <div className="col-md-6 c2">
                <center>
                    <i className="fas fa-utensils mt-5"></i>
                    <h1 className="mt-4">Food and Drinks</h1>
                    <hr/>
                    <p>Tour designed to introduce you to the history and traditions of a people through their food
                        culture.</p>
                </center>
            </div>
        </div>
    </div>
    {/* <!-- second part end --> */}


    {/* <!-- third part start --> */}
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6 c2">
                <center>
                    <i className="fas fa-bullhorn mt-5"></i>
                    <h1 className="mt-4">Safety Guide</h1>
                    <hr/>
                    <p>Safety plans form part of the quality and safety system of every company. Organised travel is
                        defined as tours and excursions which travel agencies and tour.</p>
                </center>
            </div>
            <div className="col-md-3"></div>
        </div>
    </div>
    {/* <!-- third part end --> */}

    </>
  )
}

export default Service