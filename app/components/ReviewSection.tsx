import React from 'react'
import ReviewCard from './ReviewCard'

const ReviewSection = () => {
  return (
    <section className=' home_section grid justify-center items-center gap-2 clear-start py-[5rem] xl:py-[8rem]'>
        <p className=' text-secondary text-center'>Testimonials</p>
        <h1 className=' subheading text-center'>What Our Happy Clients Say</h1>

        {/* review slide */}
        <div className=' mt-10 flex gap-5'>
            <ReviewCard />
            <ReviewCard />
        </div>
    </section>
  )
}

export default ReviewSection