import { name,hello, email} from './modules/student_details.js';
import {hello as teacher_hello,email as teacher_email} from './modules/teacher_details.js';

// from student details
console.log(name);
console.log(email)
console.log(hello())

// from teacher details
console.log(teacher_email)
console.log(teacher_hello())