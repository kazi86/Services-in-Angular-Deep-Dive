import { Component, ElementRef, viewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TaskService } from '../../services/tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
    
})
export class NewTaskComponent {
  private formEl = viewChild<ElementRef<HTMLFormElement>>('form');


  constructor(private taskSvc : TaskService){}

  onAddTask(title: string, description: string) {

    this.taskSvc.onAddTask({title,description});

    this.formEl()?.nativeElement.reset();
  }
}
