let request = require("request");
let cheerio = require("cheerio");
let fs = require("fs");
let path = require("path");
let pdfkit = require("pdfkit");
function getIssuesHtml(url, topic, repoName){  
    request(url, cb);
    function cb( err, response, html){
        if(err){
            console.log(err);
        }
    //     else if(response.statusCode == 404){
    //            console.log("page not found");
    //    }
        else{
          getIssues(html); 
  //console.log(html);     
 }
}
    function getIssues(html){
       // console.log("fjffjskfjsafjfljj")
        let searchTool = cheerio.load(html);
        let issuesElem =searchTool(".Link--primary.v-align-middle.no-underline.h4.js-navigation-open.markdown-title");
      //  console.log(issuesElem.length);
        let arr = [];
        for(let i = 0; i < issuesElem.length; i++){
            let link = searchTool(issuesElem[i]).attr("href");
            console.log(link);
            arr.push(link);

        }
      //  console.log(topic, "             ", arr);
      let folderPath= path.join(__dirname,topic);
      dirCreater(folderPath);
      let filePath = path.join(folderPath,repoName+ ".pdf");
      //console.log(filePath);
      let text = JSON.stringify(arr); 
      let pdfDoc = new pdfkit();
      pdfDoc.pipe(fs.createWriteStream(filePath));
      pdfDoc.text(text);
      pdfDoc.end();
     // fs.writeFileSync(filePath,);
    }

}
module.exports =  getIssuesHtml;
function dirCreater(folderPath){
    if(fs.existsSync(folderPath) ==false){
        fs.mkdirSync(folderPath);
    }

}