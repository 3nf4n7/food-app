import { Await, useLoaderData, useNavigate } from 'react-router-dom';
import { Product as IProduct } from '../../interfaces/product.interface';
import { Suspense } from 'react';
import Heading from '../../components/Heading/Heading';
import Button from '../../components/Button/Button';
import styles from './Product.module.css';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store/store';
import { cartActions } from '../../store/cart.slice';

export default function Product() {
	const data = useLoaderData() as { data: IProduct};
	const navigate = useNavigate();
	const dispatch = useDispatch<AppDispatch>();

	const add = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>, id: number) =>  {
		e.preventDefault();
		dispatch(cartActions.add(id));
	};

	return <>
		<Suspense fallback={'Загружаем...'}>
			<Await
				resolve={data.data}    
			>
				{({ data }: { data: IProduct }) => (
					<div className={styles['product-wrap']}>
						<div className={styles['header']}>
							<button onClick={() => navigate('/')} className={styles['button-back']}><img src="/arrow-back.svg" alt="" /></button>
							<Heading>{ data.name }</Heading>
							<Button appearance='small' onClick={(e) => add(e, data.id)} className={styles['button-to-cart']}><img src="/cart-button-icon.svg" alt="Добавить в корзину" /> В корзину</Button>
						</div>
						<div className={styles['content']}>
							<div>
								<img src={data.image} alt="" />
							</div>
							<div className={styles['description']}>
								<div className={styles['line']}>
									<div className={styles['text']}>Цена</div>
									<div className={styles['price']}>{ data.price }&nbsp;<span>₽</span></div>
								</div>
								<hr  />
								<div className={styles['line']}>
									<div className={styles['text']}>Рейтинг</div>
									<div className={styles['rating']}>{ data.rating }&nbsp;<img src="/star.svg" alt="" /></div>
								</div>
								<div className={styles['ingredients']}>
									Состав
									<ul>
										{data.ingredients.map(i => <li>{i}</li>)}
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
			</Await>
		</Suspense>
	</>;
}