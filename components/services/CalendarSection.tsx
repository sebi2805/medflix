import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import ContactModal from "../homepage/ContactModal";
const localizer = momentLocalizer(moment);

export interface Event {
  id: string;
  title: string;
  start: Date;
  end: Date;
  color: string;
}

const generateEventsForMonth = (): Event[] => {
  const events = [];
  const now = new Date();
  const daysInMonth = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    0
  ).getDate();

  // Define the specific weekdays to include (0 = Sunday, 1 = Monday, etc.)
  const targetWeekdays = [1, 3, 5];

  for (let i = 1; i <= daysInMonth; i++) {
    const eventDate = new Date(now.getFullYear(), now.getMonth(), i);
    const dayOfWeek = eventDate.getDay();

    if (targetWeekdays.includes(dayOfWeek)) {
      events.push({
        id: `${i}`,
        title: `Grupa ${(i % 3) + 1}`,
        start: new Date(now.getFullYear(), now.getMonth(), i, 10),
        end: new Date(now.getFullYear(), now.getMonth(), i, 12),
        color: "#588577",
      });
    }
  }
  return events;
};

const CalendarSection = (props: any) => {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [selectedRange, setSelectedRange] = React.useState<
    | {
        start: Date;
        end: Date;
      }
    | undefined
  >(undefined);

  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setSelectedRange({ start: slotInfo.start, end: slotInfo.end });
    setIsModalOpen(true);
  };

  const handleModalConfirm = (event: Event) => {
    setEvents((prev) => [...prev, event]);
    setIsModalOpen(false);
  };
  const [events, setEvents] = React.useState<Event[]>([]);

  React.useEffect(() => {
    const defaultEvents = generateEventsForMonth();
    setEvents(defaultEvents);
  }, []);

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
          onSelectSlot={handleSelectSlot}
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
        selectedDateRange={selectedRange}
        onConfirm={handleModalConfirm}
      />
    </>
  );
};

export default CalendarSection;
