## Personal Website Mk. 2

This project will be a redesign of my original final from last term, but with the addition of more dynamic elements and (possibly) some JavaScript thrown in there.

# General changes

1. Give the website a fresh coat of paint. New style. New color pallette. New fonts. New everything.

2. Expand the content from the original site to incorperate nearly everything. I'm talking about every project and every piece of art, optimized and ready for the web.

3. Add and design a "blog" category. I need some place that isn't twitter to talk about my weekly shenanigans.

4. Add a resume page. Something simple, but I've never got around to it last time and it seems like *everyone* has one, so I'll go do it soon. Maybe find some way to add some flair

# The Negatives of Mk. 1

- **Navigation** had a weird workaround for it to function on small screen devices. Resizing them to accomidate rollover was a pretty sloppy solution, so instead I would like to add some kind of hamburger menu to remove rollover problems.  

- **Margins** could use some tweaking to give the other elements some space.  

- **Visual Arts** could benifit from some additional content, maybe some kind of seperate page to view a description of the art?

- **Resume** was missing in the first iteration due to time constraints. This time I gotta work consistently.

- **CSS** could be cleaner from the start. Lots of repetition.

# The Positives of Mk. 1

- **Functionality** had no major issues. Everything was well optimized for running on the web with no major conflicts from other browsers. Incorperating JavaScript may introduce problems, so I need to ensure that it's there from the start.

- **The Animated GIF** at the start of the site got a ton of praise. Definitely going to re-incorperate that idea for Mk. 2.

- **Typography** was nicely chosen. Something simple and clean that can work on small screens (san serifs) will probably be my focus, although maybe not Raleway and Renogare again. Nor Futura and Helvetica / Arial. I should challenge myself a bit and find some different font combo...

# Other fun things I want to do If I have the time.

- **Dark Mode** that auto transitions based on the local computer time. Maybe have a few fun colored backgrounds for each time of day.

- **Toybox** section for JavaScript internet toys. Like that one guy from *Analog In, Digital Out* has. Maybe I could add in the Zodiac Project into it when I'm done with it?

# Breakpoints

Okay, so because this website is going to incorperate some RWD elements, I'm going to have to settle on some rules.

Generally speaking, there are **four** major breakpoints I should account for. While there are, of course, a variety of screensizes, we need to accomidate these things first:

**320 by 480** or **2:3** (3.2in by 4.8in)
The smallest screen size for modern, web-surfing devices. Established by the first iPhone in 2007, the last time a similar resolution was used was in 2016 with the iPhone SE which used the same screen as the 5s. *This will be the baseline*

**768 / 1024** or **4:3** / **3:4** (7.6in by 10.24in)
Accounts for both portrait and landscape modes for tablet computers. Remember that these will still need to have large buttons and easy to use triggers due to the fact that the user will operate these kinds of devices with thier fingers.

**Anything 960px x 1280p or Above** also **4:3** (9.60in x 12.80in)
This is when we start seeing desktop-class resolutions.