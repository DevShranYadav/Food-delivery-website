import React, { useEffect, useRef, useState } from 'react'
import {useCart,useDispatchCart} from './ContextReducer';

export default function Card(props) {
    let dispatch=useDispatchCart();
    let data=useCart();
    const priceRef=useRef();
    const[qty,setQty]=useState(1);
    const[size,setSize]=useState('')
    let options=props.Option;
    let priceOption=Object.keys(options)

    const handleAddCard=async ()=>{

        let food=[]
        for(const item of data){
            if(item.id===props.foodItem._id){
                food=item;

                break;
            }
        }
        if(food !==[]){
            if(food.size===size){
                await dispatch({type:"UPDATE",id:props.foodItem._id,price:finalPrice,qty:qty})
                return
            }else if(food.size !== size){
                await dispatch({type:"ADD",id:props.foodItem._id,img:props.foodItem.img,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})
                return
            } 
            return
               }
            await dispatch({type:"ADD",id:props.foodItem._id,img:props.foodItem.img,name:props.foodItem.name,price:finalPrice,qty:qty,size:size})

       
    }
    let finalPrice=qty*parseInt(options[size]);

    useEffect(()=>{
        setSize(priceRef.current.value)
    },[])
  return (
    <div>
         <div>
                <div className="card mt-3" style={{ "width": "18rem", "maxHeight": "360px" }}>
                    <img className="card-img-top" src={props.foodItem.img} alt="...." style={{height:"120px",objectFit:"fill"}} />
                    <div className="card-body">
                        <h5 className="card-title">{props.foodItem.name}</h5>
                        
                        <div className='container w-100'>
                            <select className="m-2 h-100 bg-success rounded" onChange={(e)=>setQty(e.target.value)}>
                                {Array.from(Array(6), (e, i) => {
                                    return (
                                        <option key={i + 1} value={i + 1}>{i + 1}</option>
                                    )
                                })}
                            </select>
                            <select className="m-2 h-100 bg-success rounded" ref={priceRef}onChange={(e)=>setSize(e.target.value)}>
                               {priceOption.map((data)=>{
                                return(
                                    <option key={data} value={data}>{data}</option>
                                )
                               })}
                            </select>
                            <div className='d-inline h-100'>{finalPrice}/-</div>
                        </div>
                    </div>
                    <hr />
                    <button className={"btn btn-success ms-2"} onClick={handleAddCard}>Add Cart</button>
                </div>
            </div>
    </div>
  )
}
