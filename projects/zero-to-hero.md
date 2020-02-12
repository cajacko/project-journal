# Zero to Hero 🦸‍♂️

A board game where players start as a normal person and by the end of the game have levelled up to a full on superhero through tackling crime and villains.

## Next Steps ⏭

- Try some new methods of thwarting and limiting max number of dice
- Play the whole way through and adjust for game length
- Improve the way the seriousness of crimes and punishments scale
- Simplify

## Updates 🔼

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
