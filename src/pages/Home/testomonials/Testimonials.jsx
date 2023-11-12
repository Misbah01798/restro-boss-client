import { useEffect, useState } from "react"
import SectionTitle from "../../../components/section/SectionTitle"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import 'swiper/css';
import 'swiper/css/navigation';


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5001/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <section>
            <SectionTitle
                subHeader='What Our Client Say'
                header={'Testimonials'}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide key={review._id}>
                        <div className="flex flex-col items-center my-16 mx-24">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="my-8">{review.details}</p>
                            <h1 className="text-2xl text-orange-400">{review.name}</h1>
                        </div>

                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    )
}

export default Testimonials
