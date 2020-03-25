import { AppInfoState } from './reducers/appInfo';
import { AppValueState } from './reducers/appValue';

export interface AppState {
    appValueState: AppValueState,
    appInfoState: AppInfoState,
}