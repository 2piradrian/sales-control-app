import NavRoute from '../nav-route/nav-route';
import UserIcon from '../user-icon/user-icon';
import style from './style.module.css';

export default function Header() {
  return (
    <header className={`${style.container} container`}>
      <div className={`${style.delimiter} delimiter`}>
        <nav className={style.routesContainer}>
          <div className={style.routes}>
              <NavRoute name="Inicio" route="/" />
              <NavRoute name="Dashboard" route="/dashboard" />
              <NavRoute name="Productos" route="/products" />
              <NavRoute name="Categorias" route="/categories" />
              <NavRoute name="Ventas" route="/sales" />
              <NavRoute name="Usuarios" route="/users" />
          </div>
          <div className={style.user}>
              <UserIcon name="Adrián Rodriguez" />
          </div>
        </nav>
      </div>
    </header>
  );
}