import  {useState} from 'react';
import {useHistory} from 'react-router-dom';
import { routes } from './routes';

const useModal = () => {

    const [isShowing, setIsShowing] = useState(false);
    let history = useHistory();
    const redirecred = () => {history.push(routes.HOME)}
    const toggle = () => {setIsShowing(!isShowing);}
    return {
        isShowing,
        toggle,
        redirecred,
      }
};

export default useModal;
