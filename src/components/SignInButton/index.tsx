import { faCoffee, faXmark} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import styles from './styles.module.scss';

export function SignInButton(){
    const isUserLoggedIn = true;

    return isUserLoggedIn ? 
    (
        <button type="button" className={styles.signInButton}> 
            <FontAwesomeIcon icon={faCoffee} color="#84d361"/>
            Davi Cardoso
            <FontAwesomeIcon icon={faXmark}  className={styles.closeIcon}color="#737380"/>
        </button>
    ) : 
    (  
        <button type="button" className={styles.signInButton}> 
            <FontAwesomeIcon icon={faCoffee} color="#eba417"/>
            Sign in with Github
        </button>
    )
}