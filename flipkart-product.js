function img_replace_example(xyz , path){
    // console.log('Function Test');
    console.log(xyz);
    console.log(path);

    var newpath = path.replace("128/128" , "832/832");
    console.log(newpath);

    // console.log(document.getElementById('x1'));

    document.getElementById('x1').src = newpath;
}