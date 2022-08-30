# surge

npm i -g surge

npm run build

cd build

surge

<domain>
# at build folder: copy index.html to 200.html

# json-server

rooms change id:
old new
2 1
3 2
1 3
4 4
5 5

# filter dates

# options rooms - guests

# problem:

1. pagination.
2. bookingNumber (save data bookingInfoState local) \ error get data old not update new data

3. Cancel Booking \* ok \*
4. Collapse at admin tableData.js \* ok \* ok old
5. fetch data bookings again after post data bookingInfo to server. \* ok \* error because api not function
6. list user Booking History \*
7. fetch data bookings before loading MainBookingPage. \* ok
8. bookingNumber (update length booking) \* ok
9. sticky UI search \* ok
10. searchBar in HomePage \* ok
11. Select button RoomItem:

- Minus quantity room when onClick Select button, \* ok
- When quantity (Room === 0) ===> disable Select Button ===> SOLD OUT btn \* ok

8. Remove button RoomOrdered: \* ok

- Plus quantity room when onClick Remove button, \* ok

6. validate password register \* ok error of server
