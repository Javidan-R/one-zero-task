import { fetchMenuData as fetchMenuAction } from '../features/productSlice';

export const fetchMenuData = () => (dispatch) => {
	dispatch(fetchMenuAction());
};
