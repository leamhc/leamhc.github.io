---
title: '⋱ Eminem Still Got it on Spotify'
subtitle: '{Interactive Heatmap}: Rstudio, API'
date: 2024-06-30 00:00:00
description: 
featured_image: '/images/project/gif/spotifyheatmap.gif'
---

## The Story

I scraped the 100 Greatest Artists of All Time, ranked by [Rolling Stone](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446) in 2010, to see if their songs are still popular in 2024 using the [Spotify API](https://developer.spotify.com/documentation/web-api).

The artists below are ranked by their number of followers on Spotify, with each rectangle representing one of their five most popular songs.

Surprisingly, Eminem still has a strong fan base on the platform.

|Data Source| Sportify API, Rolling Stone Magazine|
|Tools Used| Rstudio (Plotly)|

## The Graph

<div class="l-page">
  <iframe src="{{ '/images/project/plotly/heatmap_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1500px" width="100%" style="border: 0px grey;"></iframe>
</div>

