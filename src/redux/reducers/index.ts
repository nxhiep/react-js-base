import { combineReducers } from "redux";
import { AppState } from '../appstate';
import appInfoState from "./appInfo";
import appValueState from "./appValue";

const rootReducer = combineReducers<AppState>({
    appValueState: appValueState,
    appInfoState: appInfoState,
});
export default rootReducer; 