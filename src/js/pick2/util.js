const generateStepElement = (step, index) => {
    const row = document.createElement("tr");
    const icon = document.createElement("td");
    const iconImage = document.createElement("img");
    const text = document.createElement("td");

    iconImage.alt = `${index}`;
    iconImage.src = step.imageURL;
    text.innerText = step.text;   

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

export { 
    generateStepElement,
    generateStepSpacer,
    generateHowToSteps,
    generateNavLink,
    generateSideNavigation,
    toggleTab,
    tabSelectorInit
 }