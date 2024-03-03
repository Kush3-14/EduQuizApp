import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setUserId } from '../redux/result_reducer';
import '../styles/Main.css';

export default function Main() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  function startQuiz() {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  }

  useEffect(() => {
    // Trigger animation on mount
    const listItems = document.querySelectorAll('.fade-in');
    listItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add('active');
      }, index * 500); // Adjust the delay based on your preference
    });
  }, []);

  return (
    <div className='container'>
      <h1 className='title text-light'>Edu Quiz Game</h1>

      <ul className='fade-in-list'>
        <li className='fade-in'>🚀 Get ready for a space adventure with 20 awesome questions!</li>
        <li className='fade-in'>🌟 Earn 10 points for each correct answer.</li>
        <li className='fade-in'>🤔 Choose the best option from four cool choices.</li>
        <li className='fade-in'>🔄 Review and change your answers anytime during the quiz.</li>
        <li className='fade-in'>🎉 Exciting results await you at the end of the quiz!</li>
      </ul>

      <form id='form'>
        <input ref={inputRef} className='userid' type='text' placeholder='Username*' />
      </form>

      <div className='start'>
        <Link className='btn' to={'quiz'} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}
