function intialize() {

    getFile('resources/patient.txt', function(dataObj) {
        for (var i = 0; i < dataObj.length; i++) {
            render(dataObj[i]);
        }
    });

}

function getFile(file, cb) {
    var studentrestdata = new XMLHttpRequest();
    studentrestdata.onreadystatechange = function() {
        if (studentrestdata.readyState == 4 && studentrestdata.status == 200) {
            var dataObj = JSON.parse(studentrestdata.responseText);
            if (typeof cb === 'function')
                cb(dataObj);
        }
    };
    studentrestdata.open("GET", file, true);
    studentrestdata.send();
}

function render(dataObj) {
    var x = document.getElementsByClassName("patient_basicData");
    for (var i = 0; i < x.length; i++) {
        var attr = x[i].getAttribute("name");
        x[i].innerHTML = dataObj[attr];
    }

    getFile('resources/patientAllergy.txt', function(dataObj) {
        
        var table = document.getElementById("allergy");
        for (var i = 0; i < dataObj.length; i++) {
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
            severity.innerHTML = dataObj[i].severity;
            reaction.innerHTML = dataObj[i].reaction;
            lastUpdated.innerHTML = dataObj[i].lastUpdated;
            verified.innerHTML = dataObj[i].verified;
            status.innerHTML = dataObj[i].status;

        }
    });

    getFile('resources/medication.txt', function(dataObj) {
        var table = document.getElementById("medication");
        for (var i = 0; i < dataObj.length; i++) {
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
            units.innerHTML = dataObj[i].units;
            route.innerHTML = dataObj[i].route;
            sig.innerHTML = dataObj[i].sig;
            qty.innerHTML = dataObj[i].qty;
            days.innerHTML = dataObj[i].days;
            startDate.innerHTML = dataObj[i].startDate;
            discontinuedDate.innerHTML = dataObj[i].discontinuedDate;
            status.innerHTML = dataObj[i].status;
            instructions.innerHTML = dataObj[i].instructions;

        }
    });

    getFile('resources/activeProblems.txt', function(dataObj) {

        var table = document.getElementById("activeProblems");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);
            var medicalProblem = row.insertCell(0);
            var onsetDate = row.insertCell(1);
            var status = row.insertCell(2);

            medicalProblem.innerHTML = dataObj[i].medicalProblem;
            onsetDate.innerHTML = dataObj[i].onsetDate;
            status.innerHTML = dataObj[i].status;

        }
    });



   





    getFile('resources/inactiveProblems.txt', function(dataObj) {
        var table = document.getElementById("inactiveProblems");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);
            var medicalProblem = row.insertCell(0);
            var onsetDate = row.insertCell(1);
            var status = row.insertCell(2);

            medicalProblem.innerHTML = dataObj[i].medicalProblem;
            onsetDate.innerHTML = dataObj[i].onsetDate;
            status.innerHTML = dataObj[i].status;

        }
    });

    getFile('resources/procedures.txt', function(dataObj) {
        var table = document.getElementById("procedures");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);
            var procedure = row.insertCell(0);
            var date = row.insertCell(1);
            var status = row.insertCell(2);
            var provider = row.insertCell(3);
            procedure.innerHTML = dataObj[i].procedure;
            date.innerHTML = dataObj[i].date;
            status.innerHTML = dataObj[i].status;
            provider.innerHTML = dataObj[i].provider;

        }
    });



    getFile('resources/laboratoryResults.txt', function(dataObj) {
        var table = document.getElementById("laboratoryResults");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var test = row.insertCell(0);
            var dateTime = row.insertCell(1);
            var result = row.insertCell(2);
            var interp = row.insertCell(3);
            var refRange = row.insertCell(4);
            var resultComment = row.insertCell(5);
            test.innerHTML = dataObj[i].test;
            dateTime.innerHTML = dataObj[i].dateTime;
            result.innerHTML = dataObj[i].result;
            interp.innerHTML = dataObj[i].interp;
            refRange.innerHTML = dataObj[i].refRange;
            resultComment.innerHTML = dataObj[i].resultComment;

        }
    });

     getFile('resources/microbiologyResults.txt', function(dataObj) {
        var table = document.getElementById("microbiologyResults");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var procedure = row.insertCell(0);
            var source = row.insertCell(1);
            var result = row.insertCell(2);
            var collectionDateTime = row.insertCell(3);
            var resultDateTime = row.insertCell(4);
            procedure.innerHTML = dataObj[i].procedure;
            source.innerHTML = dataObj[i].source;
            result.innerHTML = dataObj[i].result;
            collectionDateTime.innerHTML = dataObj[i].collectionDateTime;
            resultDateTime.innerHTML = dataObj[i].resultDateTime;

        }
    });


     getFile('resources/advanceDirectives.txt', function(dataObj) {
        var table = document.getElementById("advanceDirectives");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var advanceDirective = row.insertCell(0);
            var response = row.insertCell(1);
            var recordedDateTime = row.insertCell(2);
            advanceDirective.innerHTML = dataObj[i].advanceDirective;
            response.innerHTML = dataObj[i].response;
            recordedDateTime.innerHTML = dataObj[i].recordedDateTime;
            
        }
    });
      
      getFile('resources/complaintAndReasonforVisit.txt', function(dataObj) {
        var table = document.getElementById("complaintAndReasonforVisit");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var encounter = row.insertCell(0);
            var admitDate = row.insertCell(1);
            var chiefComplaint = row.insertCell(2);
            var reasonForVisit = row.insertCell(3);

            encounter.innerHTML = dataObj[i].encounter;
            admitDate.innerHTML = dataObj[i].admitDate;
            chiefComplaint.innerHTML = dataObj[i].chiefComplaint;
            reasonForVisit.innerHTML = dataObj[i].reasonForVisit;
            
        }
    });

     getFile('resources/hospitalDischargeMedications.txt', function(dataObj) {
        var table = document.getElementById("hospitalDischargeMedications");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var medication = row.insertCell(0);
            var dose = row.insertCell(1);
            var units = row.insertCell(2);
            var route = row.insertCell(3);
            var sig = row.insertCell(4);
            var qty = row.insertCell(5);
            var days = row.insertCell(6);
            var orderDate = row.insertCell(7);
            var status = row.insertCell(8);
            var instructions = row.insertCell(9);

            medication.innerHTML = dataObj[i].medication;
            dose.innerHTML = dataObj[i].dose;
            units.innerHTML = dataObj[i].units;
            route.innerHTML = dataObj[i].route;
            sig.innerHTML = dataObj[i].sig;
            qty.innerHTML = dataObj[i].qty;
            days.innerHTML = dataObj[i].days;
            orderDate.innerHTML = dataObj[i].orderDate;
            status.innerHTML = dataObj[i].status;
            instructions.innerHTML = dataObj[i].instructions;
            
        }
    });  


     getFile('resources/encounters.txt', function(dataObj) {
        var table = document.getElementById("encounters");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var encounter = row.insertCell(0);
            var facility = row.insertCell(1);
            var location = row.insertCell(2);
            var admitDate = row.insertCell(3);
            var dischargeDate = row.insertCell(4);
            var attendingProvider = row.insertCell(5);

            encounter.innerHTML = dataObj[i].encounter;
            facility.innerHTML = dataObj[i].facility;
            location.innerHTML = dataObj[i].location;
            admitDate.innerHTML = dataObj[i].admitDate;
            dischargeDate.innerHTML = dataObj[i].dischargeDate;
            attendingProvider.innerHTML = dataObj[i].attendingProvider;
            
        }
    });

      getFile('resources/encounterDiagnosis.txt', function(dataObj) {
        var table = document.getElementById("encounterDiagnosis");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var encounterDiagnosis = row.insertCell(0);
            var onsetDate = row.insertCell(1);
           
            encounterDiagnosis.innerHTML = dataObj[i].encounterDiagnosis;
            onsetDate.innerHTML = dataObj[i].onsetDate;
           
        }
    });


      getFile('resources/familyHistory.txt', function(dataObj) {
        var table = document.getElementById("familyHistory");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var query = row.insertCell(0);
            var response = row.insertCell(1);
            var instance = row.insertCell(2);
            var dateRecorded = row.insertCell(3);
            var comment = row.insertCell(4);

            query.innerHTML = dataObj[i].query;
            response.innerHTML = dataObj[i].response;
            instance.innerHTML = dataObj[i].instance;
            dateRecorded.innerHTML = dataObj[i].dateRecorded;
            comment.innerHTML = dataObj[i].comment;
            
        }
    });

      getFile('resources/immunizations.txt', function(dataObj) {
        var table = document.getElementById("immunizations");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var name = row.insertCell(0);
            var dateGiven = row.insertCell(1);
            var type = row.insertCell(2);
           

            name.innerHTML = dataObj[i].name;
            dateGiven.innerHTML = dataObj[i].dateGiven;
            type.innerHTML = dataObj[i].type;
       
            
        }
    });

      getFile('resources/payers.txt', function(dataObj) {
        var table = document.getElementById("payers");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var payerName = row.insertCell(0);
            var policyType = row.insertCell(1);
            var coverParty = row.insertCell(2);
            var coveredPartyId = row.insertCell(3);
            var relationship = row.insertCell(4);
            var subscriber = row.insertCell(5);
            var subscriberId = row.insertCell(6);
           

            payerName.innerHTML = dataObj[i].payerName;
            policyType.innerHTML = dataObj[i].policyType;
            coverParty.innerHTML = dataObj[i].coveredParty;
            coveredPartyId.innerHTML = dataObj[i].coveredPartyId;
            relationship.innerHTML = dataObj[i].relationship;
            subscriber.innerHTML = dataObj[i].subscriber;
            subscriberId.innerHTML = dataObj[i].subscriberId;
       
       
            
        }
    });


            getFile('resources/socialHistory1.txt', function(dataObj) {
        var table = document.getElementById("socialHistory1");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var query = row.insertCell(0);
            var response = row.insertCell(1);
            var dateRecorded = row.insertCell(2);
            var comment = row.insertCell(3);
           

            query.innerHTML = dataObj[i].query;
            response.innerHTML = dataObj[i].response;
            dateRecorded.innerHTML = dataObj[i].dateRecorded;
            comment.innerHTML = dataObj[i].comment;
            
        }
    });

              getFile('resources/socialHistory2.txt', function(dataObj) {
        var table = document.getElementById("socialHistory2");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var query = row.insertCell(0);
            var response = row.insertCell(1);
            var startDate = row.insertCell(2);
            var stopDate = row.insertCell(3);
           

            query.innerHTML = dataObj[i].query;
            response.innerHTML = dataObj[i].response;
            startDate.innerHTML = dataObj[i].startDate;
            stopDate.innerHTML = dataObj[i].stopDate;
            
        }
    });

                    getFile('resources/vitalSigns.txt', function(dataObj) {
        var table = document.getElementById("vitalSigns");
        for (var i = 0; i < dataObj.length; i++) {

            var row = table.insertRow(1);

            var vitalReading = row.insertCell(0);
            var result = row.insertCell(1);
            var referenceRange = row.insertCell(2);
            var collectionDateTime = row.insertCell(3);
           

            vitalReading.innerHTML = dataObj[i].vitalReading;
            result.innerHTML = dataObj[i].result;
            referenceRange.innerHTML = dataObj[i].referenceRange;
            collectionDateTime.innerHTML = dataObj[i].collectionDateTime;
            
        }
    });









     







   

}
