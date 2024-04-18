import { Await, useLoaderData } from 'react-router-dom';
import { Product as IProduct } from '../../interfaces/product.interface';
import { Suspense } from 'react';

export default function Product() {
	const data = useLoaderData() as { data: IProduct};

	return <>
		<Suspense fallback={'Загружаем...'}>
			<Await
				resolve={data.data}    
			>
				{({ data }: { data: IProduct }) => (
					<>product {data.name}   </>
				)}
			</Await>
		</Suspense>
	</>;
}