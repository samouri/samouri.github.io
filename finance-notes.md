---
layout: page
title: finance notes
permalink: /finance-notes
---

# [Finance and Capital Markets](https://www.khanacademy.org/economics-finance-domain/core-finance)

### Interest and Debt 

**compound interest**: when you calculate interest by taking the initial amount (principal) and _also include_ the previously accumulated interest.  the general equation for figuring out how much money you'll have with interest that compounds annually and by starting out with a given interest rate, principal, and *n* number of years is:
$$
monies = principal * (interest) ^n
$$
Lets say you wanted to figure out how many years it would take to _double_ your principal. Moving around a few numbers would yield:
$$
years = \log_{interest} 2
$$

**rule of 72**: this is a heuristic to figure out how long it takes to double your money. the rule is that if you take 72 and divide it by your interest percentage, then you'll get pretty damn close to how long it takes to double it.  for example: at 6% it'll take 72/6 which gives us 12 years. The actual answer is 11.9.  Not bad!  

**simple interest**: opposite of compounding interest. every time unit you keep calculating the interest based off of the original principal instead of the accumulation of principal and interest. The formula would be:
$$
total = principal*( 1 + rate*time)
$$

**APR**: it stands for annual percentage rate. credit card companies often lie in that they will tell you a number that is `365 * daily percentage rate` when in reality it should be _compounding_ and the real number will actually be `365^rate`.  

**Credit card institutions**: first off there are _payment processors_. Examples include Visa, Mastercard, Amex, and Discover.  They maintain computer networks and policies and whatnot that connect that connect banks to each other.  An individual gets a credit card from an issuing bank that is within one of the processing networks. In order to accept payment from individuals with cards from different payment processors, businesses need to sign up with "acquirer banks".  That basically means signing up with a bank that lets them accept these transactions for a fee -- usually in the ballpark of 2% of the transaction. The benefit for the business is that it is then easier for their customers to pay. The acquirer bank gets about 0.2%, the network gets about 0.1%, and the issuing bank gets the remaining 1.7%.  

**payday loans**: these are usually awful loans that people take out in desperate times where the interest rate is ~25% and compounds on a two week basis. "usury" means an unreasonable interest rate, and 25% compounding means 32,000% effective APR. they don't care about credit when giving out payday loans: only the pay stub and pay date. The person would fill out a check with the date of they pay day on it, and the loan shark cashes the check on that day to ensure higher priority over things like rent and bills

**e**: is a constant often used in compound interest equations that equals about ~2.7182. It comes up naturally when you as you calculate $$\lim_{n\to\infty} (1+1/n)^n$$.  For example, $$(1+1/1000)^1000  = 2.716$$

**continuously compounding interest**: $$P(1+r/n)^{nt}$$ where p is principal, r is percentage interest rate, n is compound periods per unit time, and t is total time. For example, lets say we have interest that compounds daily and principal interest is 100 dollars and 5% interest rate, then over the course of one year the equation is: $$100(1+\dfrac{0.05}{12})^{12*1} =105.116 $$. But what about _actually_ continuously compounding interest? We can figure it out by taking the limit as n approaches infinity $$\lim_{n\to\infty} P * (1+1/n)^{nt} = Pe^{rt}$$.  

**present value**: the value of a future amount of money today. basically like doing interest calculations in reverse.  Lets say I would give you $110 one year from today. What is that worth right now? A key to the equation is what the "risk free rate" or "discount rate". Aka the amount of money you can assume you would get per year if you made the safest investment. The way to calculate present value for a series of payments promised over time is to sum up the present value for each of those.  

**bankruptcy**: what happens if someone can't pay back their loans? a _debtor_ is someone who owes money, a _creditor_ is someone that is lent money and is owed it.  In the past in Greece you would become a slave. In the 1800s there was a debtor's prison which mean't you were in prison until your family or friends could pay off your debt. In the U.S.A. we have something called bankruptcy. If you can't pay back your creditors you file something called chapter 7, which means they seize all of your assets and give the profits from selling it to all the people you owe.  There are numerous catches: some kinds of loans aren't forgotten (student loans / child support etc.), and it goes on your credit for 10 years. Another kind of bankruptcy is called a chapter 13 which is a reorganization of your debt.  you give a sob story, ask for a renegotiation of terms, maybe get lowered debt and a better rate and promise to pay within the next 3-5 years.  it benefits the creditors because it helps the debtor not fall into a chapter 7. one of the issues is that it also lands on your credit report for 7 years. Here are the numbers of people filing for each after the 2007 financial crisis

| year | Chapter 7 | Chapter 13 |
| ---- | --------- | ---------- |
| 2007 | 413k      | 277k       |
| 2008 | 560k      | 334k       |
| 2009 | 819k      | 370k       |

