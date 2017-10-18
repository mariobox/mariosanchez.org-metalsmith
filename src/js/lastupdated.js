var lastUpdated = new Date(document.lastModified);
var lastUpdatedString = lastUpdated.toString();
var lastUpdatedArray = lastUpdatedString.split(' ');
document.getElementById('lastUpdated').innerHTML = '<p><strong>Last updated: </strong>' + lastUpdatedArray[1] + ' ' + lastUpdatedArray[2] + ' ' + lastUpdatedArray[3] + '</p></strong>'

