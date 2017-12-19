
var quotes = [
"Creativity is intelligence having fun. - Albert Einstein",
"Action is the foundational key to all success. - Pablo Picasso",
"Successful people do what unsuccessful people are not willing to do. Don\'t wish it were easier, wish you were better. - Jim Rohn",
"It does not matter how slowly you go, so long as you do not stop. - Confucius",
"I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
"Twenty years from now you will be more disappointed by the things that you didn\'t do than by the ones you did do, so throw off the bowlines, sail away from safe harbor, catch the trade winds in your sails. Explore, Dream, Discover. - Mark Twain",
"You don\'t have to be great to start, but you have to start to be great. - Zig Ziglar",
"Perfection is not attainable, but if we chase perfection we can catch excellence. - Vince Lombardi",
"Give me a stock clerk with a goal, and I will give you a man who will make history. Give me a man without a goal, and I will give you a stock clerk. - J.C. Penny",
"Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
"The greatest pleasure in life is doing what people say you cannot do. - Walter Bagehot",
"There are two types of people who will tell you that you cannot make a difference in this world: those who are afraid to try and those who are afraid you will succeed. - Ray Goforth",
"A successful man is one who can lay a firm foundation with the bricks others have thrown at him. - David Brinkley",
"The best way to predict the future is to create it. - Peter Drucker",
"The only place where success comes before work is in the dictionary. - Vidal Sassoon",
"Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing. - Helen Keller",
"Too many of us are not living our dreams because we are living our fears.- Les Brown",
"Failure is the opportunity to begin again more intelligently. - Henry Ford",
"There are two primary choices in life: to accept conditions as they exist, or to accept the responsibility for changing them. - Dennis Waitely",
"One day, in retrospect, the years of struggle will strike you as the most beautiful. - Sigmund Freud",
"The whole problem with the world is that fools and fanatics are always so certain of themselves, and wiser people so full of doubts. - Bertrand Russell",
"The thinking that got us to where we are is not the thinking that will get us to where we want to be. - Albert Einstein",
"I think you have to know who you are. Get to know the monster that lives in your soul, dive deep into your soul and explore it. - Tori Amos",
"The purpose of life, after all, is to live it, to taste experience to the utmost, to reach out eagerly and without fear for newer and richer experience. - Eleanor Roosevelt",
"It is not the years in your life but the life in your years that counts.- Adlai Stevenson",
"The fear of death follows from the fear of life.  A man who lives fully is prepared to die at any time. - Mark Twain",
"Yesterday is history, tomorrow is a mystery, today is a gift of God, which is why we call it the present. - Bil Keane",
"To live is the rarest thing in the world. Most people exist, that is all. - Oscar Wilde",
"Instead of wondering when your next vacation is, maybe you should set up a life you don\'t need to escape from. - Seth Godin",
"You wouldn\'t worry so much about what others think of you if you realized how seldom they do. - Eleanor Roosevelt",
"What\'s the point of being alive if you don\'t at least try to do something remarkable. - Unkown",
"Be miserable. Or motivate yourself. Whatever has to be done, it\'s always your choice. - Wayne Dyer",
];
var button = document.querySelector("button");
var colors = ['#03396c', '#005b96', '#011f4b', '#f37736', '#004444', '#cb2424', '#009246', '#007777', '#673888', '#65737e'];

button.addEventListener("click", function() {
	var randomNumber = Math.floor(Math.random() * (quotes.length));
	var color = Math.floor(Math.random() * colors.length);
	document.querySelector("blockquote").innerHTML = quotes[randomNumber];
	document.querySelector("blockquote").style.color = colors[color];
	document.querySelector("button").style.backgroundColor = colors[color];
	document.querySelector("button").style.backgroundColor = colors[color];
	document.body.style.backgroundColor = colors[color];
});




