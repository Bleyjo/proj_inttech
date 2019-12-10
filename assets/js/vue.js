//UWS1920 COMP10020 Internet Technologies Conference Web Application //
// by B00346666 Jon A. Gilmour //

// Vue.JS contains all values relating to the Vue web technology //
// Strings can be stored in Vue to easily edit an entire site for ease of access and editing without having to go through a HTML file looking for specific elements //
// It makes updating content on websites much easier //
// It also helps with translating sites since only this file would need to be handed over to a translator //
// HTML Snippets are parsed as text rather than being processed as HTML //

// Vue objects are structured similar to .JSON objects, which makes them easy to understand //

//----- Index Heading -----//
var heading = new Vue({
    el: '#heading',
    data: {
        title: "SCP Conference",
        subtitle: "A conference for those interested in the SCP Foundation.",
        contact: "Contact US",
        events: "What's On",
        location: "How to Get Here"
    }
});

var footer = new Vue({
    el: '#footer',
    data: {
        index: "Home",
        events: "What's On",
        location: "How to Get Here",
        contact: "Contact Us"
    }
});

var carousel = new Vue({
    el: '#carousel',
    data: {
        drbrightconf: "Dr. Bright giving a conference talk",
        drbridgeconf: "Dr. Bridge giving a conference talk",
        fullconfhall: "A conference hall full of steadfast scientists"
    }
});