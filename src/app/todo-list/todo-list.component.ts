import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Itodo } from '../const/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent implements OnInit {
  @ViewChild('todoItem') todoItem!: ElementRef;

  generateUuid() {
    return String('xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx').replace(
      /[xy]/g,
      (character) => {
        const random = (Math.random() * 16) | 0;
        const value = character === 'x' ? random : (random & 0x3) | 0x8;

        return value.toString(16);
      }
    );
  }

  todoArray: Array<Itodo> = [];
  constructor() {}

  ngOnInit(): void {}

  onBtn() {
    let newObj = {
      todoItem: this.todoItem.nativeElement.value,
      todoId: this.generateUuid(),
    };
    this.todoItem.nativeElement.value = '';
    console.log(newObj);
    this.todoArray.push(newObj);
  }
}
