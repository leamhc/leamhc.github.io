---
title: '⋱ Hip Hop Tops Other Genres'
subtitle: '{Interactive Heatmap}: Rstudio, API'
date: 2024-06-30 00:00:00
description: 
featured_image: '/images/project/gif/spotifybumpchart.gif'
---

## The Story

I scrapped the 100 greatest artists of all time ranked by [Rolling Stone](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446) in 2010 and see if their songs are still popular in 2024 using the [Spotify API](https://developer.spotify.com/documentation/web-api). 

The artists below are ranked by Rolling Stone's list (left) and by their number of followers on Spotify (right).

## The Graph

Hip-hop has gained significant momentum over the past decade. Looking at the graph, it seems hip-hop artists are more widely recognised by fans than they were by music critics at the time.

*You can click on a genre in the graph to show or hide it.*

|Data Source| Sportify API, Rolling Stone Magazine|
|Tools Used| Rstudio (Plotly)|


<br>

<div class="l-page">
  <iframe src="{{ '/images/project/plotly/bumpchart_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1300px" width="100%" style="border: 0px grey;"></iframe>
</div>
