export interface taskDetails {
    DtSupplied: any;
    PatTaskWeight: number,
    TodayDate: any,
    TaskGoalId: number,
    TaskId: number,
    TaskName: string,
    TaskWeight: number,
    goalid: number,
    CheckStatus: boolean
}

export interface postTasks {
    "TaskGoalId": number,
    "TaskWeight": number
}