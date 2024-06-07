import React from 'react'

function Signup() {
  return (
    <>
     <div className="container mt-5">
        <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
                <center>
                    <h1>Create an account</h1>
                </center>
                <div className="mt-5 alg6">
                    <div className="container">
                        {/* <!--container start--> */}
                        <form className="mt-5">
                            <div>
                                <input type="text" placeholder="Name" className="form-control" required />
                            </div>
                            <div className="mt-4">
                                <input type="email" placeholder="Email" className="form-control" required />
                            </div>
                            <div className="mt-4">
                                <input type="number" placeholder="Mobile" className="form-control" required />
                            </div>
                            <div className="mt-4">
                                <input type="password" placeholder="Password" className="form-control" required />
                            </div>
                            <center>
                                <input type="submit" placeholder="Create" value="Create"
                                    className="mt-4 mb-3 btn btn-warning shadow-lg text-light" />
                            </center>
                        </form>
                    </div>
                    {/* <!--container end--> */}
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Signup