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
            { googleCalendarId: "c_e988bdab8ce67babc72a6341c73871d98f7caa87e21967d08dc60354351c8c86@group.calendar.google.com",
            location: 'Event Location 1',
            }
          }
      />
      </div>
    );
}
  
  export default CKCalendar;

  