const generateNavLink = (navData, isFirstLink) => {
    const listItem = document.createElement("li");
    const link = document.createElement("a");

    link.innerText = navData.caps ? navData.text.toUpperCase() : navData.text;
    link.href = navData.link;

    if(isFirstLink) {
        listItem.className = "list CMSListMenuHighlightedLI";
        link.className = "list CMSListMenuLinkHighlighted";
    } 

    else {
        link.className = "list CMSListMenuLink";
    }

    listItem.appendChild(link);

    return listItem;
}

const generateSideNavigation = navLinks => {
    console.log("Generating Side Navigation...");

    const sideNavigation = document.querySelector("#subshown");
    
    navLinks.forEach((navLink, index) => {
        const isFirst = index === 0;
        const newLink = generateNavLink(navLink, isFirst);

        sideNavigation.appendChild(newLink);
    });

    console.log("Side Navigation Complete...")
}

const toggleTab = event => {
    const winningTab = document.querySelector("#winning-tab");
    const howToTab = document.querySelector("#how-to-tab");
    const winningPanel = document.querySelector("#winningnumbers");
    const howToPanel = document.querySelector("#howtoplay");
    const tabId = event.target.id;

    if(tabId === howToTab.id) {
        howToTab.className = "active";
        winningTab.className = "";

        howToPanel.className = "tab show";
        winningPanel.className = "tab";
    } 

    else if(tabId === winningTab.id) {
        howToTab.className = "";
        winningTab.className = "active";

        howToPanel.className = "tab";
        winningPanel.className = "tab show";
    }

    window.scrollTo(0, 0);
}

const tabSelectorInit = () => {
    console.log("Initializing Tab Panel...");
    const winningTab = document.querySelector("#winning-tab");
    const howToTab = document.querySelector("#how-to-tab");

    winningTab.addEventListener("click", toggleTab);
    howToTab.addEventListener("click", toggleTab);

    console.log("Tab Panel Complete...");
}

const navigationLinks = [
    {
        text: "PICK 2",
        link: "/Draw-Games/PICK-2.aspx",
        caps: true
    },
    {
        text: "PICK 3",
        link: "/Draw-Games/PICK-3.aspx",
        caps: true
    },
    {
        text: "PICK 4",
        link: "/Draw-Games/PICK-4.aspx",
        caps: true
    },
    {
        text: "PICK 5",
        link: "/Draw-Games/PICK-5.aspx",
        caps: true
    },
    {
        text: "WILD BALL",
        link: "/Draw-Games/Wild-Ball.aspx",
        caps: true
    },
    {
        text: "Cash4Life",
        link: "/Draw-Games/Cash4Life.aspx",
        caps: true
    },
    {
        text: "Cash 5",
        link: "/Draw-Games/Cash-5.aspx",
        caps: true
    },
    {
        text: "Match 6",
        link: "/Draw-Games/Match-6.aspx",
        caps: true
    },
    {
        text: "Mega Millions",
        link: "/Draw-Games/Mega-Millions.aspx",
        caps: true
    },
    {
        text: "Powerball",
        link: "/Draw-Games/Powerball.aspx",
        caps: true
    },
    {
        text: "Treasure Hunt",
        link: "/Draw-Games/Treasure-Hunt.aspx",
        caps: true
    },
    {
        text: "Millionaire Raffle",
        link: "/Draw-Games/Millionaire-Raffle.aspx",
        caps: true
    },
    {
        text: "Winning Numbers History",
        link: "/Draw-Games/Winning-Numbers-History.aspx"
    },
    {
        text: "Pool Play",
        link: "/Draw-Games/Pool-Play.aspx"
    },
    {
        text: "How to Claim Your Prize",
        link: "/About-PA-Lottery/How-to-Claim-Your-Prize.aspx"
    },
    {
        text: "Drawing Schedule",
        link: "/Draw-Games/Drawing-Chart-Desktop.aspx"
    },
    {
        text: "Watch Drawings",
        link: "/Draw-Games/Watch-Drawings.aspx"
    }
]

console.log('ran');
generateSideNavigation(navigationLinks);
tabSelectorInit();