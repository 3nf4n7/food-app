import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import styles from './Layout.module.css';
import Button from '../../components/Button/Button';
import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store/store';
import { getProfile, userActions } from '../../store/user.slice';
import { useEffect, useState } from 'react';

export function Layout() {
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();
	const profile = useSelector((s: RootState) => s.user.profile);
	const items = useSelector((s: RootState) => s.cart.items);
	const [enableSidebar, setEnableSidebar] = useState(true);

	useEffect(() => {
		dispatch(getProfile());
	}, [dispatch]);

	const logout = () => {
		dispatch(userActions.logout());
		navigate('/auth/login');
	};

	const showSidebar = () => {
		setEnableSidebar(!enableSidebar);	
	};

	return (
		<div className={styles['layout']}>
			<button className={cn(styles['sidebar-icon'], {
				[styles['sidebar-icon-active']]: enableSidebar
			})} onClick={showSidebar}>
				<img src="/sidebar-icon.svg" alt="" />
			</button>
			<div className={cn(styles['sidebar'], {
				[styles['sidebar-active']]: enableSidebar
			})}>
				<div className={styles['user']}>
					<div className={styles.avatar}>
						<img src="/avatar.svg" alt="" />
					</div>
					<div className={styles['name']}>{ profile?.name }</div>
					<div className={styles.email}>{ profile?.email }</div>
				</div>
				<div className={styles['menu']}>
				
					<NavLink to='/' className={({isActive}) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/menu.svg" alt="" />	
						Меню
					</NavLink>
					<NavLink to='/cart'className={({ isActive }) => cn(styles['link'], {
						[styles.active]: isActive
					})}>
						<img src="/cart.svg" alt="" />
						Корзина 
						<span className={styles['cart-count']}>{items.reduce((acc, item) => acc += item.count, 0)}</span>
					</NavLink>
					
				</div>
				<Button className={styles['exit']} appearance='small' onClick={logout}>
					<img src="/exit.svg" alt="" />
					Выйти
				</Button>
			</div>
		
			<div className={styles['content']}>
				<Outlet />
			</div>
		</div>
	);
}