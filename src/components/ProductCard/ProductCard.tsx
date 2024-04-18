import { ProductCardProps } from './ProductCard.props';
import styles from './ProductCard.module.css';
import { Link } from 'react-router-dom';


export default function ProductCard({ imgSource, price, rating, cardHeading, cardDescription, ...props}: ProductCardProps) {

	return (
		<Link to={`/product/${props.id}`} className={styles['link']}>
			<div className={styles['card']}>
				<div className={styles['header']} style={{ backgroundImage: `url('${imgSource}')` }}>
					<div className={styles['price']}> { price } <span className={styles['currency']}>₽</span></div>
					<button className={styles['to-cart']}>
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