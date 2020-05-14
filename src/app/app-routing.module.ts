import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { StudentListComponent } from './student-list/student-list.component';

const routes: Routes = [
    {path : 'student' , component : StudentsComponent},
    {path : 'students' , component : StudentListComponent},
    
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{

}