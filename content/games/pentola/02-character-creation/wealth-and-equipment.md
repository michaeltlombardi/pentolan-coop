---
title: Wealth and Equipment
description: The basic items a character starts with and an overview of their place in the economy
type: chapter
weight: 100
---

Pentolans primarily use card money for the exchange of goods and services, but also barter.
In Pentola, wealth is abstracted and represented by a [resource deck](/01-core-mechanics/resource-decks).
Characters are assumed to **start with a default wealth** of _average_ (a 2-suit deck with a ranking of basic).

| Rating |   Status   |    Ranking    | Suits |        Social Class        |
|:------:|:----------:|:-------------:|:-----:|:--------------------------:|
| 06     | Destitute  | Nonexistant   |   1   | Beggars                    |
| 26     | Poor       | Basic         |   1   | Laborers                   |
| 46     | Average    | Comprehensive |   2   | Tradesfolk                 |
| 66     | Prosperous | Extraordinary |   2   | Minor merchants, officials |
| 86     | Wealthy    | Incredible    |   3   | Merchants, minor nobility  |
| ☀️️️6     | Rich       | Unbelievable |   4   | Spirons, Guildheads        |

Whenever you make a purchase, including buying additional starting equipment, you must pay the cost equal to the item's value from your wealth deck.
If the total you draw is higher than the cost of the item, you overpay and the card is still spent.
Place these cards into a pile together as your spent wealth.

If you ever run entirely out of cards in your deck, you drop to the next lowest wealth rank and gain a new deck with the appropriate number of suits.

Whenever you make a sale you may:

- Randomly draw one card from your spent wealth pile
- Select any number of cards from your spent wealth pile whose worth totals up to no more than half the value of whatever you are selling
- Opt to be paid a _favor card_ instead
- Be otherwise paid in whatever other way seems fair to your character via bargaining and bartering

To raise your wealth, you need to invest during your downtime and see it pay off.
For more information, see [Growth and Change](/02-character-creation/growth-and-change/)

<!-- TODO: Fill out favor cards

## Favor Cards

When a character opts to be paid with a favor card the referee deals them a card from the Favors Deck.
This is a special full deck of Pentolan cards each of which is simultaneously currency _and_ a minor one-use magical item.
To trigger the card's effect you must tear it in half, destroying it irrevocably.

If the value of the favor card is _less_ than the value of whatever is being sold you may try to convince the purchaser to offer another card instead (by haggling, intimidating, reasoning, etc).
You may try to convince them to draw an _additional_ card, but the test will be one step harder.

If the value  of the favor card is _higher_ than the value of whatever is being sold the buyer is overpaying for some reason—they may or may not be aware that they're overpaying depending on the context.

| Card | Effect |
|:----:|:-------|
|  1 ♠  | TODO
|  2 ♠  | TODO
|  3 ♠  | TODO
|  4 ♠  | TODO
|  5 ♠  | TODO
|  6 ♠  | TODO
|  7 ♠  | TODO
|  J ♠  | Remove a blemish or scar from self.
|  K ♠  | Remove the need to breathe for self for an hour.
|  Q ♠  | Nourish self for a week as if having eaten delicious, hearty meals every day.
|  1 ♥  | TODO
|  2 ♥  | TODO
|  3 ♥  | TODO
|  4 ♥  | TODO
|  5 ♥  | TODO
|  6 ♥  | TODO
|  7 ♥  | TODO
|  J ♥  | TODO
|  K ♥  | TODO
|  Q ♥  | TODO
|  1 ♣  | TODO
|  2 ♣  | TODO
|  3 ♣  | TODO
|  4 ♣  | TODO
|  5 ♣  | TODO
|  6 ♣  | TODO
|  7 ♣  | TODO
|  J ♣  | TODO
|  K ♣  | TODO
|  Q ♣  | TODO
|  1 ♦  | TODO
|  2 ♦  | TODO
|  3 ♦  | TODO
|  4 ♦  | TODO
|  5 ♦  | TODO
|  6 ♦  | TODO
|  7 ♦  | TODO
|  J ♦  | TODO
|  K ♦  | TODO
|  Q ♦  | TODO

