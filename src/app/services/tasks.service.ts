import { inject, Injectable, signal } from "@angular/core";
import { Task, TaskStatus } from "../tasks/task.model";
import { token } from "../../main";

// @Injectable({
// providedIn:'root'
// })

export class TaskService{

public tasks = signal <Task[]>([]); //writtable signal

public readOnlyTasks = this.tasks.asReadonly();

public logginSvc = inject(token);

constructor(){}

public onAddTask(taskData:{title: string , description:string}){

    let newTask: Task = {
        ...taskData,
        id:Math.random().toString(),
        status:'OPEN',
    } 

    this.tasks.update((oldTasks)=>[...oldTasks,newTask]);                                                      

}

public updateTaskStatus(updatedTaskId: string, newStatus: TaskStatus){

    this.tasks.update((oldTasks)=> oldTasks.map((task:Task)=>{

        if(task.id === updatedTaskId){

            return { ...task, status: newStatus }

        }
        else{

            return task;

        }
    }));

    this.logginSvc.log(`${updatedTaskId} status has been set to ${newStatus} at`);

}

}