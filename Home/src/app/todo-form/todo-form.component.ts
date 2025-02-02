import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Import FormsModule
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-form',
  standalone: true,  // Indicate that this is a standalone component
  imports: [CommonModule, FormsModule], // Import necessary modules here
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent {
  inputText: string = '';
  constructor(public todoService:TodoService){}
    
  addForm() {
    this.todoService.addToDo(this.inputText)
    this.inputText="";
  }
  

  resetForm() {
    this.inputText = '';
  }
}
