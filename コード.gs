// sheetはcampaign名のシートを新規作成
var spreadsheet = SpreadsheetApp.getActive();
var sheet = spreadsheet.getSheetByName("テスト");

function getReport() {
  // JSON形式にフォーマットしてdataにする
  var urlFetchOption = {
    'method' : 'get',
    'headers':{
      'Authorization':'Bearer '+'3224410ef775f0f1a9d82d30046878f1-us16'
    },
  };
  
  var url = "https://us16.api.mailchimp.com/3.0/reports/fcf87609fd";
  var responce = UrlFetchApp.fetch(url,urlFetchOption);
  
  var json = responce.getContentText();
  var data = JSON.parse(json);
  
  var id = data.id;
};



  


