import { Button, message } from 'antd';
import stringConverter from '../utils/string-converter';

const currentTime = () => {
  const time = new Date();
  const day = time.getDate() < 10 ? '0'+time.getDate() : time.getDate();
  const month = time.getMonth()+1;
  const year = time.getFullYear();
  const hour = time.getHours() < 10 ? '0'+time.getHours() : time.getHours();
  const minute = time.getMinutes() < 10 ? '0'+time.getMinutes() : time.getMinutes();
  const second = time.getSeconds() < 10 ? '0'+time.getSeconds() : time.getSeconds();
  const milSecond = time.getMilliseconds();
  return `${day}.${month}.${year}. ${hour}:${minute}:${second}.${milSecond}`;
}

export const DEFAULT_ERROR_MESSAGE = 'Something went wrong. Contact the site administrator'

message.config({
  maxCount: 5,
  duration: 8
});

const closeModalMessage = () => {
  message.destroy('modalMessage');
}

const modalMessage = (code, errorMessage) => {
  
  message.error(
    {
      key: 'modalMessage',
      content: (
        <div className='p-2'>
          <h5 className='font-semibold'>Something went wrong with the system. When contacting system support, indicate:</h5>
          <div className='text-left p-3 border my-2'>
            { code &&
            <p><span className='font-semibold'>Kods:</span> {code}</p>
            }
            { errorMessage &&
            <p><span className='font-semibold'>Title:</span> {errorMessage}</p>
            }
            <p><span className='font-semibold'>Time:</span> {currentTime()}</p>
          </div>
          <div className='text-left'>
            <Button onClick={closeModalMessage}>Close</Button>
          </div>
        </div>
      )
    }
  )
}

function useHandleError() {
  const { toSnake } = stringConverter();

  const handleError = (
    error,
    key,
    specialMessage,
    dontShowMessages,
  ) => {
    if (!dontShowMessages) {
      if (specialMessage) {
        modalMessage(error?.traceId, specialMessage);
      } else if (
        error.hasOwnProperty('error') &&
        typeof error.error === 'string'
      ) {
        modalMessage(error?.traceId, error.error);
      } else if (key) {
        Object.entries(error).forEach((entry) => {
          const convertedString = toSnake(entry[0]);
          modalMessage(error?.traceId, convertedString);
        });
      } else {
        const title = (error?.title || error?.message) ? (error.title || error.message) : DEFAULT_ERROR_MESSAGE;
        modalMessage(error?.traceId, title);
      }
    }

    document.body.scrollTop = document.documentElement.scrollTop = 0; // pure js scroll to top, supported in all browsers
    console.error(error);
  };

  return [handleError];
}

export default useHandleError;
