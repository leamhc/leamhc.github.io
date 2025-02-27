---
title: '⋱ Everything Everywhere Remastered'
subtitle: '{Interactive Heatmap}: Rstudio, API'
date: 2024-06-30 00:00:00
description: 
featured_image: '/images/project/png/spotify/spotifydumpbell.png'
---

## The Story

I scrapped the 100 greatest artists of all time ranked by [Rolling Stone](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446) in 2010 and see if their songs are still popular using the Spotify API. The artists below are ordered in their number of followers on the music platform. Apparantly, Eminem still got a fairly strong fan base.

## The Graph

Here's a dumbbell showing the duration between the artists' first album and their latest one - most of which are remastered versions. Only one of them is from the 30s (Ray Charles). Newer artists tend to be slightly more popular, too.

<div class="l-page">
  <iframe src="{{ '/images/project/plotly/dumpbell_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1500px" width="100%" style="border: 0px grey;"></iframe>
</div>
