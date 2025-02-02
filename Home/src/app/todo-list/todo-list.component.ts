import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { TodoService } from '../todo.service';



@Component({
  selector: 'app-todo-list',
  imports: [CommonModule],
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.css'
})
export class TodoListComponent {
  todolist:any;
  constructor(public todoService:TodoService){
     this.todolist=this.todoService.todolist;
  }
  
  remove(index:any){
    this.todoService.removeIndex(index);
  }


}
