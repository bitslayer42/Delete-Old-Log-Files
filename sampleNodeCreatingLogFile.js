let logFile;

//If data in logfile, save it.
const logFileNm = __dirname + '/logfiles/logfile.txt';
if(fs.existsSync(logFileNm)){
    let nowStr = Date.now();
    let newLogFileName = __dirname + '/logfiles/logfile' + nowStr + '.txt';
    fs.rename(logFileNm,newLogFileName,function (err) {
        if (err) {logFile.write(err.toString());return;}
        proceed();
    });
}else{proceed();}  

function proceed(){
//logFile.write(err.toString()+'\n');
//logFile.write("Successful: "+table+" Loaded\n");
}