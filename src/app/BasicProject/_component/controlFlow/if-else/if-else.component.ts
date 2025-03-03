import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ifelse',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './if-else.component.html',
  styleUrl: './if-else.component.css'
})
export class IfelseComponent {

  div1Visiable: boolean = true;
  isWarningVisible: boolean = false;
  isWarnigDivVisiable: boolean = false;
  num1: string = '';
  num2: string = '';
  selectedStatus: string = '';
  statusSelection: string = '';

  // constructor(private deptService: DepartmentService) {
  //   this.deptService.onRoleChange$.subscribe((res:string)=>{
  //     debugger;
  //   })
  //   this.deptService.role$.subscribe((res:string)=>{
  //     debugger;
  //   })
  // }
  toggleFunction(){
    this.isWarningVisible = ! this.isWarningVisible

  }
  hideFunction(){
    this.div1Visiable = false;
  }
  showFunction(){
    this.div1Visiable = true;
  }
  showDiv1() { 
    this.div1Visiable = true;
  }
  hideDiv1() { 
    this.div1Visiable = false;
  }
  toggleDiv2() { 
    this.isWarnigDivVisiable = !this.isWarnigDivVisiable;
  }

}