---
layout: page
title: finance notes
permalink: /finance-notes
---

# [Finance and Capital Markets](https://www.khanacademy.org/economics-finance-domain/core-finance)

### Interest and Debt 

**compound interest**: when you calculate interest by taking the initial amount (principal) and _also include_ the previously accumulated interest.  the general equation for figuring out how much money you'll have with interest that compounds annually and by starting out with a given interest rate, principal, and *n* number of years is:
<amp-mathml layout="container" inline
    data-formula="monies = principal * (interest) ^n">
</amp-mathml>
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

**credit card institutions**: first off there are _payment processors_. Examples include Visa, Mastercard, Amex, and Discover.  They maintain computer networks and policies and whatnot that connect that connect banks to each other.  An individual gets a credit card from an issuing bank that is within one of the processing networks. In order to accept payment from individuals with cards from different payment processors, businesses need to sign up with "acquirer banks".  That basically means signing up with a bank that lets them accept these transactions for a fee -- usually in the ballpark of 2% of the transaction. The benefit for the business is that it is then easier for their customers to pay. The acquirer bank gets about 0.2%, the network gets about 0.1%, and the issuing bank gets the remaining 1.7%.  

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

### Housing

**balance sheet**: essentially a table of assets and liabilities.



### Stocks and bonds

**stock**: a share of a company. if you own stock then you own a percentage of the equity of that company. you are a part-owner. 

**bond**: a bond is when you _lend_ money. if you buy bonds you become a part-lender.

**equity**: $$equity = assets - liability$$. liabilities are all of the things the company owes, assets are all of the things with potential future or current value, and equity is what is leftover for shareholders.

**market cap**: current _actual_ bids multiplied by number of shares.  aka market's determination of worth as opposed to the company's books. it is the "markets value of the owners equity". often the market cap can actually be higher than the books numbers because people think the company is worth more than the sum of its identifying parts. these things are called the "intangibles". 

**short selling**: essentially betting that a stock is going to go down in the future.  the way it mechanically works is that you "borrow" a share from broker, and instantly sell it.  that means that you are up the current value, and liable a share.  then in the future when you sell the short, you need to buy the stock at its price. so if it went down then you make the money that is the difference between what you initially sold it for and what it currently costs. what is super risky about it is that you can lose infinite money if the stock does really well. a perfect short seller is good for the market in that s/he makes the stock less volatile. one interesting thing about short sellers are that they are the _only_ people in the market hoping for things to go down. everyone else wants it to go up (long sellers, the companies themselves, financial press, government, etc.).  

**gross and operating profit**: gross profit is simply the item price minus item cost. the operating profit is when you then also subtract all of the operating costs like people's salaries and the building rent. before operating profit becomes actual profit, you first take away the loan payments for that month and then you have the pretax income.   

**capital structure**: thats when you look at the business more holistically to see where they got their money and how much equity they are running with. if they needed less liability and loans then they have more equity and the worse the interest rate the worst it is for them.  

**stock price**: the price of a stock tells you nothing about if it is a good deal or not.  it does have some effects on who pays attention to it. For example some only deal in penny stocks and some some don't buy any below 5 dollars.  

**statements**: there are three that people pay attention to. balance sheet, income statement, and cash flow statement.   balance sheet is like a snapshot of a company frozen in time that tells you assets, liabilities at that moment.  income statements are basically the in between. cash statements explain the income statements.

**return on assets (ROA)**: $$\dfrac{assets} {income}$$.  There are actually many different valid definitions about this so its always worth asking someone what they mean. Could be EBIT (earnings before income tax), or net income / assets, or (net income + interest - tax savings from interest) / assets, or even (operating profit) / assets.

**earnings terms**: trailing twelve months (TTM) earnings is all earning in the past year. earnings per share (EPS) is $$earning/shares$$.  price to earnings ratio (PEA) $$stock price / eps$$.  forward earnings is the amount that analysts predict a company is going to make in the future. the people doing the research are called on the sell side. 

