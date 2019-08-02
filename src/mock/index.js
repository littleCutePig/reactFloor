import Mock from "mockjs";
function A_Z(){
    let arr = [];
    for(var i=0;i<26;i++){
        arr.push(String.fromCharCode(65+i))
    }
    return arr
}
Mock.mock('/api/list',{
    "list|26":[
        {
            "id|+1":1,
            "title|+1":A_Z(),
            "children|1-5":[
                {
                    "id|+1":1,
                    name:"@cname"
                }
            ]
        }
    ]
})