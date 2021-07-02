const howToSteps = [
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/1.gif",
        text: "Visit your PA Lottery retailer and pick up a PICK 2 playslip."
    },
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/2.gif",
        text: "Play up to five panels on your PICK 2 playslip. On each game panel, pick any two-digit number. Or, select the Quick Pick option to have your numbers randomly selected by the computer.<br /><a class='launchgameplayslip' href='/Draw-Games/PICK-2/Sample-Playslip.aspx'>View Sample Playslip</a>"
    },
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/3.gif",
        text: "Pick your play type: Straight, Box, Straight/Box, Super Straight, Front Digit, Back Digit. (<a href='/Draw-Games/PICK-2/Prizes-Chances.aspx'>Learn more about&nbsp;PICK 2 play types here.</a>)"
    },
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/4.gif",
        text: "Choose the drawing(s) you wish to play. You can play day, evening, or both drawings."
    },
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/5.gif",
        text: "You may play PICK 2 for up to seven draws in advance."
    },
    {
        imageURL: "https://www.palottery.state.pa.us/PaLotteryWebSite/media/Misc/Logos/wildball_bullet.png",
        text: "If desired, select the &#39;NEW&#39; Wild Ball option. To learn more about how it works, <a href='/Draw-Games/Wild-Ball.aspx'>click here</a>."
    },
    {
        imageURL: "https://www.palottery.state.pa.us/Custom/uploadedimages/games-assets/6.gif",
        text: "Be sure to check your PICK 2 ticket to verify that the information is correct and legible.<br /><a class='launchgameticket' href='/Draw-Games/PICK-2/Sample-Ticket.aspx'>View Sample Ticket</a>"
    },
    {
        imageURL: "https://www.palottery.state.pa.us/PaLotteryWebSite/media/Misc/Logos/7.gif",
        text: "Look for PA Lottery results: You can check PICK 2 Lottery results by watching the <a href='/Draw-Games/Watch-Drawings.aspx#watch_daydrawing'>PICK 2 day drawing</a> on the PA Lottery website daily after 1:35 p.m., watching the PICK 2 evening drawing nightly at 6:59 p.m. on TV or <a href='/Draw-Games/Watch-Drawings.aspx#watch_eveningdrawing'>streaming online</a>, checking our website and official mobile app, and subscribing to <a href='/About-PA-Lottery/Footer/Subscribe-to-RSS.aspx'>Lottery RSS feeds</a>. You can also&nbsp;visit&nbsp;the <a href='/VIP-Players-Club.aspx'>Lottery VIP Players Club</a> to sign up for emails and text messages to receive winning Lottery number alerts for PICK 2 and other <a href='/Draw-Games.aspx'>PA Lottery games</a>."
    }
]

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

const generateStepElement = (step, index) => {
    const row = document.createElement("tr");
    const icon = document.createElement("td");
    const iconImage = document.createElement("img");
    const text = document.createElement("td");

    iconImage.alt = `${index}`;
    iconImage.src = step.imageURL;
    text.innerHTML = step.text;   

    icon.appendChild(iconImage);
    row.appendChild(icon);
    row.appendChild(text);

    return row;
}

const generateStepSpacer = () => {
    const row = document.createElement("tr");
    const spacer = document.createElement("td");

    spacer.innerHTML = '&nbsp;'

    row.appendChild(spacer);
    row.appendChild(spacer)

    return row;
}

const generateHowToSteps = steps => {
    const howToPanel = document.querySelector(".how-to-play-steps");

    steps.forEach((step, index) => {
        const stepElement = generateStepElement(step, index);
        howToPanel.appendChild(stepElement);

        if(index !== howToSteps.length - 1) {
            const spacer = generateStepSpacer();
            howToPanel.appendChild(spacer);
        }    
    });
}

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
    const sideNavigation = document.querySelector("#subshown");
    
    navLinks.forEach((navLink, index) => {
        const isFirst = index === 0;
        const newLink = generateNavLink(navLink, isFirst);

        sideNavigation.appendChild(newLink);
    });
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
    const winningTab = document.querySelector("#winning-tab");
    const howToTab = document.querySelector("#how-to-tab");

    winningTab.addEventListener("click", toggleTab);
    howToTab.addEventListener("click", toggleTab);
}

generateSideNavigation(navigationLinks);
generateHowToSteps(howToSteps);
tabSelectorInit();