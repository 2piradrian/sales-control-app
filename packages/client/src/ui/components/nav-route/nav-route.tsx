import { NavLink } from 'react-router-dom';
import style from './style.module.css';

type Props = {
    name: string;
    route: string;
};

export default function NavRoute({ name, route }: Props) {
    return (
        <NavLink 
            to={route} 
            aria-label={name} 
            className={({isActive}) => 
                isActive ? 
                    `${style.active} ${style.route}` : 
                    `${style.inactive} ${style.route}`
            }
        >
            {name}
        </NavLink>
    );
};