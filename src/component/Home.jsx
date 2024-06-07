import React from 'react'

function Home() {
  return (
    <>
    {/* <!-- SLIDER START --> */}
    <div class="carousel slide" data-bs-ride="carousel" id="sl">
        <div class="carousel-indicators">
            {/* <!--indicator start--> */}
            <button type="button" data-bs-target="#sl" data-bs-slide-to="0" class="active"></button>
            <button type="button" data-bs-target="#sl" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#sl" data-bs-slide-to="2"></button>
        </div>
        {/* <!--indicator end--> */}
        <div class="carousel-inner">
            {/* <!--carousel-inner start--> */}
            <div class="carousel-item active" data-bs-interval="2000">
                <img src="image/i2.webp" alt="" class="w-100 s"/>
                <div class="carousel-caption">
                    <h1 class="s1">"Savoring the flavors that ignite my senses"</h1>
                </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="image/H1.webp" alt="" class="w-100 s"/>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
                <img src="image/h2.jpg" alt="" class="w-100 s"/>
            </div>
        </div>
        {/* <!--carousel-inner end--> */}
    </div>
    {/* <!-- SLIDER END --> */}


    {/* <!-- first part start --> */}
    <div class="container mt-5">
        <div class="row">
            <div class="col-md-5">
                {/* <!--first col start--> */}
                <center>
                    <div class="card c1 ca">
                        <a href=""><img src="image/2.avif" alt="" class="shadow-lg rounded im1"/></a>
                    </div>
                </center>
            </div>
            {/* <!--first col end--> */}
            <div class="col-md-7">
                {/* <!--second col start--> */}
                <center>
                    <h3 class="b1">We Provide the Best Quality Services Ever</h3>
                    <p class="b2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam quia praesentium
                        dolorem. Iure
                        doloremque amet quod facilis totam repellat, nesciunt ipsam reprehenderit blanditiis cumque ab
                        at exercitationem, nostrum expedita dicta.</p>
                    <button class="btn text-light btn-warning shadow-lg">Learn More</button>
                </center>
            </div>
            {/* <!--second col end--> */}
        </div>
    </div>
    {/* <!-- first part end -->*/}

    {/* <!-- about part start --> */}
    <div class="container-fluid banner mt-5 text-center">
        <div class="row">
            <div class="col-md-2"></div>
            <div class="col-md-8">
                <center>
                    <h1>ABOUT US</h1>
                    <p>A restaurant is a business that prepares and serves food and drinks to customers. Meals are
                        generally
                        served and eaten on the premises, but many restaurants also offer take-out and food delivery
                        services.
                        Restaurants vary greatly in appearance and offerings, including a wide variety of cuisines and
                        service
                        models ranging from inexpensive fast-food restaurants and cafeterias to mid-priced family
                        restaurants,
                        to high-priced luxury establishments.</p>

                    <button class="btn bt">Read More..</button>
                </center>
            </div>
            <div class="col-md-2"></div>
        </div>
    </div>
    {/* <!-- about part end --> */}


    </>
  )
}

export default Home