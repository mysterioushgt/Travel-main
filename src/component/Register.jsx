import React from 'react'

function Register() {
  return (
    <>
     {/* <!-- first part start --> */}
    <div className="container">
        <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                {/* <!--second col start--> */}
                <center>
                    <h1 className="mt-5">Log In / Sign up</h1>
                </center>
                <div className="mt-5 alg5">
                    <div className="container">
                        {/* <!--container start--> */}
                        <form className="mt-5">
                            <div>
                                <input type="text" placeholder="Username" className="form-control" required />
                            </div>
                            <div className="mt-4">
                                <input type="password" placeholder="Password" className="form-control" required />
                            </div>
                            <center>
                                <input type="submit" placeholder="submit" className="mt-4 mb-3 btn btn-warning text-light" />
                            </center>
                        </form>
                    </div>
                    {/* <!--container end--> */}
                </div>
                <center className="mt-3">
                    <span>OR</span>
                    <a href="/signup" class="ab">
                        <h4 class="mt-3">create an acoount</h4>
                    </a>
                </center>

            </div>
            {/* <!--second col end--> */}
            <div className="col-md-4"></div>
        </div>
    </div>
    {/* <!-- first part end --> */}

    </>
  )
}

export default Register