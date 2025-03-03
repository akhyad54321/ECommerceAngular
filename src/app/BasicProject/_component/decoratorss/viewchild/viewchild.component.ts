import { FormsModule } from '@angular/forms';
import { AlertComponent } from './../../../reusableComponent/alert/alert.component';
import { Component, ElementRef, ViewChild, AfterViewInit, viewChild } from '@angular/core';

@Component({
  selector: 'app-viewchild',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './viewchild.component.html',
  styleUrl: './viewchild.component.css'
})
export class ViewchildComponent implements AfterViewInit {
  @ViewChild('txt') textBox?: ElementRef;
  @ViewChild('gan') ganeshValue: ElementRef | undefined;
  @ViewChild('han') hanValue: ElementRef | undefined;

  name1: string= '';
  name2: string= '';

  ngAfterViewInit(): void {
    const value = this.textBox?.nativeElement.value;
    console.log(value);
    debugger;
  }

  onSubmit(){
    const v1 = this.ganeshValue?.nativeElement.value;
    const v2 = this.hanValue?.nativeElement.value;
    console.log(v1);
    console.log(v2);
  }

}