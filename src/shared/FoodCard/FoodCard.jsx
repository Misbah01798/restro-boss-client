import React from 'react'

const FoodCard = ({item}) => {
    const {image, name, price, recipe} =item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="">
                <img src={image} alt="Shoes" className="" />
            </figure>
            <p className='bg-slate-900 text-white absolute mr-4 mt-4 right-0 rounded-lg p-2'>${price}</p>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                
                <p>{recipe}</p>
                <div className="card-actions">
                    <button className="btn shadow-inner border-b-4 btn-outline text-black text-xl font-bold border-yellow-200">Add To Cart</button>
                </div>
            </div>
        </div>
    )
}

export default FoodCard
