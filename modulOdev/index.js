        //Modulun Dahil Edilmesi
const fs = require('fs');

        //Dosyanın Yazdırılması
/*
fs.writeFile('employees.json','{"name": "Employe 1 Name", "salary": 2000}',(err) =>{
    if(err) console.log(err);
    console.log('Dosya Başarılı bir şekilde oluşturuldu...');
})*/

        //Dosyanın Okunması
/*
fs.readFile('employees.json','utf8',(err, data) =>{
    if(err) console.log(err);
    console.log(data);
    console.log('Dosya Okuması Gerçekleşti');
})*/

        //Veri Eklenmesi
/*
fs.appendFile('employees.json','\n{"name":"Employe 2 Name", "salary": 5000}','utf8', (err) =>{
    if(err) console.log(err);
    console.log('Dosyaya Veri Eklendi...');
})*/

        //Dosya Silinmesi
/*
fs.unlink('employees.json',(err) =>{
    if(err) console.log(err);
    console.log('Dosya Başarılı Bir Şekilde Silindi');
})*/