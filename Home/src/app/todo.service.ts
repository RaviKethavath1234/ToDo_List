import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
taskID=4;
  constructor() { }
  todolist = [
    { id: 1, Task: "Task1" },
    { id: 2, Task: "Task2" },
    { id: 3, Task: "Task3" }
  ];

  addToDo(TaskName:any){
    this.todolist.push({"id":this.taskID++,"Task":TaskName});
  }

  removeIndex(index:any){
    this.todolist.splice(index);
  }
}
