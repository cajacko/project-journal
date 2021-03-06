# Zero to Hero 🦸‍♂️

A board game where players start as a normal person and by the end of the game have levelled up to a full on superhero through tackling crime and villains.

## Next Steps ⏭

- Do another development session with Rob and then write up the new changes
- Start making the changes to the cards (especially action cards as they've changed alot)
- Get ready for the next version that can be play tested properly

## Updates 🔼

### 2020-09-26 - 2020-10-18

Had a really good play test/development session with another programmer friend of mine. So we went very deep into mechanics and balance. Highlights include:

- Ensuring villains are more unique and there's loads of them. Seeing as the game is about crafting unique heroes it would kind of be a let down if there wasn't some kind of effort in kind for the villains
- Having additional artwork cards for each character so as you upgrade you can visually see them getting stronger. More as an immersive thing than mechanical. Although could have different effects?
- It would be good to remove the meeple space if possible. The board would look nicer, but then would we be hiding the artwork too much?
- Allow some crimes to complete fast. Maybe they have an arrow on some sides that forces you to rotate one more time if it lands on that. >>
- Some villain effects should really shift up the board. Not necessarily making it harder, just ruining your planning and making you rethink
- We needed villains to come up faster
- The beginning of the game was hard, the end was easy so need to balance accordingly
- One way to reduce number of action cards/dice (which will improve UX) is to change the values on the thwart dice (3 success, 2 near miss, 1 blank)
- Some locations could be harder to move though? e.g. takes 2 movement actions
- Villain crime cards just tell you to draw a villain from the villain deck (so we can have more detail), then that villain crime card can act as the hit counter
- Rebalanced the number of crimes to spawn and level -> number of crimes is based on the value on the victory track (as before) but the starting level is the same as the number of players. So with more players crimes complete faster? May need to reverse this? More players should mean more crimes right?
- You should be able to always trade in a gadget for resources and then buy a new starting level one. We don't want to limit people from building the current of abilities they want
- We gained experience and resources pretty quickly. The hex counters may not work for that. Unless we half the values you get or just have a different way of counting e.g. like gold, silver, bronze tokens
- Some gadgets could retrospectively let you add dice
- Make the crimes slightly easier but add more villains and get crimes to complete faster
- Would it be thematic for defeated villains to return later in the game as stronger versions of themselves? Maybe at the start of the game you draw 5 villains from the villain deck (don't look at them). You use this deck, when a villain is defeated you get their "harder come back" card and shuffle that into the villain deck. So you'll always have the same 5 villains but they keep getting harder.
- Maybe action card set bonuses double the number of dice in an attempt?
- Penalty for moving through a space with a villain? Maybe you just can't? Or you have to stop on that space and use another move card to get off.
- Abilities are additive/linear, gadgets are multipliers
- One way to solve the number of players issue could be to always have 6 vigilantes on the board. Players control multiple. But you only ever have 1 normal vigilante, others are more like sidekicks, they have simpler rules and kinda just help you out instead of being full customisable vigilantes. This is similar to a mechanic in the new Aliens game. Imagine having a "side kick" deck and at the start of the players turn you draw out x cards, which can be the "simple" actions the sidekicks can do: move, add x dice to any thwart attempt this turn etc

![Zero to Hero](../assets/zero-to-hero-018.jpg)

### 2020-09-19 - 2020-09-26

Started building out a basic paper version from the latest rules. Writing cards as I go so I can iterate more quickly and play test more. Need to be careful not to let number of cards or complexity get to out of hand. Can easily see how I'll make too many.

### 2020-09-10 - 2020-09-18

Spent some time trying to streamline the upgrade process, both in terms of abilities and gadgets. Ended up creating a little player sheet to help with this.

![Zero to Hero](../assets/zero-to-hero-011.jpg)
![Zero to Hero](../assets/zero-to-hero-012.jpg)
![Zero to Hero](../assets/zero-to-hero-013.jpg)
![Zero to Hero](../assets/zero-to-hero-014.jpg)

The current idea is that upgrade cards have numbers on them so they can be looked up when you upgrade. e.g. Your starting vigilante card would say you could upgrade to card 2, 3, 4 or 5. In the tray that holds these numbered upgrade cards there's a few for each number, which are the same card but with very small differences e.g. probably the upgrade paths are different. To give more variety and flavour to games. Both gadgets and abilities can be upgraded so these cards will all work in the same numbering "lookup" system.

![Zero to Hero](../assets/zero-to-hero-015.jpg)

The original player sheet design had a space in the middle for holding "experience dice" to keep track of how much experience you have. This next design ditches that in favour of "tracking" or "count" cards. 2 hex cards that have numbered sides (both on front and back) and be used to keep count by rotating. Similar to how you rotate crimes. Keeping this same rotating mechanic reduces the amount of unique systems. But does restrict each card to only count from 0-11 (accounting for 12 sides when flipped). The 2 spaces in this image are for keeping track of experience (which you can spend on upgrading abilities) and resources (which you can spend to upgrade gadgets). Balancing these 2 aspects results in nice symmetry on the player sheet and makes the upgrade process for both abilities and gadgets the same.

Also reduced the number of abilities and gadgets you can have from 6 abilities to 4 and 4 gadgets to 2. Otherwise there's so much going on and it would take ages to upgrade everything. Also it encourages players to generalise rather than specialise. ANd I think specialising would lead to more entertaining game play.

![Zero to Hero](../assets/zero-to-hero-016.jpg)

This final image shows all the unique component to the game (with only 1 player sheet though)

![Zero to Hero](../assets/zero-to-hero-017.jpg)

Also did a lots of work in the v0.6.0 version of the rules. Here's some highlights:

- Added defense value as a base level stat. So now have:
  - Speed - Spaces per movement
  - Strength - Bonus thwart dice
  - Defense - Reduces number of action cards you lose when a crime completes on your space of a villain attacks
  - Stamina/Intelligence - Hand size
- Refined how searching works
- Locations can have custom triggers and effects - Not just rewards
- When crimes complete or a villain attacks players on that space lose action cards
- Trade costs are written on gadget cards
- Action cards may have defense values on them

### 2020-04-15 - 2020-05-03

Didn't do that much in this time but did update the rules for simultaneous play, figured out a bunch of search cards and tweaked some card values in the spreadsheet. Here's some of the ideas for search cards:

- Gadget at current level
- Gadget at +x level
- x gadgets
- x gadgets keep y
- +x experience
- free upgrade (rare)
- spawn x crimes (rare)
- scheme all crimes (rare)
- villain action (rare)
- Thwart attempt on adjacent crime +x dice
- Special action cards that you add to your hand and can use normally, but return to the search discard pile or lose. e.g. allies etc (much more dice or movement)

### 2020-04-05 - 2020-04-14

Started trying out some of the ideas from the last play test session. Primarily how to make it work so all the vigilantes take their actions before the villain phase. Here's the new notes:

- Need to spawn quite a few more crimes, don't want a situation where the players managed to clear all crimes omn the board
- Would be useful if players can do something else if they can't thwart a crime. Perhaps searching a location? Or an action on a location
- Could have a search deck which could result in you getting:
  - A gadget
  - More experience
  - Trigger an event e.g. thwart attempt on a nearby crime, rotate crimes, spawn crimes etc
- Searching as the primary way of getting gadgets will simplify the awkward gadget mechanism we have currently
- Can replace the money icon, as wouldn't be buying gadgets and instead have a search icon
- Means we can get rid of the hideout as well
- Balancing 1 villain phase after all vigilantes when you have different number of players could be tricky
  - Could change the amount of VP's required?
  - Could change amount of crimes spawned?
  - Could require 4 vigilantes to be played and you play multiple with less players?
- Came up with an interesting new way of upgrading your vigilante in a more more flexible way (see image)
  - You start with a base vigilante card with basic stats and 1 text ability
  - This card specifies what cards you can upgrade to on the left or right
  - When you purchase and upgrade (through exp? or could do as a reward or search? or when get a VP everyone upgrades) you overlay that card ontop of the specified part of the vigilante card
  - Upgraded cards will specify further upgrades
  - Means you would need an ordered set of upgrade cards with a quick way to find them (like 7th continent)

![Zero to Hero](../assets/zero-to-hero-010.png)

### 2020-03-29 - 2020-04-04

Had a good 2 person play test with the newly printed versions. Here's the notes:

- Didn't move up the victory track quickly enough. Opportunity to first couple of VP's should be sooner
- Increase the benefit of set, bonus is only +3 dice atm
- Experiment with the villain phase happening after every player
  - Makes it harder to balance when change number of players
  - Means players can do their actions at the same time, which should greatly increase collaboration
  - Means you do less admin, but should make the villain phase more impactful
  - Might need to play as multiple vigilantes to handle this? Like Zombicide? But might be too awkward unless they share the action cards?
- The gadget that slows down crimes (by rotating them) should do more than 1 rotation, as that doesn't really change anything
- Across the board increase the number of dice gadgets/action cards give? Or improve odds on dice
- Don't have any cards with only 1 action
- Quite often want more movement allowance. Maybe increase min to 2?
- Didn't feel like explored the board enough, increasing movement and hand limit may help
- Vigilantes weren't getting as powerful compared to the crimes
- Got through the crimes too quickly. May need more, or slow down how many wre completing.
- Lower the target to attack villains, they're harder anyway as need to do multiple times
- Upgraded a bit too soon (on 1st or 2nd turn)
- May need individual discard piles for each gadget level, or have a lot more?
- The gadgets could be like a conveyor belt system, new one at the end of each turn, and pushes out old ones
- Should make it more obvious that hitting the crime target solves it, doesn't turn it clockwise
- Need a space for unused experience dice on the player sheet

![Zero to Hero](../assets/zero-to-hero-009.jpg)

### 2020-03-21 - 2020-03-28

Worked on getting a fully printed version based off the data in Google Sheets so I can more easily keep track of the changes and have a nicer version to play test.

### 2020-03-09 - 2020-03-16

Implemented the idea of having action dice. This didn't work. It was more fun to have action cards that could only be spent once but could do multiple things, rather than dice which only shows 1 kind of action, or you can change to anything. It's also easier to wrap more theme into cards.

Played with another version with the following changes:

- Players get individual experience which goes towards upgrading their vigilante
- There's a victory track. You win if you get to the end. You collect victory points by thwarting any crime/villain card that has a victory symbol on it. This track also controls the number of crimes and intensity to spawn at.
- Crimes have a separate number of experience and threat, no longer the same as the target thwart value
- Villains are shuffled into the crime deck and can be spawned any time after the first 1/2 spawns. This is done by having 5 crime types:
  - Starting crimes
  - Level 1 - 1 villain shuffled in here
  - Level 2 - 2 villains shuffled in here
  - Level 3 - 3 villains shuffled in here
  - Level 4 - enough high level cards to ensure the game ends (don't like the idea of losing if the deck runs out, and reshuffling crimes will be awkward as they'll get mixed with lower levels)

![Zero to Hero](../assets/zero-to-hero-007.jpg)
![Zero to Hero](../assets/zero-to-hero-008.jpg)

### 2020-03-02 - 2020-03-08

Played around with some ideas about removing the action cards and replacing them with tokens or dice. Seeing as the cards were only used to make you think about what actions to take and determine available actions, it seems like there's a simpler and tidier way by using tokens or rolling dice to determine this.

The current idea is that you start the game with x amount of action dice per player. At the end of your turn these move to the unused pool. You can spend them (by moving into the used pool) in the following ways:

- Add them to a thwart attempt, and then roll them
- Spend any 1 to move up to your allowance
- Spend x and roll them to gain resources either money or charge
- Spend x dice to trade with anyone on your space

The dice would be coloured per player so when you contribute dice to a thwart attempt and a single player rolls you know whose dice is whose. This then allows us to reward players with more dice as rewards or upgrades. You would also now have more control over the actions you can take, as you can take any combination of move/thwart/trade/resource generation rather than drawing a random mix from the action cards.

### 2020-02-26 - 2020-03-01

Built a new version with hex crimes and a lot of the changes from the last update. Had a play test of this version which went really well. Here's some of the notes from it:

- Definitely don't want additional effects on action cards. So can we reduce them to tokens or dice? Then much easier to glance at, organise, discard (or not discard, can re roll?)
- Actions should refresh at the end of your turn so you always have actions to spend on other peoples turns, but if you do that means you can't use those actions in your turn
- There needs to be more ways of helping each other, or moving people with you/onto your space
- The s marks could be subways instead of sewers
- Need the villains to appear sooner but not immediately
- Have a max dice limit (15 is what we had and worked quite well), this may force people to use the chance dice and balance their abilities so their not just lots of dice but also convert and reroll
- Have the gadget limit on the vigilante card
- Get rid of any abilities that are "at the start of your turn do this" too easy to forget
- We didn't replace crimes when they completed, should play test this properly
- At the moment the experience track only does bad things: determines number of crimes and their starting level. Makes more sense to have it controlling upgrades and spawning villains, unless there's a better way to do all this.
- Have bigger rewards for defeating villains atm it's just upgrade. Be good to draw more actions as well and tend to use all of them to defeat them.
- Do not have action cards with only 1 symbol
- Researching new gadgets cost too much, around 6 cards atm
- Start with some gadgets to buy in the hideout
- Convert all is too powerful, make it a 1 use gadget
- More 1 use gadgets
- Is was mentioned that we could separate one use gadgets and normal ones. Not sure about that though.

From this we've got a few new ideas to play with:

- Tokens instead of action cards, still draw them and discard and each token may still have a mix of symbols but you have to pick 1
- Action dice instead of action cards. The dice have things like +1 thwart dice, 1 money, 1 charge, move. You roll at the end of your turn and move them from an unused to used pool on your reference sheet. Similar to Dead of Winter. If we do this we may need some way of changing/choosing the action die result so you don't end up with all movement and nothing else. Or could have different actions on different dice. You can also get more as you upgrade.
- Allow people to use any of their actions during other peoples turns, but they can't initiate a thwart, just contribute. So can move together to do things

![Zero to Hero](../assets/zero-to-hero-006.jpg)

### 2020-02-18 - 2020-02-25

This week I was looking at simplification, self balancing and player interaction. So have been testing the following ideas:

- Getting rid of ability cards in favour of more gadgets, which can be bought/upgraded and traded - This gives you more control on what abilities you want your vigilante to have
- Having an upgradable character instead of the ability cards to add to the thematic flavour (e.g. fun abilities) and making characters more unique
- Removed location cards and added the rewards to the map - reduces number of cards and you don't need to worry about shifting cards too often
- Removed individual crime consequences in favour of a uniform consequence - So face down crimes are now unknown
- Starting character and gadgets work in a draw x keep y method - Again to improve flexibility in picking what your vigilante is like
- Gadget cards improve as characters level up - To improve from a thematic point of view and reward you
- Crimes get more intense as you progress - To improve from a thematic point of view
- When the threat track reaches the end you start rolling dice to see if you've lost. This is to ensure there's always a chance to win the game, you can't get to a situation where you are guaranteed to lose.
- You can decide to add chance dice to any thwart attempt, which have 1 + side but also a V (villain) side which solves the crime if it comes up. This means you can always push your luck to try and defeat a crime. You can never not try.
- There are more opportunities to do things during other players turns (use gadgets, contribute action cards)
- To succeed on any thwart you must roll x amount of + results, if you fail the crime schemes 1
- Villains have uniform actions and consequences. But different hit values and rewards. You rotate the cards to show damage
- You can research better gadgets at the hideout, by spending any amount of cards to draw new gadgets at your current level
- All crimes scheme during the villain phase
- Experience still determines number of crimes to spawn
- You upgrade you vigilante as soon as a villain is defeated
- Villains spawn the first time you spot a v1, v2 or v3 icon on a crime card

---

### 2020-02-10 - 2020-02-17

Here I've been trying to figure out how to make the spread of gadgets/abilities more balanced and personal, so players feel like they can become the hero they want, and don't get stuck with effects they don't enjoy. So here's some ideas I've been playing with:

- Draft initial abilities/gadgets
- Have a selection of gadgets available to "buy" at the hideout. You don't upgrade gadgets, instead the ones available to buy get better over time. Allowing you to make up for a bad draw of character and ability(ies).

I've also been looking at core mechanics as well such as:

- Whether to always have 6 dice, and upgrade the dice as you progress
- Must discard x action cards to do a thwart, doesn't matter what's on it. (Whilst keeping the initial way of adding dice to thwarts)

---

### 2020-01-13 - 2020-02-09

During this time I was working towards building a version that could actually be play tested with people. Here's a summary of the game at the end of this period:

Zero to Hero is a co-op game of building your character from a normal person to a fully fledged super hero. By battling harder crimes and villains you can level up your gadgets and abilities to create the hero you want. The game creates a randomised city for you each time you play and crimes will keep getting spawned and get closer towards being successful. Each player uses action cards to move around the board, upgrade gadgets/abilities and increase their chances of thwarting crime. The heroes are successful when they have successfully defeated 3 villains. They lose when the Threat level has increased too much (this happens when crimes succeed and villains get an action).

I managed to have a few play testable version of this and had a great session at a play test meetup.

Here's some key takeaways:

- Locations used to be fixed on the board, now they are cards to distribute randomly at the start of the game
- The rewards for solving a crime are specified on the back of the location card the crime was on. Giving a unique flavour to each crime you solve
- Negative consequences for crimes completing are on the back of the crime card, giving a similar flavour to the rewards
- Gadget/ability cards used to have a resonable sized upgrade tree and each was a separate card. Now all upgrades for a gadget/ability fit on 1 card. (By using half a card and the front/back to have 4 different versions)
- Character cards are long and let you slot in gadget/ability cards so you can easily see what's active
- Players draw and play action cards to do things like move, upgrade, increase chances of thwarting a crime
- Crimes and villain actions are triggered in an event phase after each players turn, similar to Pandemic
- Early versions did result in a lot of dice being used, which isn't great UX
- Fate dice were being used where a + counts as a success and a - could be converted into a + by some card effects
- There have been issues with the way thwarting occurs, tried having a set number of turns, action cards that allow thwarting and thwart tokens that each character has. None of these methods quite work yet
- At the moment the difficulty of crimes and villains increases over time, but not the title of crimes or consequences of crimes succeeding. Which doesn't make it feel like the seriousness is scaling
- Crime cards rotate when they are getting nearer to being completed, leading to a nice visual way of seeing which crimes are closer
- Action cards may specify an amount of resources they give when discarded. This resources are used to upgrade gadgets/abilities
- Solving a crime increases the experience track, crimes succeeding increases the threat track. The experience track helps to decide how difficult the crimes should be, the threat track gives an end game condition

![Zero to Hero](../assets/zero-to-hero-001.jpg)
![Zero to Hero](../assets/zero-to-hero-002.jpg)
![Zero to Hero](../assets/zero-to-hero-003.jpg)
![Zero to Hero](../assets/zero-to-hero-004.jpg)
![Zero to Hero](../assets/zero-to-hero-005.jpg)
