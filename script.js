const clock = document.getElementById('clock');
const alarmTimeInput = document.getElementById('alarm-time');
const setAlarmButton = document.getElementById('set-alarm');

let alarmTime = null;

setInterval(function() {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();

  // Check if alarm time is set and matches current time
  if (alarmTime && date.getTime() >= alarmTime.getTime()) {
    // Trigger alarm sound or notification here
    alert('Alarm!');
    alarmTime = null; // Reset alarm time
  }
}, 1000);

setAlarmButton.addEventListener('click', function() {
  const alarmTimeValue = alarmTimeInput.value;
  if (alarmTimeValue) {
    const [hours, minutes] = alarmTimeValue.split(':');
    const now = new Date();
    alarmTime = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate(),
      parseInt(hours),
      parseInt(minutes)
    );
    alert(`Alarm set for ${alarmTime.toLocaleTimeString()}`);
  }
});