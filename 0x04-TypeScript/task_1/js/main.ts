interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    YearOfExperience?: number;
    location: string;
    [index: number]: boolean;
}
interface Directors extends Teacher {
    numberOfReports: number;
}
function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`;
}