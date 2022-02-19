var sidebarTxt='* [首页](/)\n';
var path = require('path');
var curPath = path.resolve('./');

function walkSync(currentDirPath, prefixBlank, callback) {
    var fs = require('fs'),
        path = require('path');
    fs.readdirSync(currentDirPath).forEach(function (name) {
        var filePath = path.join(currentDirPath, name);
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
            callback(filePath, stat);
        } else if (stat.isDirectory() && ".git"!=path.basename(filePath) && '_' != path.basename(filePath).substr(0,1)) {
            sidebarTxt += prefixBlank +'* ' +path.basename(filePath)+'\n';
            walkSync(filePath, prefixBlank+'  ', callback);
        }
    });
}
walkSync(curPath,'', function(filePath, stat) {
        if(".md" == path.extname(filePath).toLowerCase() 
            && '_' != path.basename(filePath).substr(0,1) 
            && 'README.md' != path.basename(filePath)){
            var relativeFilePath = filePath.substr(curPath.length);
            //console.log("file:"+ path.basename(filePath).slice(1));
            var itemText = relativeFilePath.substr(1, relativeFilePath.length-4);
            while(itemText.indexOf('/')>0){
                itemText = itemText.substr(itemText.indexOf('/')+1);
                sidebarTxt += '  ';
            }

        sidebarTxt += '- ['+itemText+']('+relativeFilePath+')\n';
        
            
        }
        //console.log("file:"+ +path.extname(filePath));
});

var path = require('path');
var fs = require('fs');
fs.copyFile(path.resolve('./')+"/_sidebar.md",path.resolve('./')+"/_sidebar.md.bak",function(err){
        if(err) throw new Error('something wrong was happended') });
//console.log(path.resolve('./')+"/_sidebar.md");


console.log(sidebarTxt);
fs.writeFile(path.resolve('./')+'/_sidebar.md', sidebarTxt,function(err){
    if(err){
        console.error(err);
    }
});