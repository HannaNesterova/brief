// import { useForm } from '@formspree/react';
// import './App.css';


// function MyForm() {
//   const [state, handleSubmit] = useForm('{your-form-id}');
//   if (state.succeeded) {
//     return <div>Thank you for signing up!</div>;
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//         <div className='container'>
//             <div>
//                 <h1> Бриф на розробку сайту </h1>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
//             <div>
//                 <h6>Опишіть в декількох словах ваш проект</h6>
//                 <p>Все,що може бути важливим для створення сайту</p>
//                 <input  type="text" name="text" />
//             </div>
      
//       <label htmlFor="email">Email</label>
//       <input id="email" type="email" name="email" />
//       <button type="submit" disabled={state.submitting}>Sign up</button>
//       </div>
//     </form>
//   )
// }

// export default MyForm;

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';


function MyForm() {
  const [state, handleSubmit] = useForm("xpzgvknq");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className='container'>
      <h1>Бриф на створення сайту</h1>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>
        <div  className='text-user'>
        <label htmlFor="text">
            Опишіть в декількох словах ваш проект
        </label>
        <textarea
                id="message"
                name="message"
            />
            <ValidationError 
                prefix="Message" 
                field="message"
                errors={state.errors}
            />
        </div>






        
        <div>
      <input
        id="text"
        type="text" 
        name="text"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
      </div>
    </form>
    </div>
  );
}

export default MyForm;