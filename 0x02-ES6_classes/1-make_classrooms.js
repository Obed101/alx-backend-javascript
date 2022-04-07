import classRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [new classRoom(19), new classRoom(20), new classRoom(34)];
  return classes;
}
