import classRoom from './0-classroom';

export default function initializeRooms() {
  const classes = [new ClassRoom(19), new ClassRoom(20), new ClassRoom(34)];
  return classes;
}