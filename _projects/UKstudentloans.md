---
title: '⋱ UK Student Loans borrower stimulator'
subtitle: '[Jittered plot]: D3.js'
date: 2026-01-21 00:00:00
description: 
featured_image: '/images/project/mp4/UKstudentloan.mp4'
---

Rachel Reeves’ Budget in November [revealed plans](https://www.theguardian.com/money/2026/feb/24/why-the-student-loans-row-is-escalating-and-what-it-means-for-graduates) to freeze the student loan repayment threshold at £29,385 until 2030. Recently, I’ve seen many fresh graduates appearing on television sharing horror stories about being missold student loans and saddled with debts that could grow to more than twice what they originally borrowed.

I looked into it and found that the UK student loan system is fairly complex, with different interest rates depending on income and a 30-year write-off period. It made me wonder whether the system is really as flawed as some graduates claim — and, if so, whether the Conservatives’ proposal to <mark>cap interest at RPI</mark>, or the Liberal Democrats’ suggestion <mark>not to freeze the threshold</mark>, would actually make a difference.

So I built a UK student loan scenario simulator in Observable. The idea is simple: imagine you’re the UK’s chancellor and can redesign the Plan 2 student loan system - what would you change?

<div class="obs-wrap">
<iframe width="100%" height="1073" frameborder="0"
  src="https://observablehq.com/embed/5b39e4ebc5e2c1ee@311?cells=viewof+controls%2Cchart"></iframe>
</div>

## It's the repayment-salary ratio

If you play around with the controls, you’ll quickly find that what creates the seemingly unfair situation - <mark>where lower-income graduates end up paying twice as much as higher-income ones</mark> - is neither the interest rate nor the repayment threshold, but the repayment percentage.

Right now, anyone earning above the salary threshold has to allocate 9% of their income towards repaying their student loan. Under this design, people earning around <mark>£40k</mark> can end up paying significantly more than others — in some cases almost three times what they originally borrowed.

If you dial the repayment rate down to <mark>1.5%–5%</mark>, the distribution looks much fairer. Government revenue would not necessarily fall — it could even increase.

I’m not sure why the system is designed this way, or whether I’m missing something. Presumably the Treasury has already run the numbers.
