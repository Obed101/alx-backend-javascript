export default function getListStudentIds (studends) {
  if (Array.isArray(studends)) {
    return students.map(student => student.id);
  }
  return [];
};
