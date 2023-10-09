export class Task {
    Id!: number;
    Title: string;
    Description: string;
    DueDate: Date;
    DurationInMinutes: number;
    UserId!: number;
    Status: boolean;

    constructor(Title: string) {
        this.Title = Title;
        this.Description = '';
        this.DueDate = new Date();
        this.DurationInMinutes = 0;
        this.Status = false;
    }
}