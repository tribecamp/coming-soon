const countdown = document.getElementById('countdown');
const _launchDate = new Date('Fri Sep 06 2019 20:00:00 GMT+0200 (Central European Summer Time)');
const launchDate = moment(_launchDate);

function getCountdownFormat(hours, minutes, seconds, milliseconds) {
  return `${hours}:${minutes}:${seconds}.${milliseconds}`;
}

function refreshDate() {
  const now = moment();
  const diff = launchDate.diff(now);

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)) + days * 24;
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diff % (1000 * 60)) / 1000);
  const milliseconds = Math.floor((diff % (1000)));

  countdown.innerText = getCountdownFormat(
    hours.toString().padStart(2, '0'),
    minutes.toString().padStart(2, '0'),
    seconds.toString().padStart(2, '0'),
    milliseconds.toString().padStart(3, '0')
  );
}

setInterval(refreshDate, 45);
