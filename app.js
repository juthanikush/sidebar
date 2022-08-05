let sidebar = document.querySelector(".sidebar");
let toggle_button=document.querySelector(".sidebar-toggle");
let close_btn=document.querySelector(".close-btn");
toggle_button.addEventListener("click",function(){
    const classlist=sidebar.classList;
    // if(classlist.contains("show-sidebar"))
    // {
    //     classlist.remove("show-sidebar");
    // }else{
    //     classlist.add("show-sidebar");
    // }
    classlist.toggle("show-sidebar")
});
close_btn.addEventListener("click",function(){
    const classlist=sidebar.classList;
    classlist.remove("show-sidebar");
})