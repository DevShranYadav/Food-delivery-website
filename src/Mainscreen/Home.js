import React,{useEffect,useState} from 'react'
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';
import Card from '../Component/Card';

export default function Home() {

      const [foodItem,setFoodItem]=useState([]);
      const [foodCat,setFoodCat]=useState([]);
      const [search,setSearch]=useState('')

      const comingData = async ()=>{
        var response= await fetch("http://localhost:5000/api/fooddata",{
            method:"POST",
            headers:{
                'Content-Type':"application/json"
            }           
        });
        response =await response.json();
        //console.log(response[0],response[1]);
        setFoodItem(response[0])
        setFoodCat(response[1])
        
        
    }

    useEffect (()=>{
        comingData();
    },[])

    return (
        <>
            <div><Navbar /></div>
            <div> <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain  ! important"}}>
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption" style={{ zIndex: "14" }}>
            <div class="d-flex justify-content-center">
              <input class="form-control me-2 bg-dark text-white" type="search" placeholder="Search" aria-label="Search" value={search}
               onChange={(e)=>{setSearch(e.target.value)}} />
              {/*<button class="btn btn-outline-success bg-success text-white" type="submit">Search</button>*/}
            </div>
          </div>
          <div className="carousel-item active">
            <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="Burger" />

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
      </div></div>
           <div className="container">
            {
                foodCat !==[]?
                foodCat.map((data)=>{
                    return (<div className='row mb-3'>
                        <div key={data.id} className='fs-1 m-3'>{data.CategoryName}</div>
                        
                        <hr />
                            {foodItem !==[]? foodItem.filter((item)=>
                                (item.CategoryName === data.CategoryName) && (item.name.toLowerCase().includes(search.toLowerCase()))
                            ).map(filterItems=>{
                                return(
                                <div key={filterItems._id} className='col-12 col-md-6 col-lg-3'>
                                     <Card foodItem={filterItems}
                                        Option={filterItems.options[0]}
                                      
                                     ></Card>
                                </div>
                                )
                            }):<div>No such Data found</div>}

                        </div>
                    )
                }):<div>'''''''''''''</div>
            }
           
            
            </div>
            <div><Footer /></div>
        </>
    )
}
