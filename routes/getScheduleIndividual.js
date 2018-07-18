
const url = require('url');
module.exports = function(app){

  app.get('/api/scheduleViewerServer/getSchedule', function(request, response){
    var urlParts = url.parse(request.url, true);
    var parameters = urlParts.query;
    var docName = parameters.name;

    var myResponse = `You asked for ${docName}'s schedule. Unfortunately I don't have it.`;

    response.json({message: myResponse});
  });
}
