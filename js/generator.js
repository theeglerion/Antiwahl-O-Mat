const parties = ["CDU",
        "DIE LINKE",
        "SPD",
        "GRÜNE",
        "AfD",
        "FDP",
        "Die PARTEI",
        "Tierschutzpartei",
        "PIRATEN",
        "Die Grauen",
        "FREIE WÄHLER",
        "Gesundheitsforschung",
        "ÖDP",
        "du",
        "V-Partei³",
        "DKP",
        "MLPD",
        "BüSo",
        "SGP",
        "LKR",
        "NPD",
        "Die Humanisten",
        "Team Todenhöfer",
        "Volt"];

function generate(){
        var rnd = parties[Math.floor(Math.random()*parties.length)];
        return rnd;
}
 

