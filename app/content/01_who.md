# A Note from the Author

Hi there! I am **Clay Unicorn**, the author and developer of this book, "Unicorns and Gophers." I have been a teacher in some form or another throughout most of my life; a passion that is ever-growing. Sometime in late 2016 I finally decided to plunge full-force into education, and since I could not find the job I wanted, I decided to create it! I hope that you will enjoy learning and reading through this book with me. While it is a personal endeavor for me, I would also gladly appreciate any help, suggestions or feedback based on your experience with this application!

> If it is not already clear based on the brand of the book, I have a silly mind. My teaching style is a bit unique, and akin to the appreciation or dismissal of Unicorns themselves, you will form your own opinions about me and this book.

Hopefully you will learn many things from this book and enjoy the experience throughout. I have taught over 100 developers over the years, so I am not green when it comes to training young Padawans. You, my padawan, are going to learn some of the greatest tech for modern programming from this book, and there will be no limit to what you can build or achieve on the other side!

I'm not great at talking about myself, but there is plenty of information about me on [LinkedIn](linkedin.com/in/thinkclay) and [github](https://github.com/thinkclay). Feel free to connect with me at either of those places, or stalk [my company](http://unicorn.xxx/). The only thing that you really need to know about me at this point is that I know my stuff. I have built web applications for Samsung and Youtube, IoT applications for Gatorade, and dozens of mobile applications for startups. I am fully fluent in at least a dozen programming languages and framework. When I have an opinion it is because I am confident in that opinion.

I may come across as arrogant at times throughout this book, but that is only to help you feel confident in learning and trusting my philosophies and teachings. If you ever want to get to know me, I'd happily have a beer with anyone and love to hear all about **you**.



## Is this a Book or an Application?

Ultimately, that distinction is up to you. I built this _"booklication"_ first as a book that you can simply read through and learn from, but then shaped it into a more interactive experience to help you retain what you learn. The inspiration for this came from [CodeSchool](http://codeschool.com/) and [Ruby Koans](http://rubykoans.com/), which boast a more immersive education. My hopes is that you get the full experience from this book by reading through linearly, and completing challenges or wrapping your head around code examples provided in the book.

While this book is it's own independent app, the code it is built on is a more universal framework I invented. In the startup world, there is a term for being a user of your own product: dog-feeding. This application is my dog food, and to know that my dog food is good, I wrote and published my own booklication with it!

As an avid reader, I often love to digest programming books, but run into many problems when buying paperbacks, or even trying to use iBooks on an iPad or desktop. Some of the various problems I aim to solve with this application:

- Code formatting does not scroll
- Copy and Paste of source often causes issues
- Following along with a book + repo hybrid is annoying

If you want to read a great technical book, you will often find yourself sacrificing some aspect of the experience. These issues persist on the authorship side as well. Thus, I reinvented the wheel and made a custom e-reader of sorts. This application, called **Tome** is built on top of web tools and packaged as a desktop application. The same is true for the mobile counterparts on Android and iOS.

I admit: I probably reinvented the wheel a little bit, but I am okay with that. This books aims to teach you Go and React and what better way to teach you, then to help you build the same application you are using to learn from!



## Why use Go?

[Go](https://golang.org/) is a programming language that was created by some really smart dudes over at Google. It has been around for over 6 years at the time of this publication, and has been hardened by the magic of many wizards. Most people well tell you that Go is like a more modern C language. It has the versatility, speed and small footprint of a compiled language while still boasting more modern features. You can use Go for web development, systems programming, terminal apps, and even some mobile or desktop development.

Where go really shine is web API's, systems and IoT development. The standard library (aka `stdlib`) is incredibly small and provides you with most of the bare-bones functionality that you need to support applications across multiple systems. When it comes to speed, very few languages can outperform go, and the ones that can have a much higher learning curve.

> If I could only use one language for the rest of my life, I would use Go.

I picked up Go and started building my first Go application in a matter of minutes. This is not a reflection on some super power or skills on my part, but rather the simplicity of the language itself. Not only that, but because so much of the type checking and formatting is enforced by the toolchain, I felt confident as a total noob, that I was still writing **good, clean, code**. If you already have a strong background in Computer Science, then you will learn go incredibly fast. Memory management is pretty much done for you, so the only bits you really need to understand there are when to call pointers or pass by value. The lexicon of the language is terse so if you have already worked with C or some derivative, than you will rarely find yourself searching for syntax examples.

In an age where languages and frameworks just seem to be getting more bloated over time, I find myself appreciating the *_less is more_* mantra in programming. Go is like have a Tesla Model X: it can move things around like a truck, is more efficient than most of it's rivals, has modern features where it needs them, and still behaves like a car. Go is also very opinionated (and so is the community) about the formatting, syntax, and patterns of your code. I could go on and on about why Go is awesome, but here are the highlights of my favorite features (or omission thereof):

- Forces you to clean and remove unused variables or imports
- No functional shortcuts: no try, catch, finally, map, etc
- Sloppy code won't compile (sort of like Python)
- No class or type inheritance
- Strict enforcement of rules to avoid cyclic dependencies
- Memory management is handled for you
- Less overhead when porting to other architectures
- Forces you to do implicit type conversions

This isn't meant to be a exhaustive list of go-awesomeness, but just a sampling of some of my favorite features of the language.



## Why use React?

When I first saw React, I knew immediately that it was going to be the future of web development. As a veteran front-end developer, I have seen and been manipulating the DOM since the first dotcom boom. React's shadow DOM makes manipulation, indexing, and organization incredibly powerful and easy. There are some great competitors out there like Meteor and Angular, but in my opinion, these frameworks simply do too much.

> React will become the new jQuery in terms of popularity and ecosystem

When I landed my first full-time job as a front-end developer, MooTools and Prototype were the big, bad javascript frameworks on the scene. You could make your app come to life my dropping Scriptaculous in your project. But man, did you take a hit in terms of performance and the barrier to entry was steep. When John Resig first started talking in forums about jQuery, it was mostly just a tiny little collection of utility functions. A lot of us in the industry really liked how plug-and-play it was as well as lightweight. I could drop it onto almost any project and just leverage whichever functions I needed, with few trade-offs.

React is the new jQuery when it comes to front-end libraries. I believe it will be the go-to tool for all a large majority of developers over the next few years for how portable and compatible it is. You can invest a lot of time into learning other, more powerful frameworks, but why would you? The overhead will be steeper, and with the popularity of React, there are plenty of complimentary frameworks that you can use to have a more feature rich stack.
