import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import side1 from '../../../assets/home/slide1.jpg';
import side2 from '../../../assets/home/slide2.jpg';
import side3 from '../../../assets/home/slide3.jpg';
import side4 from '../../../assets/home/slide4.jpg';
import side5 from '../../../assets/home/slide5.jpg';
import SectionTitle from '../../../components/section/SectionTitle';

const Category = () => {
    return (
       <section>
        <SectionTitle subHeader={"From 11:00am to 10:00pm"} header={'ORDER ONLINE'}></SectionTitle>
         <Swiper
            slidesPerView={4}
            spaceBetween={30}
            centeredSlides={true}
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper mb-24"
        >
            <SwiperSlide>
                <img src={side1} alt="" />
                <h3 className='text-white text-4xl uppercase text-center -mt-16 shadow-2xl'>Salads</h3>
            </SwiperSlide>
            <SwiperSlide>
                <img src={side2} alt="" />
                <h3 className='text-white text-4xl uppercase text-center -mt-16 shadow-2xl'>Pizzas</h3>
            </SwiperSlide>
            <SwiperSlide><img src={side3} alt="" />
            <h3 className='text-white text-4xl uppercase text-center -mt-16 shadow-2xl'>Soups</h3>
            </SwiperSlide>
            <SwiperSlide><img src={side4} alt="" />
            <h3 className='text-white text-4xl uppercase text-center -mt-16 shadow-2xl'>Desserts</h3>
            </SwiperSlide>
            <SwiperSlide><img src={side5} alt="" />
            <h3 className='text-white text-4xl uppercase text-center -mt-16 shadow-2xl'>Salads</h3>
            </SwiperSlide>
            
        </Swiper>
       </section>
    )
}

export default Category
