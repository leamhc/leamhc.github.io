---
title: '⋱ UK Student Loan borrowers stimulator'
subtitle: '[Jittered plot]: D3.js'
date: 2026-01-21 00:00:00
description: 
featured_image: '/images/project/mp4/UKstudentloans.mp4'
---

## In a nutshell

* I built an interactive chart to explore <mark> which part of the UK’s Plan 2 student loan formula</mark> drives uneven final repayment amounts.
* Spoiler alert: it’s the <mark>repayment–salary ratio</mark>.
* Graduates earning £40k in their first job could end up repaying <mark>three times</mark> what they originally borrowed.

## The Graph

<div class="obs-wrap">
<iframe width="100%" height="1350" frameborder="0"
  src="https://observablehq.com/embed/5b39e4ebc5e2c1ee@403?cells=title%2Cchart%2Cviewof+controls"></iframe>
</div>

## Who are overpaying the most? The average earners

Rachel Reeves’ Budget in November [revealed plans](https://www.theguardian.com/money/2026/feb/24/why-the-student-loans-row-is-escalating-and-what-it-means-for-graduates) to freeze the student loan repayment threshold at £29,385 until 2030. Recently, I’ve seen many fresh graduates appearing on television sharing horror stories about being missold student loans and saddled with debts that could grow to more than twice what they originally borrowed.

I looked into it and found that the UK student loan system is fairly complex, with different interest rates depending on income and a 30-year write-off period. It made me wonder whether the system is really as flawed as some graduates claim — and, if so, whether the Conservatives’ proposal to <mark>cap interest at RPI</mark>, or the Liberal Democrats’ suggestion <mark>not to freeze the threshold</mark>, would actually make a difference.

So I built a UK student loan scenario simulator in Observable. The idea is simple: imagine you’re the UK’s chancellor and can redesign the Plan 2 student loan system - what would you change?

Under the current system, fresh graduates with starting salaries of <mark>£40k to £50k</mark> would end up overpaying the most for their degrees (as shown using the default settings of the controls).

Bear in mind that the median gross annual earnings for full-time employees in the UK were <mark>£37,430</mark> in 2024, while the figure for graduates aged 16–64 was <mark>£42,000</mark>. This suggests that many average earners could end up being the hardest hit.

## It's the repayment-salary ratio

If you play around with the controls, you’ll quickly find that what creates the seemingly unfair situation - <mark>where lower-income graduates end up paying twice as much as higher-income ones</mark> - is neither the interest rate nor the repayment threshold, but the repayment percentage.

Right now, anyone earning above the salary threshold has to allocate 9% of their income towards repaying their student loan. Under this design, people earning around <mark>£40k</mark> can end up paying significantly more than others - in some cases almost three times what they originally borrowed.

If you dial the repayment rate down to <mark>1.5%–5%</mark>, the distribution looks much fairer. 