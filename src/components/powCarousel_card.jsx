import React, {useState} from 'react'
import PropTypes from 'prop-types';
import testimonialsJson from '../assets/fake-testimonial';
import '@fontsource-variable/inter';
import fake_testimonials_webp from '../assets/fake-testimonials-webp';

const PowCarousel_card = () => {

    const [testimonialWithImages] = useState(() => {
            return testimonialsJson.map((testimonial, i) => ({
                    ...testimonial,
                    avatar: fake_testimonials_webp[i % fake_testimonials_webp.length],
            }))
    })

    const Card = ({data}) => (
        <div style={{ fontFamily: '"Inter Variable", sans-serif' }} className='flex flex-col  gap-1 border-1 border-stone-300 rounded-xl p-3 my-5 shadow-md'>
            <p>{`"${data.message}"`}</p>
            <div className='flex  '>
                <div>
                    <img src={data.avatar} />
                </div>
            <div>{data.name}</div>
            </div>
            <div>{data.title}</div>  
        </div>
    )
  return (
        <div className='my-4'>
                {
                testimonialWithImages.map((data, i) => {
                    console.log(data.name, data.title, data.message);
                    return (
                        <div className='flex gap-4'key={i}>
                            <div className='flex-1'>
                                <Card data={data} />
                            </div>
                            <div className='flex-1'>
                                <Card data={data}/>
                            </div>
                            <div className='flex-1'>
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



