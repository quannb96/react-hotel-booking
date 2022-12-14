import { all, fork } from "redux-saga/effects";
import { bookingHomeSaga } from "./bookingHome.saga";
import { fetchBookingIdSaga } from "./fetchBookingId.saga";
import { patchBookingStatusSaga } from "./patchStatusBooking.saga";
import { postBookingSaga } from "./postBooking.saga";
import { promoCodeSaga } from "./promoCode.saga";
import { roomHomeSaga } from "./room.saga";
import { RoomPaginationSaga } from "./roomPagination.saga";
import { userSaga } from "./user.saga";

export function* mySaga() {
  console.log("saga run");
  yield all([
    fork(userSaga),
    fork(roomHomeSaga),
    fork(bookingHomeSaga),
    fork(postBookingSaga),
    fork(promoCodeSaga),
    fork(fetchBookingIdSaga),
    fork(RoomPaginationSaga),
    fork(patchBookingStatusSaga),
  ]);
}
