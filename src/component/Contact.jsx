/* eslint-disable no-unused-vars */
import React from 'react'

function Contact() {
  return (
    <>
     {/* <!-- banner start --> */}
    <div className="abc">
    </div>
    {/* <!-- banner start --> */}


    {/* <!-- first part start --> */}
    <div className="container mt-5 heading1">
        <h1 className='alg4'>
            <span>C</span>
            <span>O</span>
            <span>N</span>
            <span>T</span>
            <span>A</span>
            <span>C</span>
            <span>T</span>&nbsp;
            <span className="heading1t">U</span>
            <span className="heading1t">S</span>
        </h1>
    </div>
    {/* <!-- first part end --> */}


    {/* <!-- second part start --> */}
    <div className="container">
        <div className="row">
            <div className="col-md-6 mt-5">
                {/* <!--first col start--> */}
                <center>
                    <img src="image/22.png" alt="" className="amg ca" />
                </center>
            </div>
            {/* <!--first col end--> */}
            <div className="col-md-6">
                {/* <!--second col start--> */}
               <div className="abcd">
                <form>
                    <div className="inputbox">
                        <input type="text" placeholder="Name" className="form-control" required />
                        <input type="email" placeholder="Email" className="form-control mt-3" required />
                    </div>
                    <div className="inputbox">
                        <input type="number" placeholder="Number" className="form-control mt-3" required />
                        <input type="text" placeholder="Subject" className="form-control mt-3" required />
                    </div>
                    <textarea placeholder="Message" name className="form-control mt-3" required></textarea>
                    <br/>
                    <input type="submit" className="mbtn" value="Send Message" required />
                </form>
               </div>
            </div>
            {/* <!--second col end--> */}
        </div>
    </div>
    {/* <!-- second part end --> */}


    </>
  )
}

export default Contact