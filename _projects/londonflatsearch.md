---
title: '⋱ A Tool For Your London Flat Search'
subtitle: '{Interactive Bubble Chart}: Rstudio, API'
date: 2025-01-01 00:00:00
description: 
featured_image: '/images/project/gif/londonflat.gif'
---
## The Story

I hate flat hunting - especially in London.

There are so many factors to consider, yet so little time to decide. You could be googling an area’s crime rate and scrolling through Reddit for reviews, only to realize that as you were piecing together all this information, someone else had already snapped up the flat.

What if you could see all that information at a glance for every postcode district in London?

Well...voilà.

I made a bubble chart for that purpose. As you hover over the bubbles, you'll see the information of that postcode district (*best viewed on a PC browser for full functionality*).

---
<div class="l-page">
  <iframe src="{{ '/images/project/plotly/leaflat.html' | relative_url }}" frameborder='0' scrolling='no' height="1100px" width="100%" style="border: 0px grey;"></iframe>
</div>

Yes, frustrated by my unrewarding flat search, I spent my Christmas holiday (yes, really) extracting data from various APIs and websites - crime rates, tube stations, commute times, median rent - and turning it into an interactive Plotly bubble graph. 

You’d think something like this probably already existed, but to my surprise, no one had made one, especially not for postcode districts as they aren’t officially used for mapping property or crime data, even though renters and estate agents use them all the time.

It’s not the most polished graph - as I only built it for personal use - but it was incredibly useful in helping me to land my current flat.

|**Data Source** | Police.UK (crime rate), Google API (commute time, which is set to my office on Fleet Street, central london), Findthatpostcode API (postcode crime mapping), tube-postcodes/Robin Kearney@GitHub (tube station per postcode)|
|**Tools used** |Rstudion (Selenium, httr, jsonlite), various APIs|
|**Commute time** |Based on travel time to EC4A 3DQ by public transport|
