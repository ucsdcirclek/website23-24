import "./CKCalendar.css"
import FullCalendar from '@fullcalendar/react'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid'


function CKCalendar() {
    return (
      <div class = "ck-calendar">
        <FullCalendar
        aspectRatio={1.5}
        contentHeight={700}
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
  
  export default CKCalendar;