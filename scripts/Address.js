/**
 * @author gary.gan
 */
var addresses = ["Molenstraat 32", "Room 1403, Sino Life Tower"],
    postBuses = ["4201 CX Gorinchem"],
    postcodes = ["200120"],
    places = ["Gorinchem", "Shanghai"],
    countries = ["China", "Netherlands"];

function createAdresRandomData(count) {
    var data = [];

    for (var i = 0; i < count; i++) {
        var address = addresses[Math.floor(Math.random() * addresses.length)],
            postbus = postBuses[Math.floor(Math.random() * postBuses.length)],
            postcode = postcodes[Math.floor(Math.random() * postcodes.length)],
            place = places[Math.floor(Math.random() * places.length)],
            country = countries[Math.floor(Math.random() * countries.length)];

        data.push({
            Id: i + 1,
            Adres: address,
            Postbus: postbus,
            Postcode: postcode,
            Plaats: place,
            Land: country
        });
    }
    return data;
}
