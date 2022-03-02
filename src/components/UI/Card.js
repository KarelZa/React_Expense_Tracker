import styles from './Card.module.css';

// Card Wrapper(container) component - that generalize css look for components that will be wrapped inside it
export default function Card(props) {
	const classes = styles['card'] + ' ' + props.className;
	return <div className={classes}>{props.children}</div>;
}
