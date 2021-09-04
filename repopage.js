let request = require("request");
let cheerio = require("cheerio");
let  getIssuesHtml = require("./issues");
function getRepoPageHtml(url, topic){
    request(url, cb);
    function cb( err, response, html){
        if(err){
            console.log(err);
        } else if
        (response.statusCode == 404){
            console.log("page not found");
        
    }
        else{
          getReposLink(html);
  //console.log(html);     
 }
    }
    function getReposLink(html){
        let searchTool = cheerio.load(html);
//         let headingsArr = searchTool(".f3.color-text-secondary.text-normal.lh-condensed");

//       console.log(topic);
//         for(let i = 0; i < 8; i++){
            
// let twoAnchors = searchTool(headingsArr[i]).find("a"); 
//            //let link = searchTool('a[class="text-bold"]');
//             let link = searchTool('a[class="text-bold"]').attr("href");
//         //     console.log(link);
//            let fullLink = `https://github.com/topics${link}/issues` ;
//           //
//           console.log(fullLink)
//           
let topicElem = searchTool(".h1-mktg");
    let topicName = topicElem.text().trim();
   // console.log("name", topicName);
   // dirCreater(topicName);
    let arr = searchTool("a.text-bold");
    for (let i = 0; i < 8; i++) {
        let link = searchTool(arr[i]).attr("href");
     //    console.log(link);
        let repoName = link.split("/").pop();
        // fileCreator(topicName, fileName);
        let fullLink = "https://github.com" + link + "/issues";
//        
console.log(fullLink)
getIssuesHtml(fullLink, topic, repoName);
}
        console.log("`````````````````````````")
    }
    }
module.exports = getRepoPageHtml;
