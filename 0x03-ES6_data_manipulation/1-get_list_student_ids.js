export default function getListStudentIds(studends) {
  let ids = [];
  if (Array.isArray(studends)) {
    for (let student of studends) {
      if (student.includes("id")) {
        ids.push(student.id);
      }
    }
    return ids;
  }
  return [];
}
