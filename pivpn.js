let activePage = GetURLParameter('activePage');
if (activePage == null) {
    activePage = 0;
}

function UpdateAddon() {
    let options = '<p>' +
        'No option available for this addon' +
        '</p>'
    $(options).insertBefore("#optionsInsertionPoint")

    $.getJSON('dynamic.json', function (data) {
        $.extend(data, getData('static'));
        let vpnClientsData = data.vpn_clients;
        if (vpnClientsData !== 'No Clients Connected!') {
            $("#addonInsertionPoint")
                .html(parseTextToDisplay(vpnClientsData));
        }
    })
}

function parseTextToDisplay(vpn_clients_data) {
    let html_rows = '';
    vpn_clients_data.split('\n')
        .forEach(client => {
            html_rows += '<tr>';
            let client_data = client.replace(/\s+/g, ' ').trim().split(' ');
            let date_connected = client_data.slice(5, 10).join(' ');

            client_data.slice(0, 5).forEach(client_data_value => {
                html_rows += '<td>' + client_data_value + '</td>';
            });
            html_rows += '<td>' + date_connected + '</td></tr>'
        });
    return html_rows;
}

$(function () {
    UpdateAddon();
});
