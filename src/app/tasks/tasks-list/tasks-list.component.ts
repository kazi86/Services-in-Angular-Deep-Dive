import { Component, computed, inject, signal } from '@angular/core';

import { TaskItemComponent } from './task-item/task-item.component';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-tasks-list',
  standalone: true,
  templateUrl: './tasks-list.component.html',
  styleUrl: './tasks-list.component.css',
  imports: [TaskItemComponent],
})
export class TasksListComponent {
  
  public selectedFilter = signal<string>('all');
  
  public taskSvc = inject(TaskService);

  //create a switch case that is setUp against selectedFilter Signal & Tasks signal in  Service
  // Whenever the value of both or either signal changes the computed method runs
  public tasks = computed(()=>{

    switch(this.selectedFilter()){

      case 'all':

        return this.taskSvc.tasks()
      
      case 'open':

        return this.taskSvc.readOnlyTasks().filter(task=>task.status === 'OPEN');
      
      case 'in-progress':
        
        return this.taskSvc.readOnlyTasks().filter(task=>task.status === 'IN_PROGRESS');
      
      case 'done':
        
      return this.taskSvc.readOnlyTasks().filter(task=>task.status === 'DONE');

      default:

        return this.taskSvc.readOnlyTasks();

    }

  });  

  public onChangeTasksFilter(filter: string) {
    this.selectedFilter.set(filter); // computed will be executed each time we selected filter
  }
}
