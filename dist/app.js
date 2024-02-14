document.addEventListener("DOMContentLoaded", function () {
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");
  const currentMonth = document.getElementById("currentMonth");
  const calendarBody = document.getElementById("calendarBody");
  const hamBurger = document.getElementById("hamBurger");
  const calendar = document.getElementById("calendar");
  const createEventButton = document.getElementById("createEventButton");
  const eventForm = document.getElementById("eventForm");
  const closeFormButton = document.getElementById("closeFormButton");

  let imgNum;

  // Event Form

  const addEvent = document.getElementById("addEvent");
  const eventDate = document.getElementById("eventDate");
  const eventTitle = document.getElementById("eventTitle");

  hamBurger.addEventListener("click", function () {
    if (calendar.style.display === "none") {
      calendar.style.display = "block";
    } else {
      calendar.style.display = "none";
    }
  });

  let currentDate = new Date();

  renderCalendar(currentDate);

  prevButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar(currentDate);
  });

  nextButton.addEventListener("click", function () {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar(currentDate);
  });

  createEventButton.addEventListener("click", function () {
    eventForm.classList.remove("hidden");
  });

  closeFormButton.addEventListener("click", function () {
    eventForm.classList.add("hidden");
  });

  // Adding the Form details to display
  addEvent.addEventListener("click", function (e) {
    e.preventDefault();

    const eventDiv = document.createElement("div");

    eventDiv.textContent = eventTitle.value + " : " + eventDate.value;

    // Styling the Event div
    eventDiv.style.backgroundColor = "#dadada";
    eventDiv.style.textAlign = "center";
    eventDiv.style.borderRadius = "5px";
    eventList.appendChild(eventDiv);

    //creating objects to store the data
    const eventData = {
      title: eventTitle.value,
      data: eventDate.value,
    };
  });

  function renderCalendar(date) {
    currentMonth.textContent = date.toLocaleString("default", {
      // second: "numeric",
      // minute: "numeric",
      // hour: "numeric",
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    calendarBody.innerHTML = "";

    const firstDayOfMonth = new Date(date.getFullYear(), date.getMonth(), 1);
    const lastDayOfMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    const startingDay = firstDayOfMonth.getDay();

    const today = new Date();

    for (let i = 0; i < startingDay; i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      calendarBody.appendChild(dayElement);
    }

    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      const dayElement = document.createElement("div");
      dayElement.classList.add("day");
      dayElement.textContent = i;

      //HighLight
      if (
        date.getFullYear() === today.getFullYear() &&
        date.getMonth() === today.getMonth() &&
        i === today.getDate()
      ) {
        dayElement.classList.add("today");
        imgNum = i;
        document.getElementById(
          "cal-img"
        ).src = `https://ssl.gstatic.com/calendar/images/dynamiclogo_2020q4/calendar_${imgNum}_2x.png`;
      }
      dayElement.addEventListener("mouseover", function () {
        if (i === today.getDate()) {
          dayElement.style.backgroundColor = "";
        } else {
          dayElement.style.backgroundColor = "#dadada";
        }
        dayElement.style.cursor = "pointer";
        dayElement.style.borderRadius = "50%";
      });
      dayElement.addEventListener("mouseout", function () {
        dayElement.style.backgroundColor = "";
      });

      calendarBody.appendChild(dayElement);
    }
  }
});
