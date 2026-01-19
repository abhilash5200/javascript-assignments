let skills=['react','angular','node.js','java']
function findskill(skills,skillname){
    for(let i=0;i<skills.length;i++){
        if(skills[i]===skillname){
            return i;
        }
    }
    return "skill not found";
}
console.log(findskill(skills,'react'));