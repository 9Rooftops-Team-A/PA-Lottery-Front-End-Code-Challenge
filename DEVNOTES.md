Work Completed: 

HTML:
1) Cleaned up HTML by removing unused elements, adding indents, etc.
2) Removed body CSS style tags and unused CSS.
3) Removed inline CSS on the "How to Play" table and replaced with CSS as governed by parent CSS class. 
4) Added image Alt tags where necessary.
5) Added head meta viewport to preserve mobile aspect ratio.
6) Added broken banner image link, added image to the banner area.
7) Added HTML5 nav element to navigation.
8) Addressed columns in the tabs.
9) Replaced empty table rows/cells with CSS styling for spacing.
10) Restructured Pick2 logo/intro area. 
11) Removed all "nbsps" and "br" combinations and replaced with CSS margins.

CSS:
1) Added responsive styles/media queries.
2) Included some SCSS variables and mixins.
3) Added some CSS transitions and animations.
4) Nested elements, no more than 4 deep per SCSS standards.
5) Added fluidity to some elements (eg: Day/Evening Daily Numbers).
6) Reformatted “Winning Numbers” tab styles and added column functionality.
7) Reformatted select link styles in tab section for stronger focus.
8) All new CSS added is at the bottom below the “/* NEW JN 2022-01-10 */“ comment.

JS/Tabs:
1) Added hosted jQuery script for quick reference.
2) Added "paltabs.js" file to house custom JavaScript/jQuery.
3) Added tab functionality with simple jQuery element binding to handle the toggling of classes for tab transitions and display. The toggling of the tab and content classes triggers CSS3 animations. 


-------


Additional Recommendations:

The following is a list of additional items I would recommend or implement at the time of initial devleopment, but were omitted due to the understanding that while some code and markup could and should be refactored, some items need to remain as-is in their current environment for varying reasons. Some of the recommended adjustments listed could cause conflicts and some would simply take more time than is typically allotted for assigned tasks. And, as indicated in the task assignment, supporting legacy code is a given.

1) Remove unnecessary and redundant classes.
2) Remove (seemingly) unused HTML elements and sections (promo-area). This could cause a conflict if these elements are dynamically populated with content by the CMS or other scripts not currently present in this environment so I opted to leave them be.
3) Replace "How to Play" table layout with different HTML layout structure. This isn't vital, though it would be more ideal if the requirement be that the responsive/mobile display of this section formats differently. 
4) Use ems or rems for font sizes.
5) Use namespaces or BEM naming for CSS class names to avoid collisions. I stuck with a similar class naming convention for uniformity.
6) Group media queries in main.css. This is more of a personal preference.  
7) Develop mobile-first CSS.
8) Add additional meta and open graph tags to header. Because the understanding was that this would live within the site template, adding these tags to this page would be redundant as they would already be found within the site template.
9) An alternative for the aside nav for mobile styling would be to drop it below the main content on smaller screens and possibly have it hide and display by way of a trigger. It appeared that hiding it was a conscious choice so I opted to leave it as is on smaller screens.