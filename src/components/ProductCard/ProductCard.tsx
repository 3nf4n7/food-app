import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';
import { MouseEvent } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';


export default function ProductCard({ imgSource, price, rating, cardHeading, cardDescription, ...props}: ProductCardProps) {
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: MouseEvent) =>  {
		e.preventDefault();
		dispatch(cartActions.add(props.id));
	};

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['header']} style={{ backgroundImage: `url('${imgSource}')` }}>
					<div className={styles['price']}> { price } <span className={styles['currency']}>₽</span></div>
					<button className={styles['to-cart']} onClick={add}>
						<img src="/cart-button-icon.svg" alt="Добавить в корзину" />
					</button>
					<div className={styles['rating']}> { rating } <img src="star.svg" alt="" /></div>
				</div>
				<div className={styles['footer']}>
					<div className={styles['title']}> { cardHeading }</div>
					<div className={styles['description']}> { cardDescription }</div>
				</div>
			</div>
		</Link>
	);
}