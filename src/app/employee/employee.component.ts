import {Component} from '@angular/core'



@Component({

    selector : 'app-employee',

    templateUrl : './employee.component.html',

    styleUrls : ['./employee.component.css']

    

})
export class EmployeeComponenet{




    empList : any[] = [


            {
                'id' : 101,
                'name' : 'surya',
                'sal' : 50000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            },
            {   
                'id' : 102,
                'name' : 'kunal',
                'sal' : 67000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            },
            {
                'id' : 103,
                'name' : 'venkat',
                'sal' : 68000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            },
            {
                'id' : 103,
                'name' : 'venkat',
                'sal' : 68000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            },
            {
                'id' : 103,
                'name' : 'venkat',
                'sal' : 68000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            },
            {
                'id' : 103,
                'name' : 'venkat',
                'sal' : 68000,
                'doj' : 'Sunday, July 29, 2018 11:55:54 AM'
            }



    ]


}