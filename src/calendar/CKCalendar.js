import "./CKCalendar.css"
import FullCalendar from '@fullcalendar/react'
import { Calendar } from '@fullcalendar/core'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'


function CKCalendar() {
    return (
      <div class = "calendar">
        <FullCalendar
        plugins={[dayGridPlugin, googleCalendarPlugin]}
        initialView='dayGridMonth'
        googleCalendarApiKey= "AIzaSyCzblwjGWGz2NJzQo_62A43dkd9r1wYYpM"
        events={
            { googleCalendarId: "en.usa#holiday@group.v.calendar.google.com"
            }
          }
      />
      </div>
    );
}

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  )
}
  
  export default CKCalendar;