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
    rovotics team <options>

    --class, -c [year] ..... print only class of [year] 
        Available Years: 2018
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
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0];

    menus.banner('ROVOTICS');
    console.log(menus[subCmd] || menus.main)
};
