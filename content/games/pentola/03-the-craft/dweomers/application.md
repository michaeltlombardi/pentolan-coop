---
title: Applying Dweomers
type: chapter
weight: 20
---

To apply a dweomer, a character must be able to gesture and chant, being sure to enunciate and get the phrasing and motions just right.
Whenever a dweomer is applied there will always be a sight and sound that nearby creatures can detect---be it a flash of light, a crack of thunder, or a shimmering in the air.
The exact effects are up to the referee and player to decide, but will automatically be detected by any close creatures by default.

If the magnitude is 4 or higher, it will be detected by nearby creatures as well;
if 6 or higher, it will be detected by distant creatures too.

### Manipulation and Complexity

Dweomers have four basic effects which can be manipulated by the Crafter: magnitude, duration, range, and volume.
Doing so, however, increases the **complexity** of the dweomer, a measure of how hard it is to work out and apply.

Each effect has a default value which the dweomer can be applied at, starting at Complexity 1.
The default value for the dweomer effects are listed in the **Manipulation Table** below.

The significant numeral of the character's crafting skill rating or memorized dweomer rating (whichever is higher) determines the maximum complexity that they can handle on each of the manipulation types if applying as a ritual.

| Complexity  | Magnitude |  Duration  |    Range     |        Volume       |
|:-----------:|:---------:|:----------:|:------------:|:-------------------:|
| 1 (default) |     1     | 1 Minute   | Close        | A Handful, an Item
|     +1      |     2     | 5 Minutes  | Nearby       | A Cubic Yard, an Object, 2 Items
|     +2      |     3     | 15 Minutes | Distant      | 2 Cubic Yards, 2 Objects, 4 Items
|     +3      |     4     | 1 Hour     | 1 Furlong    | 4 Cubic Yards, 4 Objects, 8 Items
|     +4      |     5     | 1 Twilight | 5 Furlongs   | 10 Cubic Yards, a Small Room, etc
|     +5      |     6     | 1 Day      | 2 Miles      | 20 Cubic Yards, a Large Room, etc
|     +6      |     7     | 1 Week     | 10 Miles     | 50 Cubic Yards, a Great Hall, etc
|     +7      |     8     | 1 Month    | 50 Miles     | 100 Cubic Yards, etc.
|     +8      |     9     | 1 Season   | 100 Miles    | 200 Cubic Yards, etc.
|     +9      |     ☀️️️    | 1 Year     | 500 Miles    | 500 Cubic Yards, etc.
|     +10     |     🌑    | 5 Years    | 1000 Leagues | 1000 Cubic Yards, etc.

{{< detail example "Dweomer Complexity" >}}
Alessia has a {{< icon flax >}} of 30 and a Crafting skill of 65.
If applying as a ritual, she can handle a complexity of up to 6 total across magnitude, duration, range, and volume.

Alessia could choose to apply a dweomer with a magnitude of 4 (+3 complexity), a Duration of 1 minute (default), a range of nearby (+1), and a volume of an object (+1) for a total of 5 complexity.

If she wanted the dweomer to last for 5 minutes, she could increase the complexity by 1 again to a maximum of 6, but she can't handle any higher complexity---so she _couldn't_ increase the duration to 15 minutes without reducing the magnitude, range, or volume.
{{< /detail >}}

## Ritual and Active Applications

Dweomers can be applied in two ways:

1. slowly, carefully, in a ritual, or
2. off-the-cuff, making all the requisite calculations mentally.

To apply a dweomer ritually, a Crafter must have either a written copy of it on hand or have studied it and memorized it enough to be able to apply it without a reference copy.

When applying a dweomer ritually, the character must make a {{< icon flax >}} test and may use their Crafting skill rating.
The attempt takes a quarter hour per point of complexity (e.g. a Complexity 6 ritual takes an hour and a half) and the crafter must spend {{< icon tephra >}} equal to that complexity from either their own reserves or from one or more [charms](), special items which store {{< icon tephra >}} for just such a use.

If the character has [memorized the dweomer](), ignore complexity for the ritual time up to the SN of the dweomer's rating.
If their rating in the memorized dweomer is _greater than or equal to_ the complexity, the time to apply the dweomer is one moment per point of complexity instead.

Multiple Crafters working together can reduce the time and {{< icon tephra >}} cost to apply the dweomer (reduce the time by a quarter hour per additional crafter, spread the {{< icon tephra >}} cost evenly amongst all participants), but any one crafter failing their test will cause the dweomer to fail.
The complexity limit of the dweomer is dependent on the crafter involved with the highest Crafting rating.

Failure to apply the dweomer means that the effort was wasted and can be retried.
Applying a dweomer slowly and carefully while following safety protocols prevents terrible side effects, including the damage caused by failing or botching.

{{< detail mechanical "Ritual Applications and Cost" >}}
By default, the rules don't require spending or using any additional materials or items.
This can actually feel a little weird in-fiction, as a common imagining of dweomer rituals, especially with multiple participants, evokes the idea of complex rituals, the use of esoteric ingredients, the breaking or destruction of valuable items.
Here's an optional rule you can use to incorporate material expenses for rituals:

The test to apply a dweomer as a ritual is one step harder unless performed using implements whose value is equal to the ritual's complexity.

If a ritual is performed and value equal to it's complexity is spent, the time to apply is reduced by a quarter hour
This reduction in cost is linear; if twice the complexity in value is spent, then the time to apply is reduced by half an hour, and so on.
{{< /detail >}}

When actively applying a dweomer, the crafter **must** have it memorized at a rating of 1 or higher and make a {{< icon flax >}} test to apply it.
It also requires the crafter to expend tephra equal to complexity (this can be spent from a charm, an item which stores power points).

Applying a dweomer as an action _does not necessarily_ mean in combat---in fact, it's _most_ often done outside of fighting, for most Pentolans---but stressful situations can make things even harder.
In general, tests to apply a dweomer as an action are one step harder if in melee or otherwise doing anything more strenuous than standing still and concentrating.

Failing the test indicates that the crafter was unable to correctly adjudicate the energy and manipulations and has caused a _misapplication_ - see the table below.

Botching the test causes the crafter to lose {{< icon blood >}} equal to the complexity of the dweomer in a special misapplication known as _Tephratic Feedback_.
This damage cannot be reduced by armor or other items, but a crafter can divert some of this damage by permanently reducing their {{< icon tephra >}} total by one for each point of {{< icon blood >}} they choose not to lose.
The {{< icon tephra >}} can be sourced from a charm, but it can never be refilled again if used in this way.

{{< rolltable "pentola/dweomers/misapplication" >}}

{{< detail mechanical "Dangerous Magic" >}}
Magic in Pentola is a dangerous proposition, especially under pressure.
The metaphysics of magic are unforgiving and do not tolerate failure or recklessness.

Dweomers are powerful and malleable, and crafters are able to use them to dangerous and potent effect.
If you want to make magic safer, you can make the tests easier or do away with the misapplication table, but be aware that magic will become much more convenient to use in combat.

Most characters other than battlecrafters should be free and safe to pick up dweomers for use out of combat, but crafting in battle is a specialization by design.

Encourage clever uses of magic in and out of battle, especially if the players want to stack the odds in their favor.
{{< /detail >}}
