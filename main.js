// npm init -y
// npm install request 
// npm install cheerio
let request = require("request");
let cheerio = require("cheerio");
let getRepoPageHtml = require("./repopage");
//let pdfkit = require('pdfkit');
let url ="https://github.com/topics";
let fs = require("fs");
//let path = require("path");
console.log("Before");
    request(url, cb);
function cb(error, response, html) {
    if (error) {
        console.log(error)
    } else if
            (response.statusCode == 404){
                console.log("page not found");
            
        }
    else {
        extractHtml(html);
    }
}
function extractHtml(html) {
    let searchTool = cheerio.load(html);
    let linkElem = searchTool(".no-underline.d-flex.flex-column.flex-justify-center");
    for (let i = 0; i < linkElem.length; i++) {
        let link = searchTool(linkElem[i]).attr("href");
        //console.log(href);
        let topic = link.split("/").pop();

      

        let fullLink = "https://github.com" + link;
      console.log(fullLink)
      console.log("`````````````````");
        getRepoPageHtml(fullLink, topic);
        }
}

// function processrepoPage(fullLink) {
//     request(fullLink, cb);
//     function cb(err, resp, html) {
//         if (err) {
//             console.log(err);
//         } else {
//             getRepoLinks(html);
//         }
//     }
// }
// function getRepoLinks(html) {
//     let selTool = cheerio.load(html);
//     let topicElem = selTool(".h1-mktg");
//     let topicName = topicElem.text().trim();
//     dirCreater(topicName);
//     let arr = selTool("a.text-bold");
//     for (let i = 0; i < 8; i++) {
//         let link = selTool(arr[i]).attr("href");
//         // console.log(link);
//         let repoName = link.split("/").pop();
//         // fileCreator(topicName, fileName);
//         let fullLink = "https://github.com" + link + "/issues";
//         getIssuelinks(fullLink, topicName, repoName);
//     }
//     console.log("`````````````````````````````")
// }
// function getIssuelinks(fullLink, topicName, fileName) {
//     console.log(fullLink)
//     request(fullLink, cb);
//     function cb(err, response, html) {
//         if (err) {
//             console.log(err);
//         } else {
//             extractIssues(html, topicName, fileName);
//         }
//     }
// }
// function extractIssues(html, topicName, fileName) {
//     let selTool = cheerio.load(html);
//     let anchorsArr = selTool("a[data-hovercard-type='issue']");
//     let arr = [];
//     for (let i = 0; i < anchorsArr.length; i++) {
//         let name = selTool(anchorsArr[i]).text();
//         let link = selTool(anchorsArr[i]).attr("href");
//         arr.push({
//             Name: name,
//             Link: "https://github.com" + link
//         })
//     }
//     //  array -> pdf file
//     let filePath = path.join(__dirname, topicName, fileName + ".pdf");
//     let pdfDoc = new PDFDocument;
//     pdfDoc.pipe(fs.createWriteStream(filePath));
//     pdfDoc.text(JSON.stringify(arr));
//     pdfDoc.end();
//     // fs.writeFileSync(filePath, JSON.stringify(arr));
//     // console.table(arr);
// }
// function dirCreater(topicName) {
//     let folderPath = path.join(__dirname, topicName);
//     if (fs.existsSync(folderPath) == false) {
//         fs.mkdirSync(folderPath);
//     }
// }
// function fileCreator(topicName, fileName) {
//     let filePath = path.join(__dirname, topicName, fileName + ".json");
//     if (fs.existsSync(filePath) == false) {
//         fs.openSync(filePath, "w");
//     }

// }
// console.log("after");
