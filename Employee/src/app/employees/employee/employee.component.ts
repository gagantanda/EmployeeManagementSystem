import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { EmployeeService } from 'src/app/shared/employee.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public service: EmployeeService, private toastr: ToastrService) { }


  ngOnInit(): void {
    this.resetForm();
  }

  arrTemp : string[];

  resetForm(form?:NgForm){
    if(form!=null)
    form.resetForm();
    this.service.formData= {
      EmployeeID: 0,
      FullName: '',
      Address: '',
      PhoneNumber: 0,
      Position : '',
    }
  }

  onSubmit(form : NgForm){
    if(form.value.EmployeeID == 0)
    {
      this.insertRecord(form);
    }
    else
    {
      this.updateRecord(form);
    }   
  }

  onClear(){
    this.resetForm();
  }

  insertRecord(form: NgForm){
      this.service.postEmployee(form.value).subscribe(data => {
        this.toastr.success('Inserted Successfully', 'Employee');
        this.resetForm(form);
        this.service.refreshList();
        console.log(data);
      })
  }

  updateRecord(form: NgForm){
  this.service.putEmployee(form.value).subscribe(data => {
  this.toastr.info('Updated Successfully', 'Employee');
  this.resetForm(form);
  this.service.refreshList();
  console.log(data);
})
}


}
