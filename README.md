## Summary

We investigate a data set containing 1,157 baseball players including their handedness (right or left handed), height, weight, batting average, and home runs. From 4 plots we see that both handed baseball players have less height and weight on average, in other words, players with higher height and weight tend to prefer use only one hand. For performance, left-handed baseball players stand out in both batting averag and home runs.

## Design

Since I am concerned about the relationship between handedness with height, weight, bitting average and home runs separately, so I make boxplot of these variables. Using boxplot help me see average values group by handedness and we can also see the value distribution of each handedness group. To make you more focused and does not distract by other plots, I only show one plot at one time, you can switch plots by click buttons.

## Feedback

### Person 1:
To me, it seems the most interesting finding is that left handed players seem to have higher averages and higher home run values. I'm not sure that the height and weight charts tell me anything specific. The difference in the both handed players vs the other handed players could just be due to the both handed players having a small sample size. 

To really make this visualization explanatory instead of exploratory, the story about left handed players being better players needs to be highlighted and at the forefront. The message needs to be clear to the reader that the purpose of the visualization is to show that left handed players tend to perform better. That probably means opening the visualization with the average home runs and battings score visualizations rather than height and weight. The summary and chart titles should mention the story about left handed players being better.

### Improvement 1:
* Change title for different boxplot to make it more expressively
* Initially show first boxplot (used to not show any boxplot before clicking any button)
* Move description text left

### Person 2:
What do I notice? Left handed batters appear to, typically, have better stats for both batting average and HR. Which is interesting. Switch hitters are both shorter and lighter, on average, than either left of right handed players.

Questions, as a visual tool, box plots are a good way to summarize information. In the case of HR, for example, you probably should describe the output a little (as the 'tails' of the box plots are different for right and left handed batters, what does this mean). Instead of having the same description for each plot, I think that you should write a sentence or two describing or interpreting the graphs.

Over all it is an interesting approach, and easy to interpret.

p.s. when you click on each of the buttons, you should change their colors (as a guide to the viewer of which section they are at).

### Improvement 2:
* Make only one button highlighted each time (used to highlighted all buttons that were clicked)

### Person 3:
Very nice visualization! I like how boxplots show difference between different handed players. However, there is still room for improvement. As suggested by previous review (and also mentioned in Person 2) main story here is difference in home runs and batting averages between left, right and both handed players. It is nice that new version actually shows some chart from the beginning, but it still shows not the most important one. Consider making chart with home runs default one.

Additional suggestions:

Maybe it will be better to cut off some outliers on HR chart. Currently median value is dwarfed by extreme outliers and it is hard to see difference in values if you don't look at numbers. Great visualization should be sufficient itself, not rely only on labels. Now, if you strip numbers it will be very hard to say which handed players have higher median home runs.
Consider highlighting bar you want to draw attention to (I mean left handed players). Use bright color for this bar and more light for other.
Maybe you should make button captions more clear: currently it is confusing what avg or HR means at the first glance.
Buttons are overlapping with y-axis. Consider moving them a little bit or move axis to other side of plot.

### Improvement 3
* Making chart with home runs default one
* Cut off some outliers on HR chart
* Make button captions more clear
* Make transition time from 50 to 200


## Resources
* [D3.js Boxplot with Axes and Labels](http://bl.ocks.org/jensgrubert/7789216) 

## Versions
* Initial version (git checkout 3dce7c)  
* Improvement 1 (git checkout 9eff26)  
* Improvemnet 2 (git checkout 6f739e)
* Improvement 3 (git checkout gh-pages)