const quotes = [
    {
        quote:"어떤 이가 열등감 때문에 우물쭈물하고 있는 동안, 다른 이는 실수를 저지르며 점점 우등한 사람이 되어간다.",
        author:"Henry C. Link"},
    {
        quote:"새로운 요리의 발견이 새로운 별의 발견보다 인간을 더 행복하게 만든다.",
        author:"Anthelme Brillat-Savarin"
    },
    {
        quote:"유일한 진정한 행복은 목적을 위해 몰입하는데서 온다.",
        author:"William Cowper"
    },
    {
        quote:"자식을 키우다 그 역설과 부조리함에 웃게 될 때가 있다. 하지만 때로는 순수하게 기뻐서 웃기도 한다.",
        author:"Barbara Schapiro"
    },
    {
        quote:"자유롭게 피어나기. 이것이 내가 내린 성공의 정의다.",
        author:"Gerry Spence"
    },
    {
        quote:"나는 성공의 열쇠는 모른다. 그러나 실패의 열쇠는 모두의 비위를 맞추려 하는 것이다.",
        author:"Bill Cosby"
    },
    {
        quote:"무엇을 하든 제대로 하라. 건성으로 말고 철저히 하라. 일의 근본을 살피라. 내가 보기엔 무엇이든 절반만 한 것이나 절반만 결코 한 것도 아는 것도 아니기 때문이다. 아니, 종종 오도하기에 때문에 더 나쁘다.",
        author:"Lord Chesterfield"
    },
    {
        quote:"현명한 자라면 찾아낸 기회보다 더 많은 기회를 만들 것이다.",
        author:"Sir Francis Bacon"
    },
    {
        quote:"내가 목표에 달성한 비밀을 말해줄게. 나의 강점은 바로 끈기야.",
        author:"Louis Pasteur"
    },
    {
        quote:"운은 계획에서 비롯된다.",
        author:"Branch Rickey"
    },
]

const quote=document.querySelector("#quote span:first-child"); // #quote아이디 - span태그 중 - 첫번째 자식
const author=document.querySelector("#quote span:last-child"); // #quote아이디 - span태그 중 - 마지막 자식

const todayQuote= quotes[Math.floor(Math.random()*quotes.length)];//랜덤으로 오늘의 명언을 하나 골라서 변수로 지정. 

quote.innerText= todayQuote.quote; // 변수의 명언
author.innerText= todayQuote.author; //변수의 저자