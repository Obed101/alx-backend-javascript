export default function getListStudentIds (studends) {
  let ids = [];
  if (Array.isArray(studends)) {
    for (let student of studends) {
      if (student.includes('id')) {
        const newmap = student.map(student.id);
        ids.push(newmap);
      }
    }
    return ids;
  }
  return [];
};
