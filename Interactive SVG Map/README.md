<h1>Welcome to the Interactive SVG Map</h1>

It works pretty much out of the box just use whatever part of the code you need, but in orer to work you need at the very least you need 
the info box div as well as the entirtey of the SVG.

It uses jquery so that will need to be installed as well

<hr>

Each State is its own path and uses its own id, so you can change all of the states using the path selector, or you can target the specific
state id to change individual ones.

In order to change the info in the info box, each path (state) has its own data-info attribute that contains its own markup. Just markup whatever
needs to be in the info box for that state.

By default, the map functions on a click, but you can change it to hover by changing the jquery click function to a hover function if youd prefer (though that wont work as well on mobile)
There are also options to have the info box follow your mouse around and disappear on mouse out of the state you are hovering over.
