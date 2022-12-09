import { Component } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  acno=''
  psw=''
  amnt=''
  user=''
constructor(private ds:DataService){
  //access username from dataservice
  this.user=this.ds.currentuser
}

  deposit(){
    var acno=this.acno
    var psw=this.psw
    var amnt=this.amnt

    const result=this.ds.deposit(acno,psw,amnt)

    if(result){
      alert(`${amnt} credited to your account and balance is ${result}`)
    }
    else{
      alert('incorrect acno or password')
    }
  }
  acno1=''
  psw1=''
  amnt1=''
  withdrawal(){
    var acno1=this.acno1
    var psw1=this.psw1
    var amnt1=this.amnt1

    const result=this.ds.withdrawal(acno1,psw1,amnt1)

    if(result){
      alert(`${amnt1} debited from your account and balance is ${result}`)
    }
  }
}
