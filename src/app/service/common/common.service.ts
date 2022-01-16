import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Employee } from 'src/app/model/employee/employee.model';

@Injectable({
    providedIn: 'root',
  })

export class CommonService {

    loginService(email: string, password: string){
        let datas = JSON.parse(localStorage.getItem("user"));
        for(let i in datas){
            if(datas[i].email == email && datas[i].password == password){
                var header = {
                    "alg": "HS256",
                    "typ": "JWT"
                };
                
                var stringifiedHeader = CryptoJS.enc.Utf8.parse(JSON.stringify(header));
                var encodedHeader = CryptoJS.enc.Base64.stringify(stringifiedHeader);
                
                var data = {
                    "email": email,
                    "password": password
                };
                
                var stringifiedData = CryptoJS.enc.Utf8.parse(JSON.stringify(data));
                var encodedData = CryptoJS.enc.Base64.stringify(stringifiedData);
                
                var token = encodedHeader + "." + encodedData;
                localStorage.setItem('token', JSON.stringify(token));

                return true;
            }
        }
        
        return false;
    }

    isAuthenticated(){
        let token = JSON.parse(localStorage.getItem("token"));

        if (token !== null) return true;
        else return false;
    }

    createJson(){
        let list = [];
        
        for(let i = 0; i < 100; i++){
            let employee: Employee = {
                username: this.generateName() + i.toString(),
                firstName: this.generateName(),
                lastName: this.generateName(),
                email: null,
                birthDate: '27-01-1993',
                basicSalary: this.getRandomInt(1000000, 19000000),
                status: 'Single',
                group: 'Group A',
                description: 'This is Description Example'
            }

            employee.email =  employee.firstName + '.' + employee.lastName + '@gmail.com';

            list.push(employee);
        }

        return list;
    }

    getRandomInt(min, max) : number{
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min; 
    }

    capFirst(string: string) {
        debugger
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    
    generateName(){
        var name1 = ["ucok","agung","syarif","hafidz","amru","gerry","gerro","syaiful","ulum","rohmat","bagas","imran","khalifah","sutejo","iskandar","kurniawan","sutopo","jamil","natalino"];
        var name = this.capFirst(name1[this.getRandomInt(0, name1.length - 1)]);

        return name;
    }
}