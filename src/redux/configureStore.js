import { createStore, combineReducers } from 'redux';
import { DISHES } from './dishes';
import { Promtions } from './promtions';
import { Comments } from './comments';
import { Leaders} from './leaders';

export const ConfigureStore = () => {
  const store = createStore(
    combineReducers({
      dishes: Dishes,
      comments: Comments,
      promotions: Promtions,
      leaders: Leaders
    })
  );

  return store;
}
