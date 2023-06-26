
let emp_information = [];
let delete_information = [];
let table_id ;
let only_id =[];

function add_emp_info(id, name, age, gender) {
    
    let obj = {
        id: id,
        name: name,
        age: age,
        gender: gender

    }
    
    var index = emp_information.map((val , i)=>{
        return emp_information[i].id;
    })
    
    if(index.includes(id)){
        seterror("error-id","This id has been used")
    }
    else{
        emp_information.push(obj);
    }
    
    only_id.push(id);
    disappear();
    display_table_data(); 
    console.log(only_id)

}


function delete_record(id) {


    let del = emp_information.filter((a, index) => {
        if (id == a.id) {
            
            emp_information.splice(index, 1);
            display_table_data();

        }
    })

    delete_information.push(id);
    

}


function seterror(id, message) {
    let get_element = document.getElementById(id);
    get_element.innerHTML = message;

}


function submitdata() {
    let id = document.getElementById("id").value
    let name = document.getElementById("name").value
    let age = document.getElementById("age").value
    let gender = document.getElementById("gender-val").value

    console.log(gender);
    let pattern = /^[A-Za-z\s]+$/;
    
    
    if(id == "" && name == "" && age == "" && gender == ""){
        seterror("error-id","field is required");
        seterror("error-name","field is requird");
        seterror("error-age","field is requird");
        seterror("error-gender","field is requied");
    }
    else if (delete_information.includes(parseInt(id))) {
        seterror("error-id", "id is already has been used");
        console.log(delete_information);
    }
    else if (name.match(pattern) == null) {
        seterror("error-name", "only enter albhabet");
    }
    else if (18 >= age) {
        seterror("error-age", "your age is below  18");
    }
    else if (age > 60) {
        seterror("error-age", "your age is above 60");
    } else {

        add_emp_info(parseInt(id), name, age, gender);
        
    }

    let id_input = document.getElementById("id");
    let id_event = document.getElementById("error-id");
    id_input.addEventListener("input",function(){
        id_event.innerHTML = "";
    })

    let name_input = document.getElementById("name");
    let name_event = document.getElementById("error-name");
    name_input.addEventListener("input",function(){
        name_event.innerHTML = "";
    })

    let age_input = document.getElementById("age");
    let age_event = document.getElementById("error-age");
    age_input.addEventListener("input",function(){
        age_event.innerHTML = "";
    })

    let gender_input = document.getElementById("gender-val");
    let gender_event = document.getElementById("error-gender");
    gender_input.addEventListener("input",function(){
        gender_event.innerHTML = "";
    })

}



function disappear() {
    let id = document.getElementById("id").value = ""
    let name = document.getElementById("name").value = ""
    let age = document.getElementById("age").value = ""
    let gender = document.getElementById("gender-val").value = ""

}



function add_button() {

    
    let update_emp_id = document.getElementById("emp_id").value;
    let update_emp_name = document.getElementById("emp_name").value;
    let update_emp_age = document.getElementById("emp_age").value;
    let update_emp_gender = document.getElementById("emp_gender").value;

   
    
    let edit_index = emp_information.map((v , i)=>{
       
        if(emp_information.length == 1){
            
            return 0;
        
        }
        else if(emp_information[i].id == table_id){

                return 0;
        }
        else{
            return emp_information[i].id;
        }
        
     })

    
     
  
   
   let pattern = /^[A-Za-z\s]+$/;


   if(update_emp_id == "" && update_emp_name =="" && update_emp_age== "" && update_emp_gender == ""){

        seterror("edit_id","field is required");
        seterror("edit_name","field is requird");
        seterror("edit_age","field is requird");
        seterror("edit_gender","field is requied");
    
    }
    else if (delete_information.includes(parseInt(update_emp_id)) || edit_index.includes(parseInt(update_emp_id))) 
    {
    seterror("edit_id", "id is already has been used");
    
    }
    else if (update_emp_name.match(pattern) == null) 
    {
        seterror("edit_name", "only enter albhabet");
    }
    else if (18 >= parseInt(update_emp_age))
    {
        seterror("edit_age", "your age is below  18");
    }
    else if (parseInt(update_emp_age) > 60) 
    {
        seterror("edit_age", "your age is above 60");
    } 
    else 
    {

        for(let k =0;k<emp_information.length;k++){

        
        if(emp_information[k].id == table_id )//table_id == emp_information[k].id)
        {
            emp_information[k].id = parseInt(update_emp_id);
            emp_information[k].name = update_emp_name;
            emp_information[k].age= update_emp_age;
            emp_information[k].gender = update_emp_gender;

 
        }
       // else if(emp_information[k].id != parseInt(update_emp_id)){

       //     emp_information[k].id = parseInt(update_emp_id);
       //     emp_information[k].name = update_emp_name;
         //   emp_information[k].age= update_emp_age;
      //      emp_information[k].gender = update_emp_gender;

       // }
          

            
        }
        
        }
    
     display_table_data();
    
    
    
    let edit_id_event = document.getElementById("emp_id");
    let edit_id_error = document.getElementById("edit_id");
    edit_id_event.addEventListener('input',function(){
        edit_id_error.innerHTML = "";
    })

    let edit_name_event = document.getElementById("emp_name");
    let edit_name_error = document.getElementById("edit_name");
    edit_name_event.addEventListener('input',function(){
        edit_name_error.innerHTML = "";
    })

    let edit_age_event = document.getElementById("emp_age");
    let edit_age_error = document.getElementById("edit_age");
    edit_age_event.addEventListener('input',function(){
        edit_age_error.innerHTML = "";
    })

    let edit_gender_event = document.getElementById("emp_gender");
    let edit_gender_error = document.getElementById("edit_gender");
    edit_gender_event.addEventListener('input',function(){
        edit_gender_error.innerHTML = "";
    })

}


function cancel_div(){
    
    var popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.classList.remove("active");
  
}



function edit_function(id) {

   
    var popupOverlay = document.querySelector(".popup-overlay");
    popupOverlay.classList.add("active");

   
    
    for (let i = 0; i < emp_information.length; i++) {
        if (id == emp_information[i].id) {
            let display_id = document.getElementById("emp_id").value = emp_information[i].id;
            let display_name = document.getElementById("emp_name").value = emp_information[i].name;
            let display_age = document.getElementById("emp_age").value = emp_information[i].age;
        }
    }

    table_id = id;

}



function display_table_data() {

    let placeholder = document.getElementById("display");
    let out = "";
    for (let i = 0; i < emp_information.length; i++) {
        out += `
        <tr>
            <td>${emp_information[i].id}</td>
            <td>${emp_information[i].name}</td>
            <td>${emp_information[i].age}</td>
            <td>${emp_information[i].gender}</td>
            <td><span><button type="submit"  onClick = "edit_function(${emp_information[i].id})" style="margin:10px" >Edit</button><button type="submit" onClick="delete_record(${emp_information[i].id})">Delete</button><span></td>
        
        </tr>
        
        `;
        
        
    }

    placeholder.innerHTML = out;

}