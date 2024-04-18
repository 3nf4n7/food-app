import styles from '../Login/Login.module.css';
import Heading from '../../components/Heading/Heading';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import { Link } from 'react-router-dom';

export function Register() {
	return <div className={styles['login']}>
		<Heading>Регистрация</Heading>
		<form className={styles['form']} onSubmit={() => {}}>
			<div className={styles['field']}>
				<label htmlFor="email">Ваш email</label>
				<Input id="email" name='email' placeholder='Email' />
			</div>
			<div className={styles['field']}>
				<label htmlFor="password">Ваш пароль</label>
				<Input id="password" name='password' type="password" placeholder='Пароль' />
			</div>
			<div className={styles['field']}>
				<label htmlFor="name">Ваше имя</label>
				<Input id="name" name='name' placeholder='Имя' />
			</div>
			<Button appearance="big">Зарегистрироваться</Button>
		</form>
		<div className={styles['links']}>
			<div>Есть акканут?</div>
			<Link to="/auth/login">Войти</Link>
		</div>
	</div>;
}