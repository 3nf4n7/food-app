import ProductCard from '../../../components/ProductCard/ProductCard';
import { MenuListProps } from './MenuList.props';
import styles from './MenuLIst.module.css';

export function MenuList({ products }: MenuListProps) {
	return (<div className={styles['wrapper']}> 
		{products.map(p => (
			<ProductCard 
				key={p.id}
				id={p.id}
				imgSource={p.image}
				price={p.price}
				rating={p.rating}
				cardHeading={p.name}
				cardDescription={p.ingredients.join(', ')}
			/>
		))}
	</div>);
}