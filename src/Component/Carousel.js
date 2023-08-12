import React from 'react'
import '../index.css'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain  ! important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "14" }}>
            <form class="d-flex">
              <input class="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success bg-success text-white" type="submit">Search</button>
            </form>
          </div>
          <div className="carousel-item active">
            <img src="/image/burger.jpg" className="d-block w-100" alt="Burger" />

          </div>
          <div className="carousel-item">
            <img src="/image/pizza.jpg" className="d-block w-100" alt="Pizza" />

          </div>
          <div className="carousel-item">
            <img src="/image/momos.jpg" className="d-block w-100" alt="Momos" />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}
