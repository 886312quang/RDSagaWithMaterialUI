import { applyMiddleware, compose, createStore } from "redux";
import createSagaMidleware from "redux-saga";
import thunk from "redux-thunk";
import rootReducer from "./../reducers/index";
import rootSaga from "./../sagas/index";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window === "object" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        shouldHotReload: false,
      })
    : compose;
const sagaMidleware = createSagaMidleware();
const configureStore = () => {
  const middlewares = [thunk, sagaMidleware];
  const enhancers = [applyMiddleware(...middlewares)];
  const store = createStore(rootReducer, composeEnhancers(...enhancers));
  sagaMidleware.run(rootSaga);
  return store;
};

export default configureStore;
