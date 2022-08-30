import React, { useContext } from "react";
import "../style/room-list.scss";
import RoomItem from "./RoomItem";
import { CustomerContext } from "../../../providers/CustomerContext";

function RoomListOption({ option }) {
  const { availableRooms } = useContext(CustomerContext);

  let filterAvailableRooms = availableRooms.filter(
    (room) => room.maxPerson >= option.adult
  );

  return (
    <>
      <div className="rooms">
        {filterAvailableRooms.map((room) => (
          <div key={room.id} className="room">
            <RoomItem option={option} room={room} />
          </div>
        ))}
      </div>
    </>
  );
}

export default RoomListOption;
