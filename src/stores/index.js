import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { mySaga } from "./sagas";
import { bookingHomeReducer } from "./slices/bookingHome.slice";
import { fetchBookingIdReducer } from "./slices/fetchBookingId.slice";
import { patchBookingStatusReducer } from "./slices/patchStatusBooking.slice";
import { postBookingReducer } from "./slices/postBooking.slice";
import { promoCodeReducer } from "./slices/promoCode.slice";
import { roomHomeReducer } from "./slices/room.slice";
import { roomPaginationReducer } from "./slices/roomPagination.slice";
import { userReducer } from "./slices/user.slice";

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

const rootReducer = {
  user: userReducer,
  room: roomHomeReducer,
  booking: bookingHomeReducer,
  bookingInfo: postBookingReducer,
  promoCode: promoCodeReducer,
  fetchBookingId: fetchBookingIdReducer,
  roomPagination: roomPaginationReducer,
  patchBookingStatus: patchBookingStatusReducer,
};

export const appStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    ...middleware,
  ],
});

sagaMiddleware.run(mySaga);
