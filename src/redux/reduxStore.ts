import { combineReducers, legacy_createStore } from "redux";
import { zoomlionReducer,ZoomlionReducerType } from "./zoomlionReducer";
import { JACReducer, JACReducerType } from "./JACReducer";
import { CompanyInfoReducer, CompanyInfoReducerType } from "./companyInfoReducer";

const rootReducer = combineReducers({
    forZoomlionData: zoomlionReducer as ZoomlionReducerType,
    forJACData: JACReducer as JACReducerType,
    forCompanyInfoData: CompanyInfoReducer as CompanyInfoReducerType,
})

const store = legacy_createStore(rootReducer)

type GlobalStateType = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch

export { store }
export type { GlobalStateType }
export type { AppDispatch }