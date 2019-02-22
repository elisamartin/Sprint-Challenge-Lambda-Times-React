import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const CardContainer = styled.div`
	border-bottom: 1px solid lightgrey;
	display: flex;
	justify-content: space-between;
	align-items: none;
	flex-direction: column;
	background-color: #fff;
	width: 380px;
	margin-bottom: 16px;
	padding: 24px;
`;

const CardHeadline = styled.div`
	font-size: 25px;
	font-family: Didot, serif;
`;

const CardAuthor = styled.div`
	display: flex;
	justify-content: none;
	align-items: center;
	flex-direction: row;
	margin-top: 15px;
`;

const CardImgContainer = styled.div`
	padding-right: 10px;
	border-right: 1px solid lightgrey;
	height: 40px;
`;

const CardImg = styled.img`width: 40px;`;

const CardAuthorName = styled.span`
	padding-left: 10px;
	font-size: 12px;
	letter-spacing: 1px;
	font-weight: bold;
`;

const Card = (props) => {
	return (
		<CardContainer>
			<CardHeadline>{props.card.headline}</CardHeadline>
			<CardAuthor>
				<CardImgContainer>
					<CardImg src={props.card.img} />
				</CardImgContainer>
				<CardAuthorName>By {props.card.author}</CardAuthorName>
			</CardAuthor>
		</CardContainer>
	);
};

// Make sure to include PropTypes.
Card.propTypes = {
	card: PropTypes.shape({
		headline: PropTypes.string,
		tab: PropTypes.string,
		img: PropTypes.string,
		author: PropTypes.string
	})
};

export default Card;
