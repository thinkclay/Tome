# What you will Learn

This book is designed to teach you something new. I don't know of many developers that are using Go and React as full-stack developers, but the reasons are not because they are a bad combination. Most likely the lack of buy-in for the **GRR** (Go, React, Redux) stack is the separation of tribes. It's a sad reality, but most front-end developers are not often strong programmers and most engineer-types are not great at front-end. This is mostly likely due to the sides of differing sides of the brain as front-end tends to be more creative and back-end is more logical. That being said, it's still important and valuable to be strong in architecting both sides of the coin. As either a creative or an engineer, understanding both sides of the coin helps bridge the gap and makes you a well-rounded and highly employable developer.

> Give a man a fish and he eats for a day. Teach a man to fish and he eats for life. I love proverbs.

I will teach you all the basics you need to build a feature rich application without reading any documentation, however, I cannot stress enough how important it is to learn to **RTFM** (Read the Friggin Manual). I hope that you will take advantages of links throughout this book and pause reading here to go learn about a concept that I reference. Anyone can clone a repository, scan the readme and hack on someone else's ingenuity. What makes a strong and competent engineer is someone who can learn and build upon something based on source code alone. These are the engineers that live luxurious lifestyles: traveling the world as tech nomads, building the worlds most powerful software at tech giants, or becoming millionaires in a matter of years with the next great startup. If any of those reasons align with your own goals and ambitions, do NOT take shortcuts. I rarely take shortcuts on this book, so show me the same respect as your mentor and voice in your head and do the work!

It's also worth noting that I designed this book to compartmentalize the teaching as much as possible. I know that some readers will be absolute beginners while others may have longer beards or deeper attention spans than myself. When you are learning and reading about Go, I won't be talking about the client facing application very often, except to illustrate how data will flow in and out. Same goes for the react side of things. If you consider yourself an expert on one of these topics already, you can probably skim those sections and read mostly the quotes and code samples. Built into the book are various challenges that will also be a good measure to essentially "test out" your knowledge and understanding before you dive in.



## Programming with Go

We will be using the latest version of the Go language and toolchain. The first chapter is dedicated to teaching you how to program from the ground up. It is great for beginners, even if you have never studied computer science or worked with any other language before. In addition to teaching you programming basics, you will learn how to properly set up your dev environment and become very familiar with object-orient principles and patterns.

> Even if you're a seasoned programmer, you may still have yet to delve in [AST's](https://en.wikipedia.org/wiki/Abstract_syntax_tree) or [DSL's](https://en.wikipedia.org/wiki/Domain-specific_language) so if you haven't done such an exercise before, I think you will quite enjoy it. The fundamentals are actually pretty easy, and the end result you will arrive at with this book will resemble something sort of in between.

The second chapter in Go will then build upon these core fundamentals to teach you how to build a lexer and parser to create a go package that supports parsing a newly invented programming language called ***sprinkles***. This will teach you some deep knowledge that serves as an introduction to building your own programming language. You could easily spin off after that chapter and go and invent your own interpreted language built on Go. Cool, huh?! Sprinkles is basically a backwards compatible format that extends Markdown to support minimal template logic, variables and tags.

The third chapter will then teach you how to build a RESTful JSON API to push and pull data from a web server. If those words sound foreign, that's okay. I'll assume that you know nothing and teach you the terminology as needed to foster your understanding.

Finally, you will wrap up the Go section of this book by performing some refactors and building your binaries. We will also recap the things you have learned and give you an elaborate list of further reading and resources for you to spin off from and learn more.



## Making React Applications

We will work with the latest versions of React and React Native. While these two frameworks are independent of each other, the syntax and concepts learned apply to both. React has a mantra of **learn once, write anywhere** which is one of the many reasons it has been adopted so quickly. We won't dive deep into teaching the syntax of Javascript, as many of the concepts will borrow from what you learn in Go. Instead, the focus will be in teaching you the opposite paradigm to OOP: **functional programming**. By learning the basics of both tribes of thinking, you will have enough of a taste to walk away from this book with a well formed opinion.

After learning the basics of React and building your environment, you will build a react (web) application that talks to the Go web API. You will spend much more time setting up your project in the early sections, but much less time learning the language or framework itself. This section will teach you the basics of Node Package Manager (npm), Webpack, Babel, and Sass. If you haven't worked with any of these, the setup will feel overwhelming, but it's the right of passage that we all must take.

Once you are up and running with React, we will start building the UI of the application. We will hardcode all of the data at first so that we can focus on architecture and visual design. Much of the code will be copy/paste and unlike the Go portion of the book, you shouldn't feel like you need to understand all of the working parts. If you already know Sass or Javascript, then you will have an easy time plowing through this section, though you may be surprised at how many new things you will learn if you haven't previously worked with ES7 or webpack.

The third chapter for React will focus on teaching you stateless components, high-order functions, and passing data around your application. You will learn the best practices of DOM traversing, managing state, and dealing with callbacks. Finally, you will piece together all of these things to have a full MVC (model, view, controller) application. React will be your view state, redux will act like your controller, and Go will be your model (data) layer.

The fourth chapter will introduce you to React Native. Because there is only so much that one man can teach in a book, I will mostly walk you through highlights and source code of the mobile application. The beauty of React is that it really does work similarly between platforms, and while there are many platform specific considerations, you will be well studied and able to tackle documentation on your own.

In the last chapter, I will give you some personal opinions and retrospectively reflect on what we built together, and why we made certain decisions. There will be a curated list of the best resources to further learn from, and if you feel some love for React, you won't be disappointed. There are many more tutorials and resources overall for React and Redux development, so overall this section will have a lot less hand-holding than the Go counterparts.
