import { InjectionToken } from "@angular/core";

export type TaskStatus = 'OPEN' | 'IN_PROGRESS' | 'DONE';

type TaskStatusOptions = {value:string,taskStatus:TaskStatus,text:string}[];


export const taskStatusOptionsToken = new InjectionToken<TaskStatusOptions>('Task Status Options');

export const TaskStatusOptions : TaskStatusOptions = [
{
  value:'open',
  taskStatus:'OPEN',
  text:'Open'
},
{
  value:'in-progress',
  taskStatus:'IN_PROGRESS',
  text:'In-Progress'
},
{
  value:'done',
  taskStatus:'DONE',
  text:'Completed'
}
]

export interface Task {
  id: string;
  title: string;
  description: string;
  status: TaskStatus;
}
