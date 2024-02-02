---
layout: page
title: ggplot/plotly practice - Top Artists of the 2010s on today's Spotify
description: Who still got the most popular songs on the music platform?
img: /assets/img/project/photo/RS_spotify.jpeg
importance: 1
category: Data
related_publications: false
---

I scrapped the 100 greatest artists of all time ranked by [Rolling Stone](https://www.rollingstone.com/music/music-lists/100-greatest-artists-147446) in 2010 and see if their songs are still popular using the Spotify API. The artists below are ordered in their number of followers on the music platform. Apparantly, Eminem still got a fairly strong fan base.

<div class="l-page">
  <iframe src="{{ '/assets/plotly/heatmap_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1500px" width="100%" style="border: 0px grey;"></iframe>
</div>

To be fair, it's not just Eminem; hip-hop, in general, has been gaining a lot of momentum over the past decade—perhaps being recognized more by fans than by the music critics in Rolling Stone who made the list.

<div class="l-page">
  <iframe src="{{ '/assets/plotly/bumpchart_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1500px" width="100%" style="border: 0px grey;"></iframe>
</div>

Here's a dumbbell showing the duration between the artists' first album and their latest one - most of which are remastered versions. Only one of them is from the 30s (Ray Charles). Newer artists tend to be slightly more popular, too.

<div class="l-page">
  <iframe src="{{ '/assets/plotly/dumpbell_spotify.html' | relative_url }}" frameborder='0' scrolling='no' height="1500px" width="100%" style="border: 0px grey;"></iframe>
</div>