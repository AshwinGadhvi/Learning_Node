const fs = require('fs');

//writefile
//copyfile
//appendfile
//rename
//unlink

//writeFile
fs.writeFile("hey.txt","Made By Ashwin Gadhvi",()=>{
    console.log("Writing Data");
    setTimeout(() => {
        console.log("Done");
    }, 1000);
    console.log("Waiting For Print");
});

//appendfile

fs.appendFile("hey.txt","2024",()=>{
    console.log("Data Appended");
});

fs.rename("hey.txt","File1.txt",()=>{
    console.log("Renamed Successfully.")
})

//copyFile

fs.copyFile("File1.txt","File2.txt",(err)=>{
    if(err){
        console.log(err);
    }
    else
    {
        console.log("File complated");
    }
});

//unlink =>Use For Deleting File.

fs.unlink("delete.txt",(err)=>{
    if(err)
    {
        console.log(err);
    }
    else{
        console.log("File Deleted Successfully...");
    }
});


//rm => use for removing folder or file

fs.rm("./remove",{recursive:true},(err)=>{
    if(err)console.log(err);
    else console.log("Folder Removed");
})


//readFile

fs.readFile("File1.txt","utf-8",(err,data)=>{
    if(err) console.log(err);
    else console.log(data);
})