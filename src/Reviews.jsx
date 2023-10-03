import { useState } from 'react';
import reviews from './data';
import { BiSolidQuoteAltRight } from 'react-icons/bi';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const Reviews = () => {
  const [index, setIndex] = useState(0);
  //auto fetch the data
  const { name, job, image, text } = reviews[index];
  //let index = 1;
  const handleForward = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex + 1;
      if (newIndex > reviews.length - 1) {
        return 0;
      }
      return newIndex;
    });
  };
  const handleBackward = () => {
    setIndex((currIndex) => {
      const newIndex = currIndex - 1;
      if (newIndex < 0) {
        return reviews.length - 1;
      }
      return newIndex;
    });
  };

  const handleSuprise = () => {
    const randIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randIndex);
  };

  return (
    <main className='container'>
      <section className='review-container'>
        <section className='img-container'>
          <img src={image} alt={name} />
          <h1 className=''>
            <BiSolidQuoteAltRight className='text-xl text-white' />
          </h1>
        </section>
        {/* title container */}
        <section className='title-container mb-[10px]'>
          <h1>{name}</h1>
          <h3>{job}</h3>
        </section>
        {/* p */}
        <p className='mb-[10px]'>{text}</p>
        {/* Arrow container */}
        <section className='arrow-container mb-[10px]'>
          <AiOutlineLeft className='arrow backward ' onClick={handleBackward} />
          <AiOutlineRight className='arrow forward' onClick={handleForward} />
        </section>
        {/* button */}
        <button onClick={handleSuprise}>Surprise Me</button>
      </section>
    </main>
  );
};
export default Reviews;
