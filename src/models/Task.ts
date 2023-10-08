export interface Task {
    Id: number;
    Title: string;
    Description: string;
    DueDate: Date;
    DurationInMinutes: number;
    UserId: number;
    Status: boolean;
}