var figlet = require('figlet');

const menus = {
    main: `

    rovotics [command] <options>

    team -t ............... show current team members
    version -v ............ show package version
    help -h ............... show help menu for a command
    
    Created by Caelin Sutch '20 Marketing and Publications Lead, Software Lead
    `,

    team: `
    rovotics team <options> <arg>

    --class, -c [arg] ..... print class of [arg] 
        Available Years: 2018, 2019, 2020, 2021
    `,
    rov: `
    rovotics rov <rov>
        Available ROVs: Mako
    `,
    banner(input) {
        figlet.text(input, {
            font: 'Standard',
            horizontalLayout: 'fitted',
            verticalLayout: 'default'
        }, function(err, data) {
            if (err) {
                console.log('Something went wrong...');
                console.dir(err);
                return;
            }
            console.log(data);
        });
    }
};

module.exports = (args) => {
    menus.banner('ROVOTICS');

    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0];

    console.log(menus[subCmd] || menus.main)
};
