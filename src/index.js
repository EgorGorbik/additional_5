module.exports = function check(str, bracketsConfig) {
arr = str.split('');
for (var i = 0; i < str.length; i++){
    for (var j = 0; j < bracketsConfig.length; j++)
        if (arr[i] == bracketsConfig[j][0] && arr[i+1] == bracketsConfig[j][1]){
            arr.splice(i,2);
            i = -1;
    }
}

if (arr.length == 0){
  return true;
}
else return false;

}