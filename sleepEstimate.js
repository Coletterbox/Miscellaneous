function sleepEstimate(currentTime, alarm) {
  var alarmArray = alarm.split(":");
  alarmArray[0] = parseInt(alarmArray[0], 10);
  alarmArray[1] = parseInt(alarmArray[1], 10);
  var sleepTimeArray = [];

  // find sleep time
  if (alarmArray[0] > 8 || alarmArray[0] === 8) {
    sleepTimeArray.push(alarmArray[0] - 8);
  }
  if (alarmArray[0] < 8) {
    sleepTimeArray.push(24 - (8 - alarmArray[0]));
  }
  sleepTimeArray.push(alarmArray[1]);

  // find difference between current time and alarm time
  var currentArray = currentTime.split(":");
  currentArray[0] = parseInt(currentArray[0], 10);
  currentArray[1] = parseInt(currentArray[1], 10);
  if ((alarmArray[0] + alarmArray[1]/60) < (currentArray[0] + currentArray[1]/60)) {
    var hoursLeft = alarmArray[0] + alarmArray[1]/60 + 24 - (currentArray[0] + currentArray[1]/60);
  } else {
    var hoursLeft = (alarmArray[0] + alarmArray[1]/60) - (currentArray[0] + currentArray[1]/60);
  }

  if (hoursLeft < 8) {
    return - 1;
  } else {
    return hoursLeft - 8;
  }
}
