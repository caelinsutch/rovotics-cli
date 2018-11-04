const rovs = {
    mako: `
    
                   #######
        ###      ##       ##     ####
        ###     #           #    ####
        ###########       ###########
        #   #      ######     #   #     
    #### # #                   # # ####         
    #### #                       # ####
         #                       #         
       #############################
    
    `
}

module.exports = (args) => {
    const subCmd = args._[0] === 'rov'
    ? args._[1]
    : args._[0];

    console.log(rovs[subCmd] || "rov not found")
};
