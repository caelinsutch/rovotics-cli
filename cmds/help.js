const menus = {
    main: `
    rovotics [command] <options>

    team .............. show current team members
    version ............ show package version
    help ............... show help menu for a command
    
    Created by Caelin Sutch '20 Marketing and Publications Lead, Software Lead
    `,

    team: `
    outside today <options>

    --class, -c [year] ..... print only class of [year] 
        Available Years: 2018
    `,
};

module.exports = (args) => {
    const subCmd = args._[0] === 'help'
        ? args._[1]
        : args._[0]

    console.log(menus[subCmd] || menus.main)
}
