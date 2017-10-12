
function intialize(){	

	        getFile("resources/patient.txt");
	        for(var i=0;i<window.dataObj.length;i++){

	            render(dataObj[i]);  
	       }
	   
	
}


function getFile(file){
 
   var studentrestdata = new XMLHttpRequest();
   
   studentrestdata.onreadystatechange = function() {
   if ( studentrestdata.readyState == 4 &&  studentrestdata.status == 200) {
            window.dataObj = JSON.parse( studentrestdata.responseText);
        }
    };  
    studentrestdata.open("GET", file, false);
   studentrestdata.send();

}













function render(dataObj){
	
	
	var x = document.getElementsByClassName("patient_basicData");
    for(var i=0;i<x.length;i++){  
        var attr=x[i].getAttribute("name");
        x[i].innerHTML = dataObj[attr];   
     }
    var patientAllergy = new XMLHttpRequest();
	 patientAllergy.open("GET", "resources/patientAllergy.txt", true);
	 patientAllergy.send();
	 patientAllergy.onreadystatechange = function() {
	    if ( patientAllergy.readyState == 4 &&  patientAllergy.status == 200) {
	        var dataObj = JSON.parse( patientAllergy.responseText);
	        
	        var i;
	        for(i=0;i<dataObj.length;i++){
	        	     table= document.getElementById("allergy");
    var row = table.insertRow(1);
    var allergen = row.insertCell(0);
    var type = row.insertCell(1);
    var severity = row.insertCell(2);
    var reaction = row.insertCell(3);
    var lastUpdated = row.insertCell(4);
    var verified = row.insertCell(5);
    var status = row.insertCell(6);
    allergen.innerHTML = dataObj[i].allergen;
    type.innerHTML = dataObj[i].type;
    severity.innerHTML=dataObj[i].severity;
    reaction.innerHTML=dataObj[i].reaction;
    lastUpdated.innerHTML=dataObj[i].lastUpdated;
	verified.innerHTML=dataObj[i].verified;
	status.innerHTML=dataObj[i].status;
	        	  
	        	}
	    }
	};




var medications = new XMLHttpRequest();
     medications.open("GET", "resources/medication.txt", true);
     medications.send();
     medications.onreadystatechange = function() {
        if ( medications.readyState == 4 &&  medications.status == 200) {
            var dataObj = JSON.parse( medications.responseText);

            var i;
            for(i=0;i<dataObj.length;i++)
                {
                     table= document.getElementById("medication");

    var row = table.insertRow(1);
    var medication = row.insertCell(0);
    var dose = row.insertCell(1);
    var units = row.insertCell(2);
    var route = row.insertCell(3);
    var sig = row.insertCell(4);
    var qty = row.insertCell(5);
    var days = row.insertCell(6);
    var startDate = row.insertCell(7);
    var discontinuedDate = row.insertCell(8);
    var status = row.insertCell(9);
    var instructions = row.insertCell(10);

    medication.innerHTML = dataObj[i].medication;
    dose.innerHTML = dataObj[i].dose;
    units.innerHTML=dataObj[i].units;
    route.innerHTML=dataObj[i].route;
    sig.innerHTML=dataObj[i].sig;
    qty.innerHTML=dataObj[i].qty;
    days.innerHTML=dataObj[i].days;
    startDate.innerHTML=dataObj[i].startDate;
    discontinuedDate.innerHTML=dataObj[i].discontinuedDate;
    status.innerHTML=dataObj[i].status;
    instructions.innerHTML=dataObj[i].instructions;

                  
                }
        }
    };





var activeProblems = new XMLHttpRequest();
     activeProblems.open("GET", "resources/activeProblems.txt", true);
     activeProblems.send();
     activeProblems.onreadystatechange = function() {
        if ( activeProblems.readyState == 4 &&  activeProblems.status == 200) {
            var dataObj = JSON.parse( activeProblems.responseText);

            var i;
            for(i=0;i<dataObj.length;i++)
                {
                     table= document.getElementById("activeProblems");
    var row = table.insertRow(1);
    var medicalProblem = row.insertCell(0);
    var onsetDate = row.insertCell(1);
    var status = row.insertCell(2);

    medicalProblem.innerHTML = dataObj[i].medicalProblem;
    onsetDate.innerHTML = dataObj[i].onsetDate;
    status.innerHTML=dataObj[i].status;

                  
                }
        }
    };



var inactiveProblems = new XMLHttpRequest();
     inactiveProblems.open("GET", "resources/inactiveProblems.txt", true);
     inactiveProblems.send();
     inactiveProblems.onreadystatechange = function() {
        if ( inactiveProblems.readyState == 4 &&  inactiveProblems.status == 200) {
            var dataObj = JSON.parse( inactiveProblems.responseText);

            var i;
            for(i=0;i<dataObj.length;i++)
                {
                     table= document.getElementById("inactiveProblems");

    var row = table.insertRow(1);
    var medicalProblem = row.insertCell(0);
    var onsetDate = row.insertCell(1);
    var status = row.insertCell(2);

    medicalProblem.innerHTML = dataObj[i].medicalProblem;
    onsetDate.innerHTML = dataObj[i].onsetDate;
    status.innerHTML=dataObj[i].status;

                  
                }
        }
    };
    



var procedures = new XMLHttpRequest();
     procedures.open("GET", "resources/procedures.txt", true);
     procedures.send();
     procedures.onreadystatechange = function() {
        if ( procedures.readyState == 4 &&  procedures.status == 200) {
            var dataObj = JSON.parse( procedures.responseText);

            var i;
            for(i=0;i<dataObj.length;i++)
                {
                     table= document.getElementById("procedures");

    var row = table.insertRow(1);
    var procedure = row.insertCell(0);
    var date = row.insertCell(1);
    var status = row.insertCell(2);
    var provider = row.insertCell(3);
    procedure.innerHTML = dataObj[i].procedure;
    date.innerHTML = dataObj[i].date;
    status.innerHTML=dataObj[i].status;
    provider.innerHTML=dataObj[i].provider;

                  
                }
        }
    };













    for(i=0;i<5;i++){
   table= document.getElementById("payer");
    var row = table.insertRow(1);
    var payerName = row.insertCell(0);
    var ploicyType = row.insertCell(1);
    var coverParty = row.insertCell(2);
    var coveredPartyId = row.insertCell(3);
    var relationship = row.insertCell(4);
    var subscriber = row.insertCell(5);
    var subscriberId = row.insertCell(6);
    payerName.innerHTML = "SELF­ PAY";
    ploicyType.innerHTML = "Personal Payment (Cash ­No Insurance)";
    coverParty.innerHTML="TEST HIE TWO";
    coveredPartyId.innerHTML="TEST HIE TWO";
    relationship.innerHTML="Patient";
	subscriber.innerHTML="";
	subscriberId.innerHTML="";}
	


}
