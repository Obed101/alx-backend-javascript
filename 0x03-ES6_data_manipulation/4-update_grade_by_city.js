export default function updateStudentGradeByCity(students, city, newGrades) {
  const std = students.filter((student) => student.location === city);
  std.map((student) => {
    let iniGrade = 'N/A';
    newGrades.forEach((grade) => {
      if (newGrades.grade) {
        if (grade.studentId === student.id) {
          iniGrade = grade.grade;
        }
      }
      return { ...student, grade: iniGrade };
    });
    return { ...student, grade: iniGrade };
  });
}
