str = "";
function get_value(userinput){
    //  console.log("calculator function called");
    // console.log(userinput.innerText);
    str = str+(userinput.innerText);
    console.log(str);
    document.querySelector('.txt').value = str;

}
function set_ans(){
    ans=eval(str);
    console.log(ans);
    document.querySelector('.txt').value =ans;
    str=ans;
}
function get_removal(){
    document.querySelector('.txt').value =0;
    str="";
}