var express = require('express');
var router = express.Router();
var ffmpeg = require("fluent-ffmpeg")
const path = require("path")
const {Video} = require("./models/Video") 
// const ffmpeg = require("ffmpeg")
const multer = require("multer") //multer이용 파일 저장
//ffmpeg , multer 설치


let storage = multer.diskStorage({
    //저장경로
   destination:(req,file,cb) => {
    // cb(null , "uploads/") //전송된 파일 저장 디렉토리 설정
    cb(null , "public")   
},
   //파일이름
   filename:(req,file,cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);

   },
//    fileFilter:(req,file,cb) => {
//        const ext = path.extname(file.originalname)
//        if(ext !== '.mp4' || ext !== '.jpg'){ //mp4만 받을수 있게 설정
//            return cb(res.status(400).end('only jpg,png,mp4 is allowed'),false);
//        }
//        cb(null,true)
//    },
})
const upload = multer({storage : storage}).single("file"); //single 하나만 설정

 


router.post('/videoupload', (req, res, next) => {

//비디오를 서버에 저장
upload(req ,res , err => {
if(err){
    return res.json({success:false , err})
}
// console.log("비디오 업로드" + res.req.file.filename)
return res.json({success: true , url : res.req.file.path, fileName: res.req.file.filename })  //파일을 저장한 경로를 보내준다 
})

})






router.post('/thumbnail', (req, res, next) => {
//썸네일 생성
console.log("썸네일 포스트 라우터")
let fileDuration ="";
let filepath = ""

ffmpeg.ffprobe(req.body.url , (err , metadata) =>{
console.log("metadata :" + metadata.format.duration) //해당 비디오 정보
fileDuration = metadata.format.duration //동영상 길이 대입
})

ffmpeg(req.body.url)
.on('filenames' , function(fileName) {
console.log("filenames" + fileName)
// filepath = "public/thumbnails" + fileName[0];
filepath = fileName[0];
})
.on("end" , function() { 
console.log("Screenshots taken");
return res.json({
    success:true,
    fileName:filepath,
    fileDuration: fileDuration
})})
.screenshots({
    count :3,
    folder: 'public/thumbnails',
    size: '320x240',
    //%b = input basename
    filename : 'thumbnail-%b.png'
})
})




router.post('/uploadVideo', (req, res , next) => {
console.log("업로드")
console.log(req.body)
    const video = new Video({
        title: req.body.title,
        description:req.body.description,
        filePath:req.body.filePath ,
        fileName:req.body.filename,   
        thumbName : req.body.thumbName
    })

    video.save((err, video) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});


router.get("/getVideos", (req, res) => {

    Video.find()
    .exec((err, video) => {
        if(err) return res.status(400).send(err);
        console.log(video)
        res.status(200).json({ success: true, video })
    })
});



router.post("/getVideoDetail", (req, res) => {
console.log("getVideoDetail")
    Video.findOne({ "_id" : req.body.videoId })
    .populate('writer')
    .exec((err, video) => {
        if(err) return res.status(400).send(err);
        res.status(200).json({ success: true, video })
    })
});















module.exports = router;