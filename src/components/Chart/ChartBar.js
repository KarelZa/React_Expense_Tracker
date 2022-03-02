import React from 'react';
import styles from './ChartBar.module.css';

export default function ChartBar(props) {
	let barFillHeight = '0%'; // for css height style

	if (props.maxValue > 0) {
		barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%'; // Calculation of the filling inside bar
	}

	return (
		<div className={styles['chart-bar']}>
			<div className={styles['chart-bar__inner']}>
				<div className={styles['chart-bar__fill']} style={{ height: barFillHeight }}></div>
			</div>
			<div className={styles['chart-bar__label']}>{props.label}</div>
		</div>
	);
}
