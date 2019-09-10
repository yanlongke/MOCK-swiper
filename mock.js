import Mock from "mockjs"
let data=[
    {
        id:1,src:"",link:""
    },
    {
        id:2,src:"",link:""
    },
    {
        id:3,src:"",link:""
    },
    {
        id:4,src:"",link:""
    },
    {
        id:5,src:"",link:""
    },
    {
        id:6,src:"",link:""
    },
    {
        id:7,src:"",link:""
    },
    {
        id:8,src:"",link:""
    },
    {
        id:9,src:"",link:""
    },
    {
        id:10,src:"",link:""
    },
    {
        id:11,src:"",link:""
    },
    {
        id:12,src:"",link:""
    },
]
Mock.mock("/swiper",function(options){
    var {length} = JSON.parse(options.body)
    let arr=data.slice(0,length)
    return {
        data:arr,
        success:true,
        satus:200
    }
})