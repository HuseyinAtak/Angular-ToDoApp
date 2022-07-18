import { getLocaleDayNames } from '@angular/common';
import { Component } from '@angular/core';
import { Model } from './model';
import { TodoItem } from './todoItem';


@Component({
  selector: 'todo',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

  displayAll: boolean = false;

  inputText: string = "";
  model = new Model();
  constructor() {
    this.model.items = this.getItemsFromLS();
  }

  addItem() {
    if (this.inputText !=="" && this.inputText!=" " ) {
      let data = { description: this.inputText, action: false };

      this.model.items.push(data);

      let items = this.getItemsFromLS();
      items.push(data);
      localStorage.setItem("items", JSON.stringify(items));

      this.inputText = "";
    } else {
      alert("Bir Değer Giriniz.")
    }
  }
  getItemsFromLS() {
    let items: TodoItem[] = [];
    let value = localStorage.getItem("items");
    if (value != null) {
      items = JSON.parse(value);
    }
    return items;

  }
  onActionChange(item: TodoItem) {
    let items = this.getItemsFromLS();

    localStorage.clear;

    items.forEach(i => {
      if (i.description == item.description) {
        i.action = item.action;
      }
    });

    localStorage.setItem("items", JSON.stringify(items));

  }

  getName() {
    return this.model.name;
  }

  getItems() {
    if (this.displayAll) {
      return this.model.items;
    } else {
      return this.model.items.filter(item => !item.action);
    }
  }
  displayCount() {
    return this.model.items.filter(i => i.action).length;
  }

  getBtnClasses() {
    return {
      'disabled': this.inputText.length == 0,
      'btn-secondary': this.inputText.length == 0,
      'btn-primary': this.inputText.length > 0
    }
  }

};