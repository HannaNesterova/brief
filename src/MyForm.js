
import { useForm, ValidationError } from '@formspree/react';
import LoaderPage from './Loader/LoaderPage';
import { useState } from 'react';


function MyForm() {
  const [state, handleSubmit] = useForm("xpzgvknq");
  const [stateLoader, setStateLoader] = useState(false)


  const loading = () => {
    setStateLoader(true);
    const timer = setTimeout(() => {
      setStateLoader(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  if (stateLoader && state.succeeded) {
    return <LoaderPage />;
  }

  if (state.succeeded) {
    return (
      <div className='cont-form'>
        <p className='form-submit'>Дякую, зовсім скоро я з вами зв'яжуся!</p>
      </div>
    );
  }


  
  return (
    <div>
    <form onSubmit={handleSubmit} className='container'>
  <h1>Бриф на створення сайту</h1>
  
  <div className='text-user'>
    <p>Опишіть основну ідею вашого сайту?</p>
    <textarea id="message" name="основну ідею ?" required />
    <ValidationError  prefix="Message" field="message" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Які основні завдання вашого сайту?</p>
    <textarea id="message1" name="основні завдання?" required />
    <ValidationError  prefix="Message1" field="message1" errors={state.errors} />
  </div>

  <div className='text-user'>
  <label htmlFor="layoutType">Якого типу сайт, ви бажаєте отримати?</label>
  <select id="layoutType" name="layoutType" required>
    <option value="landingPage">Односторінковий (Landing-page)</option>
    <option value="" disabled>Багатосторінковий</option>
  </select>
  <ValidationError prefix="layoutType" field="layoutType" errors={state.errors} />
</div>



  <div className='text-user'>
    <p> Орієнтовний бюджет?</p>
    <textarea id="message1" name="орієнтовний бюджет?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Яка цільова аудиторія вашого сайту?</p>
    <textarea id="message1" name="цільова аудиторія ?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Які матеріали є зараз для наповнення сайту (текст, фото , відгуки клієнтів)?</p>
    <textarea id="message1" name="наповнення сайту ?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='text-user'>
    <label htmlFor="layoutType">Який тип верстки сайту?</label>
    <select id="layoutType" name="тип верстки" required>
        <option value="mobileAndLaptop">Для мобільних застосунків та широкоформатних екранів (ноутбук)</option>
        <option value="mobileAndTablet">Для мобільних застосунків та планшетів</option>
        <option value="mobileLaptopAndTablet">Для мобільних застосунків,широкоформатних екранів та планшетів.</option>
    </select>
    <ValidationError prefix="layoutType" field="layoutType" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Які блоки плануються на сайті (наприклад «про мене»/послуги,ціни,відгуки)</p>
    <textarea id="message1" name="блоки?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Опишіть основну структуру сайту?</p>
    <textarea id="message1" name="структура?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='text-user'>
    <p>Покажіть мені декілька landing pages ,які вам подобаються(надайте посилання)</p>
    <textarea id="message1" name="сайти?" required />
    <ValidationError prefix="text" field="text1" errors={state.errors} />
  </div>

  <div className='formSubmit'>
    <div>
        <label htmlFor="text12">Вкажіть ваше ім'я </label>
        <input id="text12" type="text" name="userName" required  placeholder='Name...'/>
        <ValidationError prefix="text" field="text2" errors={state.errors} />
    </div>
    <div>
        <label htmlFor="email"> Вкажіть ваш E-mail </label>
        <input id="email" type="email" name="email" required placeholder='E-mail...'/>
        <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>

    <button
  type="submit"
  disabled={state.submitting}
  onClick={() => {
    setStateLoader(true);
    loading();
  }}
>
  ПОЛЕТІЛИ ⇧
</button>
  </div>
</form>
    </div>
  );
}

export default MyForm;