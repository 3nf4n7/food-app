import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

function Button({ children, className, appearance, ...props }: ButtonProps) {
	return (
		<button {...props} className={cn(styles['button'], styles['accent'], className, {
			[styles['small']]: appearance === 'small',
			[styles['big']]: appearance === 'big'
		})}>{children}</button>
	);
}

export default Button;