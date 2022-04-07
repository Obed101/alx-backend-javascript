import classRoom from './0-classroom.js';

export default function initializeRooms() {
  const classes = [new classroom(19), new classroom(20), new classroom(34)];
  return classes;
}
