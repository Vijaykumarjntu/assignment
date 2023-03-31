let container = document.getElementById('school-information-container');
let student_container = document.getElementById('student-information-container');


const displayStudentInfo = (rollno,fname,mname,att,cn,db)=>{
    let first_half_container = document.createElement('div');
    first_half_container.classList.add('first-half');

    let roll_no = document.createElement('p');
    roll_no.textContent = `Roll No              :- ${rollno}`;

    let father_name = document.createElement('p');
    father_name.textContent = `Father's Name    :- ${fname}`;

    let attendance = document.createElement('p');
    attendance.textContent = `Attendance        :- ${131}`;

    first_half_container.appendChild(roll_no);
    first_half_container.appendChild(father_name);
    first_half_container.appendChild(attendance);

    let second_half_container = document.createElement('div');
    second_half_container.classList.add('first-half');

    let mother_name = document.createElement('p');
    mother_name.textContent = `Mother's Name     :- ${mname}`;

    let class_name = document.createElement('p');
    class_name.textContent = `ClassName          :- ${cn}`;

    let date_of_birth = document.createElement('p');
    date_of_birth.textContent = `DOB             :- ${db}`;

    second_half_container.appendChild(mother_name);
    second_half_container.appendChild(class_name);
    second_half_container.appendChild(date_of_birth);

    student_container.appendChild(first_half_container);
    student_container.appendChild(second_half_container);
}
const fetchingData = async()=>{
    let options = {
        method: 'GET'
    }
    const res = await fetch('http://stageapi.iguru.guru:222/api/ExamManagement/GetStudentProgressReports?schoolID=282&sectionID=2682&eXamMasID=8442&students=181521',options);
    const data = await res.json();
    const {Response} = data;
    const {ProgressList} = Response;
    const {lstStudentInfo} = ProgressList;
    console.log(lstStudentInfo);
    const {RollNumber,FatherName,MotherName,Attandence,ClassName,DOB,
        SchoolName,SchoolAddress,SchoolPhoneNumber} = lstStudentInfo[0];
    
    displayStudentInfo(RollNumber,FatherName,MotherName,Attandence,ClassName,DOB)
    let schoolname = document.createElement('h1');
    schoolname.textContent = SchoolName;
    let address = document.createElement('p');
    address.textContent = SchoolAddress;
    
    let phone = document.createElement('span');
    phone.textContent = SchoolPhoneNumber;
    address.appendChild = phone;
    
    let  school_sub_container = document.createElement('div');
    school_sub_container.id = 'school-sub'

    let type_of_report = document.createElement('p');
    type_of_report.textContent = 'REPORT CARD'


    let year_of_report = document.createElement('p');
    year_of_report.textContent = 'ACADAMIC SESSION: 2022-23';

    school_sub_container.appendChild(type_of_report)
    school_sub_container.appendChild(year_of_report)

    container.appendChild(schoolname);
    container.appendChild(address);
    container.appendChild(phone);
    container.appendChild(school_sub_container);
    
}

fetchingData()
