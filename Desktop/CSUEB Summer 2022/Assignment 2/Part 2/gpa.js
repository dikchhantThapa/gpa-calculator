
function load() {

  var data = [];
  var line = document.getElementById("input").value;

  if (line == null || line == "") {
    return;
  }

  var lines = line.split(/\n/);
  // splits the input into an array of substrings(for inputs seperated by whitespace)

  for(var i in lines){

    var values = lines[i].trim().split(/\s+/);
    
    // as long as there are three values 
    if(values.length == 3) {
      var name = values[0];
      var grade = values[1];
      var creditHours = parseInt(values[2]);

      var item = {
        "name" : name,
        "grade": grade,
        "credithours": creditHours
      };

      data.push(item);
      // push items from item variable into the empty array data 
    }

  }

  display(data);

}


function display (data) {
  var totalGradePoints = 0;
  var totalCreditHours = 0;
  for (var i in data) {
    item = data[i];
    totalGradePoints += item['credithours'] * gradePoints(item['grade']);
    totalCreditHours += item['credithours'];
    gpaAverage = totalGradePoints/totalCreditHours;  
    gpaAverage = gpaAverage.toFixed(3);  
  }

  document.getElementById('gradePoints').value = "" + totalGradePoints;
  document.getElementById('creditHours').value = "" + totalCreditHours;
  document.getElementById('avgGPA').value = "" + gpaAverage;

} 


function gradePoints(grade) {
  if (grade == 'A') return 4;
  if (grade == 'B+') return 3.5;
  if (grade == 'B') return 3;
  if (grade == 'C+') return 2.5;
  if (grade == 'C') return 2;
  if (grade == 'D') return 1;
}



