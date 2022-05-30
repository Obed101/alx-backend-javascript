interface Student {
  firstName?: string;
  lastName?: string;
  age?: number;
  location?: string;
}
const student1: Student = {
  firstName: "Obed",
  lastName: "Amoako",
  age: 21,
  location: "Ghana"
};
const student2: Student = {
  firstName: "Eric",
  lastName: "Ansah",
  age: 20,
  location: "Kenya"
};
const studentsList: Student[] = [student1, student2];

function studentsTable(): any {
  return `
    <table>
        <tr>
          <th>First Name</th>
          <th>Location</th>
        </tr>
        <tr>
          <td>Obed</td>
          <td>Ghana</td>
        </tr>
      <tr>
        <td>Eric</td>
        <td>Kenya</td>
      </tr>
    </table>
    `;
}
