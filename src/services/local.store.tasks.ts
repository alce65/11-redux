import { TaskModel } from "../models/task";
import { getTaskList } from "../data/tasks";

export class StoreClass {
    // store: string;
    // constructor() {
    //     this.store = 'Tasks';
    // }

    constructor(public localStore: string = "Tasks") {}

    async firstSetTask() {
        const tasks = await getTaskList();
        console.log({ tasks });
        this.setTasks(tasks);
        return tasks;
    }

    async getTasks(): Promise<Array<TaskModel>> {
        return localStorage.getItem(this.localStore)
            ? JSON.parse(localStorage.getItem(this.localStore) as string)
            : await this.firstSetTask();
    }

    setTasks(tasks: Array<TaskModel>): void {
        localStorage.setItem(this.localStore, JSON.stringify(tasks));
    }

    deleteTasks(): void {
        localStorage.removeItem(this.localStore);
    }
}
