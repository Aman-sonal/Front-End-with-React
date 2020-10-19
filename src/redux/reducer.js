import  DISHES   from '../shared/dishes';
import COMMENTS from '../shared/comment';
import PROMOTIONS from '../shared/promotion';
import LEADERS from '../shared/leader';

export const initialState  = {
        dishes:DISHES,
      comnt: COMMENTS,
      leaders:LEADERS,
      promotions: PROMOTIONS,
};

export const Reducer= (state, action) => {
    return state;
}; 