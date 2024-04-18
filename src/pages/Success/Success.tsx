import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './Success.module.css';

export function Success() {
	const navigate = useNavigate();

	return (
		<div className={styles['success']}>
			<img src="/pizza-success.png" alt="" />
			<div className={styles['text']}>Заказ оформлен!</div>
			<Button appearance="big" onClick={() => navigate('/')} >Сделать новый заказ</Button>
		</div>
	);
}