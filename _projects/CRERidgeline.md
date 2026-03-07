---
title: '⋱ Out of office, into the CRE Crisis'
subtitle: '[Ridgeline]: R, D3.js'
date: 2024-12-21 00:00:00
description: 
featured_image: '/images/project/gif/CREridgeline.gif'
---

## Commercial real estate to assets ratio Ridgeline plot
- The top 10% banks are lowering their CRE to assets ratio since 2010
- Small banks, however, are boosting their CRE-to-assets ratio since 2022

<div class="l-page">
<iframe width="100%" height="484" frameborder="0"
  src="https://observablehq.com/embed/2bf8b724b99a8329?cells=chart"></iframe>
</div>

The commercial real estate (CRE)-to-assets ratio is a quick way to see how much of a bank’s balance sheet is tied up in property, and how risky that bet looks over time. 

After the financial crisis, mid-tier banks steadily shrank their CRE exposure as tougher rules and scar tissue from the crash pushed them to play it safe. Then cheap money arrived, lending picked up and the ratio quietly crept back up at some lenders. 

A higher CRE-to-assets ratio doesn’t spell trouble on its own, but it does mean banks have more skin in the game if the property downturn deepens.

## The Graph

A lot of people are sick of line charts, but sometimes we can't really get rid of them entirely, so the alternative is to jazz them up a bit. Ridgeline plots are my favorite way to do that as they value both aesthetics and information density, and easier to show trends over time. 

I put the banks into **bins based on their size** for each quarter from 2009 to 2025, and then plotted the distribution of those ratios for each bin over time. The ridgeline plot allows us to see how the distribution of CRE-to-assets ratios has changed over time for different groups of banks.

░ *The full story is available to subscribers of [Risk.Net](https://www.risk.net/), a London-based financial news outlet* 

|**Data Source** |Risk.Net|
|**Tools used** |Rstudio, Observable (D3.js)|

