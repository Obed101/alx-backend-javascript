import classRoom from './0-classroom.js';

export default function initializeRooms() {
  const classroom1 = new classRoom(19);
  const classroom2 = new classRoom(20);
  const classroom3 = new classRoom(34);
  const classes = [classroom1, classroom1, classroom1];
  return classes;
}
