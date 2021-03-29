import { Injectable } from '@angular/core';
import { datos_usuario, User } from '../shared/user_interface';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore,AngularFirestoreDocument } from '@angular/fire/firestore'
import { Observable, of } from 'rxjs';
import{switchMap} from "rxjs/Operators";


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public user$: Observable<User>;
  public datos$: datos_usuario; 
  public cats : any;
  constructor(public afAuth:AngularFireAuth, private afs:AngularFirestore, private db: AngularFirestore ){
    this.user$= this.afAuth.authState.pipe(
      switchMap((user)=> {
        if(user){
          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
        }
        return of(null);
      })
    )
  }

 isEmailVerify(user:User):boolean{
      return(user.emailVerified===true ?true:false);
  }

  async resetPassword(email: string): Promise<void>{
    try{
      return this.afAuth.sendPasswordResetEmail(email);
    }
    catch(error){console.log('Error->',error)} 
  } 
  /*async loginGoogle(): Promise<User>{
    try{
        const {user}= await this.afAuth.signInWithPopup(new firebase.GoogleAuthProvider());
        this.updateUserData(user);
        return user;
    }
    catch(error){console.log('Error->',error)}
  } */

  async register(email:string, password: string,nombre:string, apellido:string,dia:string,mes:string,anio:string,genero:string): Promise<User>{
    try{
      const{user}=await this.afAuth.createUserWithEmailAndPassword(email, password);
      const DatosRef = this.db.collection('Datos_Usuario');
      await DatosRef.doc(user.uid).set({
        nombre: nombre,
        apellido: apellido,
        dia:dia,
        mes:mes,
        anio:anio,
        genero:genero,
      });
      await this.sendVerificationEmail();
      return user;
    }
    catch(error){
      console.log('Error->',error.message)
      
    }
  } 

  async login(email: string ,password:string): Promise<User>{
    try{
      const{user}=await this.afAuth.signInWithEmailAndPassword(email,password)
      console.log(user)
      this.updateUserData(user);
      return user;
    }
    catch(error){console.log('Error->',error)}
  } 

  async sendVerificationEmail(): Promise<void>{
    try{
      return(await this.afAuth.currentUser).sendEmailVerification();

    }
    catch(error){console.log('Error->',error)}
  } 

  async logout(): Promise<void>{
    try{
      await this.afAuth.signOut();
    }
    catch(error){console.log('Error->',error)}
  } 
  async updateUserData(user:User): Promise<void>{
    try{
      const userRef:AngularFirestoreDocument<User>= this.afs.doc(`users/${user.uid}`)
      const data_2:User={
        uid:user.uid,
        email:user.email,
        emailVerified:user.emailVerified,
        displayName: user.displayName,
      };
      const dataRef = this.db.collection('Datos_Usuario').doc(user.uid);

      await dataRef.get().subscribe((catsSnapshot) => {
      const datos:datos_usuario={
        nombre: catsSnapshot.data()["nombre"],
        apellido: catsSnapshot.data()["apellido"],
        anio: catsSnapshot.data()["anio"],
        mes: catsSnapshot.data()["mes"],
        genero: catsSnapshot.data()["genero"],
        dia: catsSnapshot.data()["dia"],
      }
        this.datos$= datos;
        });
          
      return userRef.set(data_2,{merge:true});
    }
    catch(error){console.log('Error->',error)}
  }

  /*async correo_utilizado(email: string): Promise<boolean>{
    try{
      var terminar = 0;
       this.db.collection('users').snapshotChanges().subscribe(bucle=>{
           bucle.forEach(async ( diferente_user: any)=>{
            var email_rec:string= await diferente_user.payload.doc.data()["email"];
             console.log("email ingresado:",email)
            console.log("email revisado",email_rec)
            if(email==email_rec){
              const cond = false;
              return false;
            }
            console.log("Hace return")
          })
        terminar = 1;
      });
      console.log("ultimo return")
      return true;
    }
    catch(error){console.log('Error->',error)}
  }*/

}
