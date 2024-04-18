import { ChangeEvent, useEffect, useState } from 'react';
import Heading from '../../components/Heading/Heading';
import Search from '../../components/Search/Search';
import { PREFIX } from '../../helpers/API';
import { Product } from '../../interfaces/product.interface';
import styles from './Menu.module.css';
import axios, { AxiosError } from 'axios';
import { MenuList } from './MenuList/MenuList';

export default function Menu() {
	const [products, setProducts] = useState<Product[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<string | undefined>();
	const [filter, setFilter] = useState<string>();

	useEffect(() => {
		getMenu(filter);
	}, [filter]);

	const updateFilter = (e: ChangeEvent<HTMLInputElement>) => {
		setFilter(e.target.value);
	};

	const getMenu= async (name?: string) => { 
		try {
			setIsLoading(true);
			const {data} = await axios.get<Product[]>(`${PREFIX}/products`, {
				params: {
					name
				}
			});
			setProducts(data);
			setIsLoading(false);
		} catch (e) {
			console.error(e);
			if (e instanceof AxiosError) {
				setError(e.message);
			}
			setIsLoading(false);
			return;
		}
	};


	return <div className={styles['menu-wrapper']}>
		<div className={styles['menu-search-bar']}>
			<Heading>Меню</Heading>
			<Search placeholder='Введите блюдо или состав' onChange={updateFilter}></Search>
			
		</div>
		<div>
			{error && <>{error}</>}
			{!isLoading && products.length > 0 &&  <MenuList products={products} />}
			{isLoading && <>Загружаем продукты...</>}
			{!isLoading && products.length === 0 &&  <>Не найдено блюд по запросу</> }
		</div>
		
	</div>;
}