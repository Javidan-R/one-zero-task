// CategoryTabs.js
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectCategory } from '../features/productSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import '../styles/components/category-tabs.scss';

const CategoryTabs = () => {
	const dispatch = useDispatch();
	const categories = useSelector((state) => state.product.categories);
	const selectedCategoryId = useSelector(
		(state) => state.product.selectedCategoryId,
	);

	const handleClick = (id) => {
		dispatch(selectCategory(id));
	};

	return (
		<div className="category-tabs">
			<Swiper
				spaceBetween={30}
				slidesPerView="auto"
				breakpoints={{
					640: { slidesPerView: 3 },
					768: { slidesPerView: 6 },
					1024: { slidesPerView: 10 },
				}}
			>
				<SwiperSlide>
					<button
						className={`tab ${selectedCategoryId === null ? 'active' : ''}`}
						onClick={() => handleClick(null)}
					>
						All
					</button>
				</SwiperSlide>
				{categories.map((category) => (
					<SwiperSlide key={category.id}>
						<button
							className={`tab ${
								selectedCategoryId === category.id ? 'active' : ''
							}`}
							onClick={() => handleClick(category.id)}
						>
							{category.name[0].value}
						</button>
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default CategoryTabs;
