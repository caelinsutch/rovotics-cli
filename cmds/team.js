const teamMembers = {
    2018: `
    Drake Charamuga - Manufacturing
    Risheek Pingili - Software
    Noah Pettinato - Software
    Sam Paragary - Marketing and Publications
    `,
    2019: `
    James Monroe - Manufacturing
    Austin Law - Manufacturing
    Daniel Brennan - Manufacturing 
    Hayden Kaufman - Electronics
    Adam Graham - Software
    `,
    2020: `
    Michael Equi (MIKE) - Electronics
    Jaiveer Gahunia - Software
    Caelin Sutch - Software/Marketing and Publications
    `,
    2021: `
    Joe Watanabe - Manufacturing
    Luke Rosellini - Manufacturing
    Avery Gonsalves - Electronics
    Andrew Chin - Electronics
    Alden Parker - Software
    `
}

module.exports = (args) => {
    // The subcommand is set to whatever the next command is in rovotics team [command]
    const subCmd = args._[0] === 'team'
    ? args._[1]
    : args._[0];

    console.log(teamMembers[subCmd] || "year not found")
};
