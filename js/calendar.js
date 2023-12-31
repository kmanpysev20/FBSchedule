(function () {
  $(function () {
    // calendar element 취득
    var calendarEl = $("#calendar")[0];
    // full-calendar 생성하기
    var calendar = new FullCalendar.Calendar(calendarEl, {
      height: "86vh", // calendar 높이 설정6
      expandRows: true, // 화면에 맞게 높이 재설정
      slotMinTime: "08:00", // Day 캘린더에서 시작 시간
      slotMaxTime: "20:00", // Day 캘린더에서 종료 시간
      // 해더에 표시할 툴바
      headerToolbar: {
        left: "prev,next today",
        center: "title",
        right: "dayGridMonth,listWeek",
        //   right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
      },
      initialView: "dayGridMonth", // 초기 로드 될때 보이는 캘린더 화면(기본 설정: 달)
      // initialDate: "2023-10-01", // 초기 날짜 설정 (설정하지 않으면 오늘 날짜가 보인다.)
      navLinks: true, // 날짜를 선택하면 Day 캘린더나 Week 캘린더로 링크
      editable: true, // 수정 가능?
      selectable: true, // 달력 일자 드래그 설정가능
      nowIndicator: true, // 현재 시간 마크
      dayMaxEvents: true, // 이벤트가 오버되면 높이 제한 (+ 몇 개식으로 표현)
      locale: "ko", // 한국어 설정
      eventAdd: function (obj) {
        // 이벤트가 추가되면 발생하는 이벤트
        console.log(obj);
      },
      eventChange: function (obj) {
        // 이벤트가 수정되면 발생하는 이벤트
        console.log(obj);
      },
      eventRemove: function (obj) {
        // 이벤트가 삭제되면 발생하는 이벤트
        console.log(obj);
      },
      select: function (arg) {
        // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
        var title = prompt("Event Title:");
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay,
          });
        }
        calendar.unselect();
      },
      // 이벤트
      events: [
        {
          title: "1.PSG 04시",
          start: "2023-08-13",
        },
        {
          title: "2.미튈란 21시",
          start: "2023-08-13",
        },
        {
          title: "3.TOT 22시",
          start: "2023-08-13",
        },
        {
          title: "1.뮌헨 03시30분",
          start: "2023-08-19",
        },
        {
          title: "1.TOT 01시30분",
          start: "2023-08-20",
        },
        {
          title: "2.PSG 22시",
          start: "2023-08-20",
        },
        {
          title: "1.미튈란 01시",
          start: "2023-08-21",
        },
        {
          title: "1.TOT 20시30분",
          start: "2023-08-26",
        },
        {
          title: "1.PSG 04시",
          start: "2023-08-27",
        },
        {
          title: "1.뮌헨 00시30분",
          start: "2023-08-28",
        },
        {
          title: "2.미튈란 01시",
          start: "2023-08-28",
        },
        {
          title: "1.TOT 23시",
          start: "2023-09-02",
        },
        {
          title: "1.뮌헨 01시30분",
          start: "2023-09-03",
        },
        {
          title: "1.미튈란 03시",
          start: "2023-09-04",
        },
        {
          title: "2.PSG 03시45분",
          start: "2023-09-04",
        },
        {
          title: "국대A매치",
          start: "2023-09-05",
          end: "2023-09-13",
        },
        {
          title: "1.미튈란 02시",
          start: "2023-09-16",
        },
        {
          title: "2.뮌헨 03시30분",
          start: "2023-09-16",
        },
        {
          title: "3.TOT 23시",
          start: "2023-09-16",
        },
        {
          title: "1.PSG 22시",
          start: "2023-09-17",
        },
        {
          title: "1.뮌헨 22시30분",
          start: "2023-09-23",
        },
        {
          title: "1.PSG 22시",
          start: "2023-09-24",
        },
        {
          title: "2.TOT 22시",
          start: "2023-09-24",
        },
        {
          title: "1.미튈란 01시",
          start: "2023-09-25",
        },
        {
          title: "1.미튈란 22시",
          start: "2023-09-30",
        },
        {
          title: "1.뮌헨 01시30분",
          start: "2023-10-01",
        },
        {
          title: "1.TOT 01시30분",
          start: "2023-10-01",
        },
        {
          title: "2.PSG 03시",
          start: "2023-10-01",
        },
        {
          title: "1.TOT 20시30분",
          start: "2023-10-07",
        },
        {
          title: "1.PSG 03시",
          start: "2023-10-08",
        },
        {
          title: "1.뮌헨 00시30분",
          start: "2023-10-09",
        },
        {
          title: "2.미튈란 01시",
          start: "2023-10-09",
        },
        {
          title: "국대A매치",
          start: "2023-10-10",
          end: "2023-10-18",
        },
        {
          title: "1.뮌헨 01시30분",
          start: "2023-10-22",
        },
        {
          title: "2.PSG 03시",
          start: "2023-10-22",
        },
        {
          title: "3.미튈란 22시",
          start: "2023-10-22",
        },
        {
          title: "1.TOT 04시",
          start: "2023-10-24",
        },
        {
          title: "1.TOT 04시",
          start: "2023-10-28",
        },
        {
          title: "2.뮌헨 22시30분",
          start: "2023-10-28",
        },
        {
          title: "1.PSG 03시",
          start: "2023-10-29",
        },
        {
          title: "2.미튈란 23시",
          start: "2023-10-29",
        },
      ],
    });
    // 캘린더 랜더링
    calendar.render();
  });
})();
