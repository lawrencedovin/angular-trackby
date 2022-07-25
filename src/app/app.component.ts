import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // https://angular.io/api/common/NgForOf#ngForTrackBy

  students: any[];
    constructor() {
      this.students = [
      {
       ID: 'std101', FirstName: 'yas', LastName: 'shah', Branch: 'IT',
       DOB: '29/02/1998', Gender: 'Male'
       },
       {
       ID: 'std102', FirstName: 'harsh', LastName: 'patel', Branch: 'ETC',
       DOB: '23/05/1999', Gender: 'Male'
       },
       {
       ID: 'std103', FirstName: 'miar', LastName: 'shah', Branch: 'CSE',
       DOB: '24/07/1993', Gender: 'Female'
       },
       ];
    }
    getStudent(): void {
      this.students = [
      {
       ID: 'std101', FirstName: 'yas', LastName: 'shah', Branch: 'IT',
       DOB: '29/02/1998', Gender: 'Male'
      },
      {
       ID: 'std102', FirstName: 'harsh', LastName: 'patel', Branch: 'ETC',
       DOB: '23/05/1999', Gender: 'Male'
      },
      {
       ID: 'std103', FirstName: 'mira', LastName: 'shah', Branch: 'CSE',
       DOB: '24/07/1993', Gender: 'Female'
      },
      {
      ID: 'std104', FirstName: 'Hina', LastName: 'Sharma', Branch: 'ETC',
      DOB: '19/08/1990', Gender: 'Female'
      },
      {
      ID: 'std105', FirstName: 'Sambit',
           LastName: 'Satapathy', Branch: 'CSE',
      DOB: '12/94/1991', Gender: 'Male'
            }
        ];
    }

  studentTrackBy(index:number, student:any): number {
    return student.ID;
  }
}
