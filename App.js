//first i made a var and restored the main in it
var container = document.getElementById('main');
//then put the var onchange property and start my function
container.onchange = function(){
  //and ofcourse i must declare all the vars i am going to need
  var check = parseFloat(document.getElementById('totalBill').value);
  var percentage = document.getElementById('percentage').value;
  var clients = document.getElementById('clients').value;
  //put my formula 
  var tipValue = check * (percentage/ 100);
  var each = (check + tipValue)/ clients;
  var tipEach = tipValue/clients;
  //then push the results to html elements to be shown
  document.getElementById('percentageIndicator').innerHTML = percentage + '%';
  document.getElementById('number').innerHTML = clients + ' client';
  document.getElementById('tipTotal').innerHTML = tipValue.toFixed(2);
  document.getElementById('newAmount').innerHTML = each.toFixed(2);
  document.getElementById('each').innerHTML = tipEach.toFixed(2);
}