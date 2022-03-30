//home page
export const Home = (req, res) => {
    var mascots = [
        { name: 'Sammy', organization: "DigitalOcean", birth_year: 2012},
        { name: 'Tux', organization: "Linux", birth_year: 1996},
        { name: 'Moby Dock', organization: "Docker", birth_year: 2013}
    ];
    var tagline = "No programming concept is complete without a cute animal mascot.";

    res.render('../views/pages/index', {
        mascots: mascots,
        tagline: tagline
    });
}

export const About = (req, res) => {
    res.render('../views/pages/about');

} 