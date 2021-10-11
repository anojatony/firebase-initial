import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  constructor(private firestore:AngularFirestore,private firebaseAuth:AngularFireAuth) { }

  getEmployee(){
    return this.firestore.collection('employee').snapshotChanges()
  }

  addEmployee(payload:any){
    return this.firestore.collection('employee').add(payload)
  }

  updateEmployee(employeeid:any,payload:any){
    return this.firestore.doc('employee/'+employeeid).update(payload)
  }

  getEditemployee(id:any){
   return this.firestore.collection('employee').doc(id).snapshotChanges()
  }

  deleteEmployee(employeeid:any){
    return this.firestore.doc('employee/'+employeeid).delete()
  }

  login(email:any,password:any){
   return this.firebaseAuth.signInWithEmailAndPassword(email,password)
   .then(res=>{
     localStorage.setItem('user',JSON.stringify(res.user))
   })
  }
  signup(email:any,password:any){
   return this.firebaseAuth.createUserWithEmailAndPassword(email,password)
   .then(res=>{
     localStorage.setItem('user',JSON.stringify(res.user))
   })
  }

  logout(){
    return this.firebaseAuth.signOut().then(
      ()=>{
        localStorage.removeItem('user')
      }
    )
    
  }
}

export interface Employee {
  id?:String,
  name?:String,
  email?:String
}