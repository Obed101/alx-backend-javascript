interface Teacher {
    readonly firstName: string;
    readonly lastName: string;
    fullTimeEmployee: boolean;
    YearOfExperience?: number;
    location: string;
    [index: number]: boolean;
}