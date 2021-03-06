# WalkUp 🚶‍♂️

WalkUp (WalkIn when I started) is a London based startup aiming to enable you to be able to get a seat at any restaurant at any time. With their initial product being a digital queue management solution for restaurants. I joined the team at the end of March 2020 a few weeks into the Coronavirus lockdown (fun way to start a new job 🥳).

<!--
 ## Prompts

 - Strategy
 - System Architecture
 - Line Management

 -->

## Updates 🔼

### 2020-11-17 - 2020-11-23

Had a big week of testing our new bookings functionality and fixing bugs. Had a bit of a bottleneck with having lots of PR's ready at the same time and waiting for builds to finish before merging in. Trying to have all PR's signed off by the product team before they can be merged may help with this. As it staggers merges. Means we don't save up lots of stuff for a release (as releases should be able to happen at any time), and should catch issues earlier.

Did a lot of thinking and writing out some draft flows around our process. How do we specify tasks, add enough acceptance criteria, get them tested and relay feedback on progress. It's normally the project manager role but we all need to take some of that responsibility until we have one. Maybe it's a role we could look at someone like Frazer helping us out with? He is the COO?

When giving people responsibility I need to be a bit more precise and direct. It's like that group bias where asking anyone in a group to do something isn't very effective, but pointing to an individual in the group and asking them is much more effective.

