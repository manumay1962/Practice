import React from 'react'

function Card() {
    const data=[{
        image:"https://images.pexels.com/photos/19679305/pexels-photo-19679305/free-photo-of-cardboard-doll-and-box.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2https://images.pexels.com/photos/4790268/pexels-photo-4790268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        name:"Amazon Basics",
        description:"Lorem ipsum dolor sit amet.",
        instock:true
    },
    {
    image:"https://images.pexels.com/photos/28452561/pexels-photo-28452561/free-photo-of-shopping-cart-in-basketball-court-outdoors.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name:"Daily Objects",
    description:"Click to get the daily objects",
    instock:true
},
{   image:"https://images.pexels.com/photos/214488/pexels-photo-214488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    name:"Samsung",
    description:"Samsung all accessories",
    instock:false
},
        
    ];
  return (
    <div className='w-full h-screen flex justify-center items-center gap-10 bg-red-200'>
      {data.map((val,index)=>
          <div className='w-52 bg-zinc-100 overflow-hidden rounded-md'>
          <div className='w-full h-32 bg-zinc-300 '>
              <img  className='w-full h-full object-cover ' src= {val.image} alt="" />
          </div>
          <div className='w-full px-3 py-4 '>
              <h2  className='font-semibold'>{val.name}</h2>
              <p className='text-xs mt-5'>{val.description}</p>
              <button className={` ${val.instock ?"bg-purple-600" :"bg-red-700"} text-white py-1  mt-3  px-4 rounded-md`}>{val.instock ?"In Stock" :"Out Of Stock"}</button>
          </div>
           </div>

  ) }   
    </div>
  )
}
export default Card
