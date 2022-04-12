export default function getStudentsByLocation (students) {
  if (Array.isArray(students)) {
    return students.filter((student) => student.includes('location'));
  }
  return [];
};