**price to earnings (P/E)**: this is one of the things people use to figure out if something is a good or bad price for a stock. in general you are willing to pay for a higher P/E if you think its going to grow, and the reverse if you think the company is diminishing.  

**depreciation**: literally means when something loses value over time. in accounting/bussiness context, it is a useful concept for illustrating how something that initially might seem like a recurring big payment is actually a cost spread out over time.  For example lets say you are a divorced parent and need to pay your child's tuition once every other year. you can either capture your earnings to be annually spiky, or you can view the tuition payment as something that depreciates over a two year period that you "use up" half of each year.  the textbook example was factory equipment that needs to be replaced every two years. So when you buy new equipment, you see it as an asset that then depreciates over time instead of as a cost.  

**amortization**: the same thing as depreciation but for intangibles. e.g. lets say you purchase a patent that lasts 4 years.  then you should actually spread out its cost over 4 years instead of marking it as an all-at-once-cost.  

**price to earnings ratio issues**: while P/E is very useful for quickly figuring out the health of a business, it loses a lot of info especially around how the company is financed or "capitalized". A better way of evaluating would be the **enterprise value** which is calculated via $$EV = (market cap) + debt - cash$$.  It is the theoretical purchase price if you wanted to 100% takeover the assets of the company which is why you need to pay market cap _and_ debt.  

**EBITDA**: earnings before interest, taxes, depreciation, and amortization. So same thing as EBIT but then add back D+A.  We care about this more than EBIT sometimes because it is more representative of the raw cash coming out every year seeing as both D and A have probably already been paid off.  5xEBITDA is usually considered a good valuation for a company.

#### Life of a company -- from birth to death

**venture capitalists**: this generally describes investors that will get involved with a company at various stages.  the earliest kind are "angel investors" and those are often the first kind a baby company will go to.  the next stage of investor is called a "seed investor".  they are usually people with experience starting businesses and have MBAs and manage money for a living.  the first round of seed is called a "series A". A "series B" is then your third-ish attempt at money -- usually when you have assets, website, some kind of revenue, and you think you just need some more money to push you to profitable. an up round is when you are valuated as more than the last round, a down round is the inverse. 

**valuation**: how much the company is valued to be. this needs to happen any time you get an investment.  at the earliest stages `value = idea + unique skills of employees + cash `.  

**IPO**: stands for initial public offering. It is a way for a company to raise a ton of money and also make shares more liquid at the same time. Normally the company managing the IPO and distributing the shares makes an around 7% of the money raised by selling shares.  the actual IPO investors are giving money to the company that it will probably then use to pay people's salaries, hire more people, and generally invest in themselves.  When other people in the future buy and sell stocks in a non-PO format, its usually people buying shares from other people -- so the money doesn't actually end up going to the company in question. Why do shares have value? People can resell them, and some companies (even though its not popular now) actually _do_ give out dividends to shareholders. when you file for an IPO you register with the SEC and then list on a trading platform like NASDAQ.  

**equity vs. debt**: a company can always decide to raise money by giving away more equity _or_ by taking on debt.  If they are confident they are going to increase the value of the company, it may be smarter to incur debt - otherwise equity.  It all depends on the circumstances. Equity would be selling stocks/shared, debt would be selling Bonds -- both of these are considered *Securities*.  Bond payment has higher priority than stocks. There is senior secured, senior unsecured, and junior securities (riskiness and order of getting paid in event of liquidation). 

**bankruptcy**: hopefully does not happen to any company I am a part of. nobody is usually happy about this but it does obviously happen. just like for an individual, there are two kinds of bankruptcies, chap7 and chap11 and they play out in a similar way.  Question is: who gets what and in what priority order.  The general order is that people with bonds get paid first, and there is a seniority order there. Then its people with stock if that is still possible.  

