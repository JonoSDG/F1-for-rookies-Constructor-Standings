var Crequest = new XMLHttpRequest();

    Crequest.open('Get', 'http://ergast.com/api/f1/current/constructorStandings.json');
    Crequest.onload = function () {
        for(var x = 0 ;x<10;x++){
            var Cresponse = Crequest.response;
            var CparsedData = JSON.parse(Cresponse);
            var CStanding = CparsedData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[x].position;
            var CPoints = CparsedData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[x].points;
            var Cname = CparsedData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[x].Constructor.name;
            var Cwiki = CparsedData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[x].Constructor.url;
            var Cnat = CparsedData.MRData.StandingsTable.StandingsLists[0].ConstructorStandings[x].Constructor.nationality;
            if(CStanding <=10){
                console.log(CStanding); 
                console.log(Cname); 
                console.log(CPoints);
                console.log(Cwiki);
                console.log(Cnat);

                document.getElementById("script").innerHTML +=
                `
                <table class="Drivertb carbg">
                    <tr class=" darken">
                        <th class="layt">
                            <h3>${CStanding}</h3>
                        </th>
                        <th>
                            <h4 class="Perma-num">${Cname}</h4>
                        </th>
                        <th class="layt">
                            <h4>${CPoints}pts</h4>
                        </th>
                        <th class="layt">
                            <img class="Conimg"  src="images/${Cname}logo.png" alt="${Cname}-logo-pic">
                        </th>
                    </tr>
                    <tr class="carbg">
                        <td colspan="4" style="background-image: url('images/Bread.png');background-size: 25% 100%; background-position:center;">
                            <img class="Carimg" src="images/${Cname}car.png" alt="${Cname}-car-pic">
                        </td>
                    </tr>
                    <tr class="Drivertb">
                        <td >
                            <img class="Driverimg" " src="images/${Cname}Drv2.png" alt="${Cname}-Drv2-pic">
                        </td>
                        <td>
                            <img class="Driverimg" " src="images/${Cname}Drv1.png" alt="${Cname}-Drv1-pic">
                        </td>
                        <td>
                            <img class="Pinfo" src="images/${Cnat}.png"alt="${Cnat}-country"> 
                        </td>
                        <td >
                            <a class="LearnM" href="${Cwiki}">learn more...</a>
                        </td>
                    </tr>
                    <br>
                </table>
                `

            }
        }
    }
    Crequest.send();