It can be better to show rather than tell, when explaining something (https://en.wikipedia.org/wiki/Show,_don%27t_tell), I think I do this quite a lot with code examples, but it's useful to have come across it in some of my reading and realising the importance of it.

There's also been a few moments in the last week where I feel like I could have been much more concise in explaining my thoughts on something. It's part of the downside of thinking through talking. But giving more pause between thoughts might help. It feels a bit like falling into the classic programmer fault of over explaining and boring people with detail. Something to watch out for.

### 2020-11-07 - 2020-11-16

Had a new starter this week! Yay, time to share the load. This period has been a lot about process. As we grow so quickly and we don't have the money to hire for all the roles we'd love to have, we have to figure out how to share those tasks amongst the people we do have.

My theory on that is to implement pretty strict processes with templates and checklists for all the tasks that we would ideally hire for. Reducing the amount of time we have to think about what we're doing and sharing the tasks between everyone instead of dumping it on an individual who wasn't hired for that.

The main tasks I'd like to define processes for are "specifying tasks and acceptance criteria" and "quality assurance testing".

Also want to make sure anything that goes into develop can be released. By having a better QA process before we merge branches in. Actually involving the product guys at this stage. Lots of smaller testing rather than 1 big test. Also means we can release more often.

Would be good to have better changelogs as well. We enforce it, but people write notes rather than what you would expect in a nice changelog. That non devs could read.

### 2020-10-26 - 2020-11-06

The last 2 weeks have been a big exercise in managing contractors and seeing their capabilities. I gave them some much more complex tasks to see what would happen, one did really well the other did not. So I had to step in to cover the lost time. Was an interesting experiment, probably something that is worth doing to judge people's capabilities but I should find a quicker and less impactful way of doing this. Probably by reducing the size of the task but keeping the complexity. Most of the issues with this come down with our lack of details when specifying tasks. Which is a tricky balance when the team is so small and there's no dedicated project manager.

I've been thinking about how to improve our product quality and development speed as well. Most of the ideas are around how to setup processes to ensure we are increasing the amount of testing we are doing. Things like:

- Scripts that fail the build of test coverage has not increased
- Update my chrome extension to help encourage me to actually use the checklist on PR. Or implement for everyone.
- Implement a policy that all bug fixes must have tests
- Make it super easy to add test
- Make it super easy to see the results of all tests (in CI, maybe for vscode as well?)
- Get the end to end tests running on CI
- Encourage devs to be working inside cypress
- Spec tasks in such a way that it can be very easy to write the end to end tests

I always want to increase the priority of any tasks that reduce or remove time for devs e.g.

- All requests that could be done by non devs by adding something to the admin panel
- Reduce the amount of time managing PR's e.g. auto merge develop if possible
- Reduce the amount of time the CI takes
- Improve the dev start process

I also want to find some way of enforcing a policy of: Every question that gets asked that could be documented should be. And make the documentation super easy and sexy to edit. Maybe ask Jani about best practices.

Going into the office was really fun. Lovely banter. Lovely people. Definitely need digital representations of post it note stuff we were doing. Having a digital draw on screen would be awesome. Can put post it notes on there as well. Should encourage more formal processes for some things like documenting user problems and feature ideas.

Got to be more direct with goals, expectations and contractors. Split the tasks down as small as possible, do not underestimate the benefit of this.

### 2020-10-11 - 2020-10-25

A mix week of writing specifications for the next version of our bookings platform (which we've already started building, whoops) and getting really into some base level component coding (table component). A big part of this week has been around getting fustrated with how new features and improvements are presented to us, specified and then worked on. I guess it's the problem of not having a dedicated designer/UX person, customer development specialist and project manager. Although the solution can't just be to hire as resource will always be a problem. So it's time to come up with a cunning solution given what we have. I think this means define some very rigid procedures for customer development, UX development and design, writing acceptance criteria, accepting work as a dev team and relying feedback on progress. So something to think about, I want to figure out a proposal for how we manage all this.

When you don't have much resource and growing fast maybe one of the best things you can do for effectiveness is documentation. If you keep getting people in, contractors or trying to hire people, then documentation can save a lot of time and context switching.

Also had a great convo with the directors about priorities and how to balance work on bookings versus improving the UX and performance of our core products (especially the mobile app). If we try and do a mixture of both does that mean we do a poor job at both. Although less focussed work needs to go into improving the current product than would need to go into bookings. The work on bookings is much more uncertain and a bigger job. So we should spend the time to get that right. And offer something that feels competitive rather than just less features than existing platforms. If our focus is usability, flexibility and speed. Over full bookings and table plan modelling. That could do it. Seeing as we want to target people who are max 50% bookings? As we don't see a future in higher than that. So let's build something very specific to that future. We need to make sure that that's how the features appear to the vendors. And when we market it. It's not a light version of bookings it's the
optimal bookings solution for the vendors focussing on people who want a table at any time, the same way you'd use Uber, which do offer a light version of book in advance.

It's really easy to make shit stuff in a shared package that will just break over time. It's worth going back over and really thinking through the decisions.

### 2020-10-04 - 2020-10-11

Very busy week working on an important new feature. Getting it ready for internal testing, idea is to go live next week so can tell you a bit more about it then. Biggest learning from this week is similar to last week, in that I don't think people should be encouraged to work late for new feature development. Not in a start-up at this stage. If things are on fire and going wrong then that's allowed as it's an exception that can be damaging. Along with this I've been reminded about how annoying timezone support is. Will be looking at solutions in the coming week to make this easier to manage.

### 2020-09-07 - 2020-10-03

Thinks continue to go well, been focussing on mobile app performance improvements. Which it desperately needs. But it's a slow process with so few developers. Got interrupted in this work to build an exciting new feature, but we have a very tight deadline so it's all systems a go. Will update once this feature is live, should be in the next 2 weeks. Been furiously hiring contractors and still trying to find permanent people. It's a long game, but happy with the contractors we now have. Can be very hit or miss. Biggest learning is to keep pushing on pessimistic estimates and not to box yourself into a hole of committing to work that can't reasonably be done. Think I handled this well and made my points obvious and clear, but think the rest of the team need the point to be hammered home more. It leads to the classic dynamic of having a lead dev just saying no at some point. You can do what you can to reduce scope but there gets to a point that some things just can't be done in some
timelines. Although it's a harder question than that, because technically you could sacrifice quality, performance and reliability to do it in those times. But my stance for us at this stage is that that path is more dangerous.

### 2020-06-21 - 2020-09-06

During this time we've seen incredible growth, literally exponential month on month. Very exciting but we can't grow the tech or team quickly enough, so we're trying to hire like crazy and focus on performance and reliability. There's been interesting challenges around deciding on priorities when there's so many exciting and essential things to do but we can only do about 5% of it.

I've been focusing alot on mobile app performance which is a tricky thing to debug properly in React Native. Having inherited a legacy code base it seems like the best thing to do is to rebuild from scratch, but we don't have the capacity for that. My current thinking is to build all new features and improvements from scratch in a separate location (our shared JavaScript package which has storybooks for React Native). So we know this code is awesome, can use it immediately and when we do have capacity to rebuild the core we have this good code to make use of.

I've also had some interesting thoughts/work around theming and allowing white labelling. Mainly that theming a large scale application should only be concerned with colour theming. Having spacing/margins in themes can get out of control easily and people are more likely to abuse it's use.

We've had a lot of pain trying to setup thw mobile app CI/CD pipeline, which was inevitable. Would have been easier to do with a blank app, but we're making good progress.

We've also had some interns which has been a lovely experience. Nice to help people out from such an early stage, especially in such an exciting environment like ours.

### 2020-05-01 - 2020-06-20

We finally got another developer 🙃 A full time senior backend engineer which greatly helps our capacity as stores around the world start opening again and testing out our platform. For this we spent some time focussing on localisation support (which there was none of before). So I had a fun time building a separate package for managing this and allowing us to have different copy depending on whether a vendor is a store or restaurant (otherwise we could have just used another 3rd party library).

### 2020-03-03 - 2020-04-31

For my first few months there were only 6 of us, with the development team consisting of just myself and the CTO (busy busy). My initial focus at the beginning was to audit everything we already had and figure out how to proceed development in such a way that we can scale more easily and have a higher level of quality (mixed in with generic bug fixes and minor feature improvements). Luckily (for us) COVID-19 had shut down all restaurants so we didn't have a live system to maintain which allowed us to make some swepping changes we wouldn't usually have capacity to do. Which definitely put us in better standing when restaurants come back.
