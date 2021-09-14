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
    "Volt"
];

function generate() {

    let result = "";
    var radio1 = document.querySelector('[name="r1"]:checked').value;

    switch (radio1) {

        case "yes":
            window.open("https://www.exit-deutschland.de/");
            break;

        case "neutral":
            result = parties[Math.floor(Math.random() * parties.length)];
            break;

        case "no":
            while (result == "") {
                result = parties[Math.floor(Math.random() * parties.length)];

                if (result == 'NPD' || result == 'AfD') {
                    result = "";
                }
            }
            break;
    }

    console.log(result);
    return result;
}

$(document).on('click', "#q1 li", function() {
    var index = $(this).removeClass('active').index();
    $('#q1 input:radio').eq(index).prop('checked', true).addClass('active');
})

$(document).on('click', "#q2 li", function() {
    var index = $(this).removeClass('active').index();
    $('#q2 input:radio').eq(index).prop('checked', true).addClass('active');
})