import classRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [new classroom(19), new classroom(20), new classroom(34)];
  return classes;
}
