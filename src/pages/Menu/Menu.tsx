import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import styles from './Menu.module.css';

export function Menu() {
	return <div className={styles['menu-wrapper']}>
		<div className={styles['menu-search-bar']}>
			<Heading>Меню</Heading>
			<Search placeholder='Введите блюдо или состав'></Search>
		</div>
	</div>;
}