import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ContactModal from "../homepage/ContactModal";
const localizer = momentLocalizer(moment);

const CalendarSection = (props: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<{
    start: Date;
    end: Date;
  }>({
    start: new Date(),
    end: new Date(),
  });
  const events = [
    {
      id: 0,
      title: "Study Group Session 1",
      start: moment().startOf("week").add(2, "days").add(10, "hours").toDate(),
      end: moment().startOf("week").add(2, "days").add(12, "hours").toDate(),
      color: "#588577",
    },
    {
      id: 1,
      title: "Study Group Session 2",
      start: moment().startOf("week").add(4, "days").add(15, "hours").toDate(),
      end: moment().startOf("week").add(4, "days").add(17, "hours").toDate(),
      color: "#588577",
    },
    {
      id: 2,
      title: "Particular Study Session",
      start: moment().startOf("week").add(3, "days").add(14, "hours").toDate(),
      end: moment().startOf("week").add(3, "days").add(16, "hours").toDate(),
      color: "#588577",
    },
  ];

  const eventStyleGetter = (
    event: any,
    start: Date,
    end: Date,
    isSelected: boolean
  ) => {
    let backgroundColor = event.color;
    let style = {
      backgroundColor: backgroundColor,
      borderRadius: "0px",
      opacity: 0.8,
      color: "black",
      border: "0px",
      display: "block",
    };
    return {
      style: style,
    };
  };

  return (
    <>
      <div style={{ height: "500px" }}>
        <Calendar
          onSelectSlot={(slotInfo) => {
            setIsModalOpen(true);
            setSelectedTimeSlot({ start: slotInfo.start, end: slotInfo.end });
          }}
          selectable={true}
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          views={["month", "week", "day"]}
          eventPropGetter={eventStyleGetter}
        />
      </div>
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedSlot={selectedTimeSlot}
      />
    </>
  );
};

export default CalendarSection;
