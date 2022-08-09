window.addEventListener("DOMContentLoaded", (event) => {
  const segmentOne = new SevenSegment(document.getElementById("hours0"));
  const segmentTwo = new SevenSegment(document.getElementById("hours1"));
  const segmentThree = new SevenSegment(document.getElementById("minutes0"));
  const segmentFour = new SevenSegment(document.getElementById("minutes1"));
  const segmentFive = new SevenSegment(document.getElementById("seconds0"));
  const segmentSix = new SevenSegment(document.getElementById("seconds1"));

  function showOnSegments(segmentClass, counter) {
    segmentClass.set(0, counter != 1 && counter != 4);
    segmentClass.set(1, counter != 5 && counter != 6);
    segmentClass.set(2, counter != 2);
    segmentClass.set(3, counter != 4 && counter != 1 && counter != 7);
    segmentClass.set(
      4,
      counter != 1 &&
        counter != 3 &&
        counter != 4 &&
        counter != 5 &&
        counter != 7 &&
        counter != 9
    );
    segmentClass.set(
      5,
      counter != 1 && counter != 2 && counter != 3 && counter != 7
    );
    segmentClass.set(6, counter != 0 && counter != 1 && counter != 7);
  }

  function setTime(first, second, third, fourth, fifth, sixt) {
    showOnSegments(segmentOne, first);
    showOnSegments(segmentTwo, second);
    showOnSegments(segmentThree, third);
    showOnSegments(segmentFour, fourth);
    showOnSegments(segmentFive, fifth);
    showOnSegments(segmentSix, sixt);
  }

  setInterval(() => {
    let currentDate = new Date();
    let hour = String(currentDate.getHours()).padStart(2, "0");
    let minutes = String(currentDate.getMinutes()).padStart(2, "0");
    let seconds = String(currentDate.getSeconds()).padStart(2, "0");

    let cDay = String(currentDate.getDay()).padStart(2, "0");
    let cMonth = String(currentDate.getMonth()).padStart(2, "0");
    let cYear = String(currentDate.getFullYear()).padStart(4, "0");

    let hours = Array.from(hour, Number);
    let mins = Array.from(minutes, Number);
    let sec = Array.from(seconds, Number);

    let hour0 = hours[0];
    let hour1 = hours[1];
    let minute0 = mins[0];
    let minute1 = mins[1];
    let second0 = sec[0];
    let second1 = sec[1];

    

    setTime(hour0, hour1, minute0, minute1, second0, second1);
    console.log(seconds);
  }, 1000);
});