-->

{{< detail mechanical "Abstract Wealth and Economy" >}}
Economic concerns in Pentola are abstracted away, but not entirely.
The goal is to provide _some_ resource management without making it over-burdensome.
It also introduces risk and tension to every purchase and sale that a character makes—the hope being that players will pay more attention to their equipment list and try to use it more creatively.

You can swap out the abstraction for something more familiar, like gold/silver/copper, but be mindful that this will require some fiddling.
Guidelines for items converted from other systems:

+ Every 100 silver pieces in Runequest is roughly equal to 1 point of value.
+ Every 10 gold pieces in an OSR game is roughly equal to 1 point of value.

This begins to break down when you get to very expensive items like plate armor, ships, horses (drakes in Pentola, there's no horses!), and most magic items.
Consider making acquiring these items more akin to a side quest to convince the seller to make a deal or acquire the funds.
Also keep in mind that most other systems are lower-magic than Pentola—one option is to drop the cost of magic items to 1/10th.

Also be mindful that it's _okay_ for some things to be beyond the reach of relatively new characters and to give more experienced characters access to better equipment by grant from their organization, by recovering them from catacombs, or by outright stealing them.
Each of these options can turn equipment acquisition into a more interesting, impactful part of the campaign.
{{< /detail >}}

## Starting Equipment

To speed up character creation, characters all begin with a set of starting equipment.
They may, optionally, buy additional equipment from the [appendices](/appendices/equipment) or seek additional equipment.
If you rolled for or chose an archetype in the skills section you will _probably_ want to select the equipment package that matches it here.

{{< detail note "Reading the Equipment Rolltable" >}}
Each item has some text in parentheses after it:

- V3 means the item has a value of 3,
- AP3 means it has an armor protection rating of 3,
- and the rest either relates to the item's ratings or specific qualities, all of which are explained in more detail in the [appendices](/appendices/equipment) but not needed for character creation.
{{< /detail >}}

{{< rolltable "pentola/archetype/equipment" "" "singular" >}}

{{< detail example "Determining Wealth and Buying Equipment for Taryn" >}}
Taryn starts with an average wealth, meaning they have a resource deck consisting of two suits with a ranking of comprehensive.

We chose drakerider for Taryn's archetype earlier, so we'll just use that equipment to start.

That nets us some good armor, a sword and shield, a lance, a dagger, and equipment for drakeriding.

To round out Taryn though, we want to pick up a lantern and two flasks of oil—it'd be nice to grab a bow and some arrows, too!

- For the lantern (value 3) and flasks of oil (value 1 each) Taryn can look through their deck and select up to two cards; best to just pay with a 5 for now, placing that card in their spent pile.
- For the bow (value 2) and arrows (value 1), Taryn can just pay with a 3.

{{< /detail >}}

## Encumbrance

A character can carry a number of items equal to their max {{< icon blood >}} with no issues.
Carrying over this amount means they are encumbered and all tests are one step harder—they can also only ever move to somewhere nearby in a moment.
They simply cannot carry more than double their max {{< icon blood >}}.

Note that some items can increase your encumbrance maximum by making carrying items easier.

{{< detail mechanical "Encumbrance and Large or Small Items" >}}
Sometimes, it seems obvious that an object shouldn't take up a slot for each instance of that item—arrows, scrolls, daggers, etc—in these cases, either make a judgement call (if encumbrance is important to you) and say every 5 or 20 of an item counts as a slot, or make players use something like a scroll case or quiver and count that.
Alternatively, consider just having each unique type of item be a slot.
One tradeoff you can let the players make is allowing them to store their items in containers on their person, but make it take a moment to retrieve items from those containers.

Similarly, some items are overly bulky, awkward, or heavy—it might make sense for them to count as two or even three slots.

As with most things in Pentola, referees are empowered to make judgements that will fit their table.
{{< /detail >}}
