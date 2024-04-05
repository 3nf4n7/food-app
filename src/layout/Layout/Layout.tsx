import { NavLink, Outlet } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';

export function Layout() {
	return (
		<div className={styles['layout']}>
			<div className={styles['sidebar']}>
				<div className={styles['user']}>
					<div className={styles.avatar}>
						<img src="public/avatar.svg" alt="" />
					</div>
					<div className={styles['name']}>chel</div>
					<div className={styles.email}>chel@gmail.com</div>
				</div>
				<div className={styles['menu']}>
				
					<NavLink to='/' className={({isActive}) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="public/menu.svg" alt="" />	
						Меню
					</NavLink>
					<NavLink to='/cart'className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="public/cart.svg" alt="" />
						Корзина
					</NavLink>
				</div>
				<Button className={styles.exit}>
					<img src="public/exit.svg" alt="" />
					Выйти
				</Button>
			</div>
		
			<div>
				<Outlet />
			</div>
		</div>
	);
}