import PropTypes from 'prop-types';
import React from "react";
import {
	BsStar,
	BsStarFill,
} from "react-icons/bs";

function RatingStars({ rating }) {
	const filledStars = Math.floor(rating);
	const partFilledStar = filledStars + 1;

	const starFilledWidth = (starIndex) => {
		if (starIndex + 1 <= filledStars) {
			return "100%";
		} else if (
			starIndex + 1 ===
			partFilledStar
		) {
			return `${Math.floor(
				(rating - filledStars) * 100
			)}%`;
		} else {
			return "0%";
		}
	};

	return (
		<div className="rating">
			{Array(5)
				.fill(0)
				.map((star, index) => (
					<div
						className="star"
						key={index}>
						<div
							className="starFull"
							style={{
								width: starFilledWidth(
									index
								),
							}}>
							<BsStarFill />
						</div>
						<div className="starEmpty">
							<BsStar />
						</div>
					</div>
				))}
		</div>
	);
}

// ✅ Add PropTypes validation
RatingStars.propTypes = {
	rating: PropTypes.number.isRequired,  // Ensure `rating` is a required number
};

export default RatingStars;