**stock dilution**: dilution can refer to one of two things. either that each share become worth less of the company, or that each share is worth less money.  The former is _always_ true when issuing new shares, but the latter is not always true since sometimes the whole pie can get bigger with the money raised from the sale.  

**stock acquisition**: one company can acquire another just by making a deal with the shareholder to give them stock.  

**basic leveraged buyout** (LBO): its when you take out a loan to help with a buyout in order to increase your return on investment especially in the short-term (and present value dictates that is smarter). for e.g. lets say you were to buy a business for 10 million that has a net income of one million per year. If you buy it outright then you make 10% year on your investment each year.  If instead you borrow 9 million with a 10% interest from a bank, you can probably get way better year over year investment. The promise to the bank is that they can have the business if you fail to pay. All of a sudden you may be able to get 40% on your personal 1mil investment each year.  

**corporate loans vs. personal mortgage**: while a person usually pays interest and also tries to pay off their principal, a company usually pays interest only and at the end of the term pays the entire principal -- they do that by taking out a new loan for their original principal at a new rate.  So they sort-of never actually pay back the principal.  

**treasury yield curve**: lending to the treasury is considered the least risky you can. There are t-bills, t-bonds, and t-notes. Bills are just IOUs that the treasury will pay you back that much plus interest, usually between one month and one year. notes are ones that are from one year to ten years. 10+ years are considered bonds. The yield curve is basically the graph that shows how much interest you will get for a how long of a loan you give the govt.  The trend is that the longer you let them keep it, the better the rate you get. One thing that also affects it is the popularity of the note (supply/demand)



### Personal Finance

**Traditional IRA**: IRA stands for individual retirement account. You can put up to 5k per month (6k if you are over 50).  You put money into the investment account _pretax_.  You can't take it out of the account without a penalty of until you are 59.5.  The tax is 10%. Also you don't get taxed on all of the "capital gains" from the investments in the account. When you end up withdrawing it you finally _do_ get taxed on it.  The two biggest wins are:

1. deferred taxation and none on capital gains
2. lower tax bracket when you finally do withdraw the money since you will be retired.

**Roth IRA**: named after William Roth who was a senator in Delaware that helped shepherd this into creation. The difference is that Roth IRAs do not defer tax payment. You pay taxes initially but then you _do not_ need to pay taxes when you withdraw. What this means is that you get to fully skip capital gains tax while your money grows.  One other big benefit of Roth IRAs is that you do not get penalized for taking your principal out early before you are 59.5.

**401(k)**: very similar to a traditional IRA. Taxes are deferred. Here are the differences

- Much higher limit (around 20k instead of 5k).
- Organized by your employer, they will also often match parts of your investments, and they also manage the investments.
- Taken our before your paycheck.

**Open-end mutual fund**: Someone or some group thinks they are good at managing money. They can market themselves to the public and sell shares in themselves. As their bucket of money (investments) goes up and down so does the value of the shares. **AUM** = assets under management. **NAV** = Net Asset Value = $$\frac{assets - liabilities}{shares}$$. When a people sell their shares, it means the fund needs to give them back money and then the pool gets smaller but the NAV doesn't change.

**Closed-end mutual fund**: There is only one time period, at fund creation time, that the fund markets to the public.  Then once the fund is created shares cannot be created or redeemed from the fund. Liquidity is created by buying/selling on secondary markets. Its a big advantage for the fund creator since they don't need to keep any cash on hand to pay back shareholders that want to redeem.

**Exchange traded funds (ETFs)**: it is a combo of closed/open mutual funds.  Its like open-end except only a few approved big organizations are allowed to buy/sell big blocks of shares all at once.  It is beneficial for the fund not to have to deal with a ton of small transactions and instead deal with a few massive transactions.  Those approved corporations can then buy/sell the shares on secondary markets (stock market etc).  In general this creates reduced fees + less overhead in general. They also have a ton of liquidity: you can trade at any second of the day instead of just at the end of it like open-end ones.

**Ponzi schemes**: as long as more money comes in then oe