import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  // acno=''
  // psw=''
  // amnt=''
  user=''
constructor(private ds:DataService,private fb:FormBuilder){

  //access username from dataservice
  this.user=this.ds.currentuser
}
depositForm=this.fb.group({acno:['',[Validators.required,Validators.pattern('[0-9]+')]],psw:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt:['',[Validators.required,Validators.pattern('[0-9]+')]]})

  deposit(){
    var acno=this.depositForm.value.acno
    var psw=this.depositForm.value.psw
    var amnt=this.depositForm.value.amnt

    if(this.depositForm.valid){
      const result=this.ds.deposit(acno,psw,amnt)
    
      if(result){
        alert(`${amnt} credited to your account and balance is ${result}`)
      }
      else{
        alert('incorrect acno or password')
      }
    }
    }
   
  // acno1=''
  // psw1=''
  // amnt1=''
  withdrawalForm=this.fb.group({acno1:['',[Validators.required,Validators.pattern('[0-9]+')]],psw1:['',[Validators.required,Validators.pattern('[0-9]+')]],amnt1:['',[Validators.required,Validators.pattern('[0-9]+')]]})
  withdrawal(){
    var acno1=this.withdrawalForm.value.acno1
    var psw1=this.withdrawalForm.value.psw1
    var amnt1=this.withdrawalForm.value.amnt1
if(this.withdrawalForm.valid){
  const result=this.ds.withdrawal(acno1,psw1,amnt1)

  if(result){
    alert(`${amnt1} debited from your account and balance is ${result}`)
  }
}
}
}
