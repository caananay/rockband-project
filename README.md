* [Rockband project](#rockband-project)
* [Technologies used](#technologies-used)
* [Credits](#credits)
* [Testing/Issues Debugged](#testing/issues-debugged)
* [Test Scenarios](#test-scenarios)

### Rockband project

   The Rockband project is my Stream One project for Code Institute Learning.
   It is a website designed for the Monkees Rockband and consists of four (Home, Event, Music, Band) pages.
   It has been designed using the AngularJS framework, Bootstrap, HTML5, CSS3 and Javascript/JQuery.

### TECHNOLOGIES USED:

   *HTML5 AND CSS3*: were used to design the web page layout and styling.

   *BOOTSTRAP3*: Bootstrap3 was used to make the website page layout 100% responsive.

   *ANGULARJS*: AngularJS was used to make the website a SPA. Using AngularJS i created 

   * <em>DIRECTIVES</em> for the navigation bar and the footer elements which are shared by all the pages of the website.

   * <em>SERVICES</em> which call a JSON data file using the $http directive and checks the selected data on the webpage against the data in the JSON file and returns true if a match is found.

   * <em>CONTROLLER</em> which hosts most of the pages controlling scripts

   *JAVASCRIPT/JQERY*:

   Javascript/jQeury was used to add functionalities to the page such as 
    - changing the navigation bar color on scroll
    - toggling infomation button on the home page
    - checking if band is available for a gig on date chosen by a potential customer (date availability is checked against a date object loaded via a JSON data file 

### TESTING/ISSUES DEBUGGED
 
   Initially to check available calendar dates in the service.js file i used the getTime() function to check that the calender date and the available date specified in the availDates.json file was equal, this worked fine but months later after the daylight savings changed and because of +1hr change in clock it no longer matched. To correct this I used toDateString() to match just the dates.

#### TEST SCENARIOS
   1. Responsiveness of website across some devices (laptops, ipad and samsung note3) and major browsers.

   2. Newsletter signup should open as a modal.

   3. User should be able to check for bands available dates.

   4. User should be able to share music page on facebook or twitter.

   5. User should be able to play audio and video files embeded in website.

   6. When booking the band, booking form submit button is enable only when form is filled.

   7. Validate form fields for booking form.