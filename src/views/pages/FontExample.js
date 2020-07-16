import React from 'react';
import View from 'views/atoms/View';

const fontType = [
	{
		name: 'notoBold',
		fontFamily: 'NotoSansKR-Bold',
	},
	{
		name: 'notoDemo',
		fontFamily: 'NotoSansKR-DemiLight',
	},
	{
		name: 'notoLight',
		fontFamily: 'NotoSansKR-Light',
	},
	{
		name: 'notoMedium',
		fontFamily: 'NotoSansKR-Medium',
	},
	{
		name: 'notoRegular',
		fontFamily: 'NotoSansKR-Regular',
	},
	{
		name: 'SCDream1',
		fontFamily: 'SCDream1',
	},
	{
		name: 'SCDream2',
		fontFamily: 'SCDream2',
	},
	{
		name: 'SCDream3',
		fontFamily: 'SCDream3',
	},
	{
		name: 'SCDream4',
		fontFamily: 'SCDream4',
	},
	{
		name: 'SCDream5',
		fontFamily: 'SCDream5',
	},
	{
		name: 'SCDream6',
		fontFamily: 'SCDream6',
	},
	{
		name: 'SCDream7',
		fontFamily: 'SCDream7',
	},
	{
		name: 'SCDream8',
		fontFamily: 'SCDream8',
	},
	{
		name: 'SCDream9',
		fontFamily: 'SCDream9',
	},
];
const FontExample = () => {
	console.log(styles.notoBold);
	return (
		<View style={styles.container}>
			<View style={styles.row}>
				{fontType.map((item, index) => {
					return (
						<View
							key={toString(index)}
							style={styles.fontBox}
						>
							<View
								style={Object.assign(
									styles.title,
									styles[item.name],
								)}
							>
								{item.fontFamily}
							</View>
							<View style={styles[item.name]}>
								한글 : 안녕하세요, 폰트
								예시입니다.
							</View>
							<View style={styles[item.name]}>
								English : hello, this is example
							</View>
						</View>
					);
				})}
			</View>
		</View>
	);
};

export default FontExample;

const styles = {
	container: {
		width: '100%',
		height: '100%',
	},
	row: {
		flexDirection: 'row',
		width: '100%',
		flexWrap: 'wrap',
	},
	column: {
		flexDirection: 'column',
	},
	title: {
		color: 'red',
		marginBottom: 15,
	},
	fontBox: {
		margin: 20,
		padding: 20,
		border: '10px solid black',
		width: 300,
	},
	notoBold: {
		fontFamily: 'NotoSansKR-Bold',
	},
	notoDemo: {
		fontFamily: 'NotoSansKR-DemiLight',
	},
	notoLight: {
		fontFamily: 'NotoSansKR-Light',
	},
	notoMedium: {
		fontFamily: 'NotoSansKR-Medium',
	},
	notoRegular: {
		fontFamily: 'NotoSansKR-Regular',
	},
	SCDream1: {
		fontFamily: 'SCDream1',
	},
	SCDream2: {
		fontFamily: 'SCDream2',
	},
	SCDream3: {
		fontFamily: 'SCDream3',
	},
	SCDream4: {
		fontFamily: 'SCDream4',
	},
	SCDream5: {
		fontFamily: 'SCDream5',
	},
	SCDream6: {
		fontFamily: 'SCDream6',
	},
	SCDream7: {
		fontFamily: 'SCDream7',
	},
	SCDream8: {
		fontFamily: 'SCDream8',
	},
	SCDream9: {
		fontFamily: 'SCDream9',
	},
};
