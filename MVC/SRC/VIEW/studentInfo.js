init.view.studentInfo={
    setupUI:function(){
        var dom=document.getElementById("studentInfo")
        const stu=new Student('anshul','goyal',23)
        
        var stud=stu.printStudent()
       dom.innerHTML=JSON.stringify(stud);
    }
        
    
}