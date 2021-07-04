import { generateSideNavigation, generateHowToSteps, tabSelectorInit } from "./util.js";
import { navigationLinks } from "./navigationLinks.js";
import { howToSteps } from "./howToSteps.js"

generateSideNavigation(navigationLinks);
generateHowToSteps(howToSteps);
tabSelectorInit();