import React from 'react';
import styles from './Chart.module.css';
import ChartBar from './ChartBar';

export default function Chart(props) {
	const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // Storing only values from dataPoints Array of objects
	const totalMax = Math.max(...dataPointValues); // Searching for the highest value

	return (
		<div className={styles.chart}>
			{props.dataPoints.map((dataPoint) => (
				<ChartBar key={dataPoint.label} value={dataPoint.value} maxValue={totalMax} label={dataPoint.label} />
			))}
		</div>
	);
}
