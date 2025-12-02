import React from 'react'
import PropTypes from 'prop-types';
import testimonials from '../assets/fake-testimonial';

const PowCarousel_card = () => {
    const refTestimonial = testimonials;
    const Card = ({data}) => (
        <div className='flex flex-col  gap-3 border-1 border-stone-300 rounded-xl p-3'>
            <p>{data.message}</p>
            <div>{data.name}</div>
            <div>{data.title}</div>
        </div>
    )
  return (
        <div className='my-4'>
                {
                refTestimonial.map((data, i) => {
                    console.log(data.name, data.title, data.message);
                    return (
                        <div className='flex gap-4'key={i}>
                            <div>
                                <Card data={data}/>
                            </div>
                            <div>
                                <Card data={data}/>
                            </div>
                            <div>
                                <Card data={data}/>
                            </div>
                        </div>

                    );
                })
                }
        </div>
  )
}

export default PowCarousel_card;
