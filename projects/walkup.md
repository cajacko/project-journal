# WalkUp 🚶‍♂️

WalkUp (WalkIn when I started) is a London based startup aiming to enable you to be able to get a seat at any restaurant at any time. With their initial product being a digital queue management solution for restaurants. I joined the team at the end of March 2020 a few weeks into the Coronavirus lockdown (fun way to start a new job 🥳).

## Updates 🔼

### 2020-06-21 - 2020-09-06

During this time we've seen incredible growth, literally exponential month on month. Very exciting but we can't grow the tech or team quickly enough, so we're trying to hire like crazy and focus on performance and reliability. There's been interesting challenges around deciding on priorities when there's so many exciting and essential things to do but we can only do about 5% of it.

I've been focusing alot on mobile app performance which is a tricky thing to debug properly in React Native. Having inherited a legacy code base it seems like the best thing to do is to rebuild from scratch, but we don't have the capacity for that. My current thinking is to build all new features and improvements from scratch in a separate location (our shared JavaScript package which has storybooks for React Native). So we know this code is awesome, can use it immediately and when we do have capacity to rebuild the core we have this good code to make use of.

I've also had some interesting thoughts/work around theming and allowing white labelling. Mainly that theming a large scale application should only be concerned with colour theming. Having spacing/margins in themes can get out of control easily and people are more likely to abuse it's use.

We've had a lot of pain trying to setup thw mobile app CI/CD pipeline, which was inevitable. Would have been easier to do with a blank app, but we're making good progress.

We've also had some interns which has been a lovely experience. Nice to help people out from such an early stage, especially in such an exciting environment like ours.

### 2020-05-01 - 2020-06-20

We finally got another developer 🙃 A full time senior backend engineer which greatly helps our capacity as stores around the world start opening again and testing out our platform. For this we spent some time focussing on localisation support (whihc there was none of before). So I had a fun time building a separate package for managing this and allowing us to have different copy depending on whether a vendor is a store or restaurant (otherwise we could have just used another 3rd party library).

### 2020-03-03 - 2020-04-31

For my first few months there were only 6 of us, with the development team consisting of just myself and the CTO (busy busy). My initial focus at the beginning was to audit everything we already had and figure out how to proceed development in such a way that we can scale more easily and have a higher level of quality (mixed in with generic bug fixes and minor feature improvements). Luckily (for us) COVID-19 had shut down all restaurants so we didn't have a live system to maintain which allowed us to make some swepping changes we wouldn't usually have capacity to do. Which definitely put us in better standing when restaurants come back.
