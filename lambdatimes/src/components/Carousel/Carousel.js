import React, { Component } from 'react';
import { carouselData } from '../../data';
import styled from 'styled-components';
// Complete this Carousel

const CarouselS = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 500px;
	position: relative;
	overflow: hidden;
	margin-top: 16px;
	@media (min-width: 1200px) {
		width: 1200px;
	}
`;

const LeftButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	color: #fff;
	background-color: #333;
	font-size: 40px;
	border-radius: 50%;
	position: absolute;
	width: 50px;
	height: 50px;
	cursor: pointer;
	top: 50%;
	left: 25px;
	transform: translate(0, -50%);
	:hover {
		color: #333;
		background-color: #fff;
		border: 2px solid #333;
	}
`;

const RightButton = styled.div`
	display: flex;
	justify-content: center;
	align-items: none;
	flex-direction: row;
	color: #fff;
	background-color: #333;
	font-size: 40px;
	border-radius: 50%;
	position: absolute;
	width: 50px;
	height: 50px;
	cursor: pointer;
	top: 50%;
	right: 25px;
	transform: translate(0, -50%);
	:hover {
		color: #333;
		background-color: #fff;
		border: 2px solid #333;
	}
`;

export default class Carousel extends Component {
	constructor(props) {
		super(props);
		this.state = {
			images: [],
			currentIndex: 0,
			displayedImage: ''
		};
	}
	componentDidMount() {
		this.setState({
			images: carouselData,
			currentIndex: 0,
			displayedImage: carouselData[this.state.currentIndex]
		});
	}

	leftClick = () => {
		this.setState((previousState) => {
			if (previousState.currentIndex === 0) {
				return {
					currentIndex: previousState.images.length - 1,
					displayedImage: previousState.images[previousState.images.length - 1]
				};
			}
			return {
				currentIndex: previousState.currentIndex - 1,
				displayedImage: previousState.images[previousState.currentIndex - 1]
			};
		});
	};

	rightClick = () => {
		this.setState((previousState) => {
			if (previousState.currentIndex === previousState.images.length - 1) {
				return {
					currentIndex: 0,
					displayedImage: previousState.images[0]
				};
			}
			return {
				currentIndex: previousState.currentIndex + 1,
				displayedImage: previousState.images[previousState.currentIndex + 1]
			};
		});
	};

	selectedImage = () => {
		return <img src={this.state.displayedImage} style={{ display: 'block' }} />;
	};

	render() {
		return (
			<CarouselS>
				<LeftButton onClick={this.leftClick}>{'<'}</LeftButton>
				{this.selectedImage()}
				<RightButton onClick={this.rightClick}>{'>'}</RightButton>
			</CarouselS>
		);
	}
}
