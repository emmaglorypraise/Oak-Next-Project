// import dynamic from 'next/dynamic'
// import { useEffect, useState } from 'react'
// import '../styles/calendar.scss'
// let CalendarComponent

// const FullCalendar = (props) => {
//   const [calendarLoaded, setCalendarLoaded] = useState(false)
//   useEffect(() => {
//     CalendarComponent = dynamic({
//       modules: () => ({
//         calendar: import('@fullcalendar/react'),
//         dayGridPlugin: import('@fullcalendar/daygrid'),
//         timeGridPlugin: import('@fullcalendar/timegrid')
//       }),
//       render: (props, { calendar: Calendar, ...plugins }) => (
//         <Calendar {...props} plugins={Object.values(plugins)} ref={props.myRef} />
//       ),
//       ssr: false
//     })
//     setCalendarLoaded(true)
//   })
//   let showCalendar = (props) => {
//     if ( !calendarLoaded ) return <div>Loading ...</div>
//     return (
//       <CalendarComponent {...props} />
//     )
//   }
//   return (
//     <div>
//       {showCalendar(props)}
//     </div>
//   )
// }

// export default FullCalendar()

import FullCalendar from "@fullcalendar/react";
// import interactionPlugin from "@fullcalendar/interaction";
// import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from '@fullcalendar/daygrid'
// import { useRef } from "react";

const MainCalendar = () => {
  // const calendarRef = useRef(null);
  return (
    <FullCalendar
    viewClassNames='p-8'
      // innerRef={calendarRef}
      // plugins={[ interactionPlugin, timeGridPlugin]}
      plugins={[ dayGridPlugin ]}
      initialView="dayGridMonth"
      // editable
      // selectable
    />
  );
};

export default MainCalendar;